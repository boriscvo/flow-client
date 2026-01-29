type Props = {
  children: React.ReactNode
}

export function Footer({ children }: Props) {
  return (
    <div className="flex max-sm:flex-col px-4 sm:px-6 py-2 max-sm:items-start max-sm:gap-y-1 sm:justify-between border-t border-divider">
      {children}
    </div>
  )
}
