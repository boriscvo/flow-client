type Props = {
  children: React.ReactNode
}

export function Container({ children }: Props) {
  return (
    <div className="flex flex-col mx-auto w-full rounded-lg sm:rounded-2xl bg-surface shadow-md border border-divider">
      {children}
    </div>
  )
}
