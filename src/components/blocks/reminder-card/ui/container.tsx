type Props = {
  children: React.ReactNode
}

export function Container({ children }: Props) {
  return (
    <div className="flex flex-col md:mx-auto w-full md:rounded-2xl bg-surface border-divider shadow">
      {children}
    </div>
  )
}
