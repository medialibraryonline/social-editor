import * as React from "react";
import { X } from "lucide-react";

interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

interface DialogContentProps {
  children?: React.ReactNode;
  className?: string;
}

interface DialogTriggerProps {
  children?: React.ReactNode;
  asChild?: boolean;
}

const DialogContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
}>({
  open: false,
  setOpen: () => {},
});

export function Dialog({ open: controlledOpen, onOpenChange, children }: DialogProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false);
  
  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = onOpenChange ?? setUncontrolledOpen;

  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  );
}

export function DialogTrigger({ children, asChild }: DialogTriggerProps) {
  const { setOpen } = React.useContext(DialogContext);
  
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        setOpen(true);
        if (children.props.onClick) {
          children.props.onClick(e);
        }
      },
    } as any);
  }

  return (
    <button onClick={() => setOpen(true)}>
      {children}
    </button>
  );
}

export function DialogContent({ children, className = "" }: DialogContentProps) {
  const { open, setOpen } = React.useContext(DialogContext);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50" 
        onClick={() => setOpen(false)}
      />
      
      {/* Dialog */}
      <div className={`relative bg-white rounded-lg shadow-lg max-w-lg w-full mx-4 p-6 ${className}`}>
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        {children}
      </div>
    </div>
  );
}

export function DialogHeader({ children, className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col space-y-1.5 text-center sm:text-left ${className}`}>
      {children}
    </div>
  );
}

export function DialogTitle({ children, className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <h2 className={`text-lg font-semibold leading-none tracking-tight ${className}`}>
      {children}
    </h2>
  );
}

export function DialogDescription({ children, className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <p className={`text-sm text-muted-foreground ${className}`}>
      {children}
    </p>
  );
}
