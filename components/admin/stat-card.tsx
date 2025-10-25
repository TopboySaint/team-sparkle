import type { LucideIcon } from "lucide-react"

interface StatCardProps {
  icon: LucideIcon
  label: string
  value: string
  change: string
}

export function StatCard({ icon: Icon, label, value, change }: StatCardProps) {
  return (
    <div className="bg-white border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <span className="text-sm font-semibold text-green-600">{change}</span>
      </div>
      <p className="text-muted-foreground text-sm mb-1">{label}</p>
      <p className="text-2xl font-bold text-foreground">{value}</p>
    </div>
  )
}
