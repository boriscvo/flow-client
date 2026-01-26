type Props = {
  children: React.ReactNode
}

export function Main({ children }: Props) {
  return <div className="flex w-full justify-between">{children}</div>
}
