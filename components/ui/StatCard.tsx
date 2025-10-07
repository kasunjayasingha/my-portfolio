import { Card } from "./Card";

type StatCardProps = {
  icon?: React.ReactNode;
  value: string;
  label: string;
};

export function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <Card className="flex items-center gap-4">
      {icon && <div className="text-[var(--accent)]">{icon}</div>}
      <div>
        <div className="text-2xl font-semibold">{value}</div>
        <div className="text-sm text-[var(--muted)]">{label}</div>
      </div>
    </Card>
  );
}


