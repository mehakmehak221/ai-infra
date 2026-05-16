"use client";

import { useState, useEffect, useCallback, type MouseEvent } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { hero } from "@/lib/content";
import { scrollToHash } from "@/lib/scroll";
import { springScroll, tweenReveal } from "@/components/motion/variants";

const links = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, springScroll);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => setScrolled(v > 0.02));
    return unsub;
  }, [scrollYProgress]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSectionNav = useCallback(
    (e: MouseEvent<HTMLAnchorElement>, href: string, closeMenu: boolean) => {
      if (!href.startsWith("#") || href === "#") return;

      e.preventDefault();
      if (closeMenu) setOpen(false);

      const runScroll = () => scrollToHash(href);

      if (closeMenu) {
        window.setTimeout(runScroll, 120);
      } else {
        runScroll();
      }
    },
    [],
  );

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-[100] h-[2px] origin-left bg-gradient-to-r from-teal-600 via-teal-400 to-emerald-400"
        style={{ scaleX }}
      />

      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={tweenReveal(0.65)}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-out ${
          scrolled
            ? "border-b border-stone-200/80 bg-white/95 shadow-[0_2px_20px_rgba(12,10,9,0.06)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <motion.a
            href="#"
            className="relative flex items-center"
            aria-label="AI Infra Cost Optimizer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 120, damping: 22 }}
          >
            <span
              className={`transition-opacity duration-500 ease-out ${
                scrolled ? "pointer-events-none absolute opacity-0" : "opacity-100"
              }`}
            >
              <Logo variant="light" />
            </span>
            <span
              className={`transition-opacity duration-500 ease-out ${
                scrolled ? "opacity-100" : "pointer-events-none absolute opacity-0"
              }`}
            >
              <Logo variant="dark" />
            </span>
          </motion.a>

          <motion.div className="hidden items-center gap-1 md:flex">
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={(e) => handleSectionNav(e, l.href, false)}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={tweenReveal(0.55, 0.2 + i * 0.08)}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-300 ease-out hover:text-teal-600 ${
                  scrolled ? "text-stone-500" : "text-white/75"
                }`}
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="hidden md:flex"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={tweenReveal(0.55, 0.52)}
          >
            <a href="#" className="btn-primary !px-5 !py-2.5 text-xs">
              {hero.ctaPrimary}
            </a>
          </motion.div>

          <motion.button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 120, damping: 22 }}
            className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-colors duration-300 ease-out md:hidden ${
              scrolled
                ? "border-stone-200 bg-stone-50 text-stone-700"
                : "border-white/20 bg-white/10 text-white backdrop-blur-sm"
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={tweenReveal(0.35)}
                >
                  <X className="h-4 w-4" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={tweenReveal(0.35)}
                >
                  <Menu className="h-4 w-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={tweenReveal(0.5)}
              className="border-t border-stone-200 bg-white/98 backdrop-blur-xl md:hidden"
            >
              <nav aria-label="Mobile" className="px-6 pb-6 pt-4">
                {links.map((l, i) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={(e) => handleSectionNav(e, l.href, true)}
                    className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-stone-600 transition-colors duration-300 ease-out hover:bg-teal-50 hover:text-teal-700 active:bg-teal-50"
                  >
                    {l.label}
                  </a>
                ))}
                <div className="mt-4">
                  <a href="#" className="btn-primary w-full justify-center">
                    {hero.ctaPrimary}
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
