"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Calendar, CheckCircle2, Loader2, X } from "lucide-react";
import { useEffect, useId, useState, type FormEvent } from "react";
import {
  emptyLeadForm,
  type HotCakeInput,
  type HotCakeResponse,
} from "@/lib/hot-cake";
import { CALENDLY_URL } from "@/lib/urls";
import { easePremium } from "@/components/motion/variants";

type LeadFormModalProps = {
  open: boolean;
  context?: string;
  onClose: () => void;
};

type FormState = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition-[border-color,box-shadow] placeholder:text-stone-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20";

export function LeadFormModal({ open, context, onClose }: LeadFormModalProps) {
  const reduced = useReducedMotion();
  const titleId = useId();
  const [form, setForm] = useState<HotCakeInput>(emptyLeadForm);
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof HotCakeInput, string>>>({});
  const [banner, setBanner] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setForm(emptyLeadForm);
      setState("idle");
      setErrors({});
      setBanner(null);
    }
  }, [open]);

  function updateField<K extends keyof HotCakeInput>(key: K, value: HotCakeInput[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    setBanner(null);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setState("submitting");
    setBanner(null);
    setErrors({});

    const payload: HotCakeInput = {
      ...form,
      message: context
        ? `[${context}]\n${form.message}`.trim()
        : form.message.trim(),
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as HotCakeResponse;

      if (res.ok && data.success) {
        setState("success");
        return;
      }

      setState("error");
      if (!data.success && data.errors) {
        setErrors(data.errors);
      }
      setBanner(
        !data.success
          ? data.message
          : "Something went wrong. Please try again.",
      );
    } catch {
      setState("error");
      setBanner("Network error. Please check your connection and try again.");
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-end justify-center p-4 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0.01 : 0.25 }}
        >
          <motion.button
            type="button"
            aria-label="Close dialog"
            className="absolute inset-0 bg-stone-950/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-2xl shadow-stone-900/20"
            initial={{ opacity: 0, y: reduced ? 0 : 32, scale: reduced ? 1 : 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reduced ? 0 : 24, scale: reduced ? 1 : 0.98 }}
            transition={{ duration: reduced ? 0.01 : 0.35, ease: easePremium }}
          >
            <motion.div className="border-b border-stone-100 bg-gradient-to-br from-teal-50/80 via-white to-stone-50 px-6 py-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
                    Get started
                  </p>
                  <h2 id={titleId} className="mt-1 text-xl font-bold text-stone-900">
                    Request your free audit
                  </h2>
                  
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-stone-200 text-stone-500 transition-colors hover:bg-stone-50 hover:text-stone-800"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </motion.div>

            {state === "success" ? (
              <div className="px-6 py-10 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-stone-900">
                  You&apos;re on the list
                </h3>
                <p className="mx-auto mt-2 max-w-sm text-sm text-stone-500">
                  Thanks for reaching out. Our team will contact you shortly.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <button type="button" onClick={onClose} className="btn-primary justify-center">
                    Done
                  </button>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-btn inline-flex items-center justify-center gap-2 rounded-xl border border-stone-200 bg-stone-50 px-6 py-3 text-sm font-semibold text-stone-700"
                  >
                    <Calendar className="h-4 w-4" />
                    Book a call instead
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 px-6 py-6">
                {banner && (
                  <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {banner}
                  </p>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" error={errors.name} required>
                    <input
                      className={fieldClass}
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      placeholder="Jane Doe"
                      autoComplete="name"
                      required
                    />
                  </Field>
                  <Field label="Company" error={errors.companyName} required>
                    <input
                      className={fieldClass}
                      value={form.companyName}
                      onChange={(e) => updateField("companyName", e.target.value)}
                      placeholder="Acme Corp"
                      autoComplete="organization"
                      required
                    />
                  </Field>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Work email" error={errors.email} required>
                    <input
                      type="email"
                      className={fieldClass}
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="jane@company.com"
                      autoComplete="email"
                      required
                    />
                  </Field>
                  <Field label="Mobile" error={errors.mobile} required>
                    <input
                      type="tel"
                      className={fieldClass}
                      value={form.mobile}
                      onChange={(e) => updateField("mobile", e.target.value)}
                      placeholder="9876543210"
                      autoComplete="tel"
                      required
                    />
                  </Field>
                </div>

                <Field label="How can we help?" error={errors.message}>
                  <textarea
                    className={`${fieldClass} min-h-[100px] resize-y`}
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    placeholder="Tell us about your AI stack, monthly spend, or goals…"
                    rows={4}
                  />
                </Field>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <button
                    type="submit"
                    disabled={state === "submitting"}
                    className="btn-primary flex-1 justify-center disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {state === "submitting" ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting…
                      </span>
                    ) : (
                      "Submit request"
                    )}
                  </button>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-stone-200 bg-stone-50 px-6 py-3 text-sm font-semibold text-stone-700 transition-colors hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800"
                  >
                    <Calendar className="h-4 w-4" />
                    Book 30-min call
                  </a>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-stone-500">
        {label}
        {required && <span className="text-teal-600"> *</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  );
}
