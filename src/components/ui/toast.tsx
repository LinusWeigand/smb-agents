import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';

type Variant = 'default' | 'destructive';
type Toast = { id: number; title: string; description?: string; variant: Variant };

const ToastContext = createContext<{
  toast: (t: { title: string; description?: string; variant?: Variant }) => void;
} | null>(null);

const AUTO_DISMISS_MS = 5000;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismiss = useCallback((id: number) => {
    setToasts((list) => list.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    ({ title, description, variant = 'default' }: {
      title: string;
      description?: string;
      variant?: Variant;
    }) => {
      const id = Date.now() + Math.random();
      setToasts((list) => [...list, { id, title, description, variant }]);
      window.setTimeout(() => dismiss(id), AUTO_DISMISS_MS);
    },
    [dismiss],
  );

  const value = useMemo(() => ({ toast }), [toast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {/* Viewport is pointer-events:none so toasts never block the page; each
          toast re-enables pointer events for its own dismiss button. */}
      <div role="region" aria-label="Notifications (F8)" tabIndex={-1} style={{ pointerEvents: 'none' }}>
        <ol
          tabIndex={-1}
          className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]"
        >
          {toasts.map((t) => (
            <li
              key={t.id}
              className={cn(
                'pointer-events-auto relative mb-2 flex w-full items-start justify-between gap-3 overflow-hidden rounded-md border p-4 pr-8 shadow-lg font-sans',
                t.variant === 'destructive'
                  ? 'border-red-500/40 bg-red-50 text-red-900'
                  : 'border-gray-200 bg-white text-gray-900',
              )}
            >
              <div className="grid gap-1">
                <p className="text-sm font-medium">{t.title}</p>
                {t.description && <p className="text-sm opacity-80">{t.description}</p>}
              </div>
              <button
                type="button"
                aria-label="Dismiss"
                onClick={() => dismiss(t.id)}
                className="absolute right-2 top-2 rounded-md p-1 opacity-50 transition-opacity hover:opacity-100"
              >
                <X className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ol>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used inside <ToastProvider>');
  return ctx;
}
