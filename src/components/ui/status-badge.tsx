import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  type: "profit" | "loss" | "risk";
  children: React.ReactNode;
  className?: string;
}

export function StatusBadge({ type, children, className }: StatusBadgeProps) {
  const variants = {
    profit: "status-profit",
    loss: "status-loss",
    risk: "status-risk",
  };

  return (
    <span className={cn(variants[type], className)}>
      {children}
    </span>
  );
}
