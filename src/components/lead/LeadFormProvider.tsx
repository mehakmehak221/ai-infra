"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { LeadFormModal } from "./LeadFormModal";

type LeadFormContextValue = {
  openForm: (context?: string) => void;
  closeForm: () => void;
};

const LeadFormContext = createContext<LeadFormContextValue | null>(null);

export function LeadFormProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [context, setContext] = useState<string | undefined>();

  const openForm = useCallback((ctx?: string) => {
    setContext(ctx);
    setOpen(true);
  }, []);

  const closeForm = useCallback(() => {
    setOpen(false);
    setContext(undefined);
  }, []);

  const value = useMemo(
    () => ({ openForm, closeForm }),
    [openForm, closeForm],
  );

  return (
    <LeadFormContext.Provider value={value}>
      {children}
      <LeadFormModal open={open} context={context} onClose={closeForm} />
    </LeadFormContext.Provider>
  );
}

export function useLeadForm() {
  const ctx = useContext(LeadFormContext);
  if (!ctx) {
    throw new Error("useLeadForm must be used within LeadFormProvider");
  }
  return ctx;
}
