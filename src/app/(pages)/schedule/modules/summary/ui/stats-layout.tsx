type Props = {
  children: React.ReactNode
}

export function StatsLayout({ children }: Props) {
  return <div className="flex flex-col gap-y-3">{children}</div>
}
