import { useEffect, useRef, useState } from "react";
import { Link } from "@/lib/router";
import { AlertCircle, AlertTriangle, CheckCircle2, Info, X } from "lucide-react";
import {
  useToastActions,
  useToastState,
  type ToastItem,
  type ToastTone,
} from "../context/ToastContext";
import { cn } from "../lib/utils";

const toneStyles: Record<ToastTone, { container: string; icon: string; progress: string }> = {
  info: {
    container:
      "border-sky-200 bg-white text-slate-900 dark:border-sky-500/20 dark:bg-slate-900 dark:text-slate-100",
    icon: "text-sky-500 dark:text-sky-400",
    progress: "bg-sky-500 dark:bg-sky-400",
  },
  success: {
    container:
      "border-emerald-200 bg-white text-slate-900 dark:border-emerald-500/20 dark:bg-slate-900 dark:text-slate-100",
    icon: "text-emerald-500 dark:text-emerald-400",
    progress: "bg-emerald-500 dark:bg-emerald-400",
  },
  warn: {
    container:
      "border-amber-200 bg-white text-slate-900 dark:border-amber-500/20 dark:bg-slate-900 dark:text-slate-100",
    icon: "text-amber-500 dark:text-amber-400",
    progress: "bg-amber-500 dark:bg-amber-400",
  },
  error: {
    container:
      "border-red-200 bg-white text-slate-900 dark:border-red-500/20 dark:bg-slate-900 dark:text-slate-100",
    icon: "text-red-500 dark:text-red-400",
    progress: "bg-red-500 dark:bg-red-400",
  },
};

const ToneIcon = ({ tone }: { tone: ToastTone }) => {
  const cls = cn("h-[18px] w-[18px] shrink-0 mt-px", toneStyles[tone].icon);
  if (tone === "success") return <CheckCircle2 className={cls} />;
  if (tone === "error") return <AlertCircle className={cls} />;
  if (tone === "warn") return <AlertTriangle className={cls} />;
  return <Info className={cls} />;
};

function ProgressBar({ ttlMs, tone }: { ttlMs: number; tone: ToastTone }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "none";
    el.style.width = "100%";
    const raf = requestAnimationFrame(() => {
      el.style.transition = `width ${ttlMs}ms linear`;
      el.style.width = "0%";
    });
    return () => cancelAnimationFrame(raf);
  }, [ttlMs]);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden rounded-b-lg">
      <div ref={ref} className={cn("h-full opacity-40", toneStyles[tone].progress)} style={{ width: "100%" }} />
    </div>
  );
}

function AnimatedToast({
  toast,
  onDismiss,
}: {
  toast: ToastItem;
  onDismiss: (id: string) => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <li
      className={cn(
        "pointer-events-auto relative overflow-hidden rounded-lg border shadow-lg ring-1 ring-black/5 backdrop-blur-xl transition-[transform,opacity] duration-200 ease-out dark:ring-white/5",
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
        toneStyles[toast.tone].container,
      )}
    >
      <div className="flex items-start gap-3 px-3.5 py-3">
        <ToneIcon tone={toast.tone} />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold leading-5">{toast.title}</p>
          {toast.body && (
            <p className="mt-0.5 text-xs leading-4 text-slate-500 dark:text-slate-400">
              {toast.body}
            </p>
          )}
          {toast.action && (
            <Link
              to={toast.action.href}
              onClick={() => onDismiss(toast.id)}
              className="mt-1.5 inline-flex text-xs font-medium underline underline-offset-4 hover:opacity-75"
            >
              {toast.action.label} →
            </Link>
          )}
        </div>
        <button
          type="button"
          aria-label="Dismiss notification"
          onClick={() => onDismiss(toast.id)}
          className="mt-0.5 shrink-0 rounded p-0.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 dark:text-slate-500 dark:hover:bg-slate-800 dark:hover:text-slate-300"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
      <ProgressBar ttlMs={toast.ttlMs} tone={toast.tone} />
    </li>
  );
}

export function ToastViewport() {
  const toasts = useToastState();
  const { dismissToast } = useToastActions();

  if (toasts.length === 0) return null;

  return (
    <aside
      aria-live="polite"
      aria-atomic="false"
      className="pointer-events-none fixed bottom-4 right-4 z-[120] flex w-full max-w-[360px] flex-col gap-2"
    >
      {toasts.map((toast) => (
        <AnimatedToast key={toast.id} toast={toast} onDismiss={dismissToast} />
      ))}
    </aside>
  );
}
