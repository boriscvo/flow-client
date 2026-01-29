type Props = {
  children: React.ReactNode
}

export function Main({ children }: Props) {
  return (
    <div className="max-sm:flex-col flex-row-reverse flex w-full sm:justify-between">
      {children}
    </div>
  )
}
