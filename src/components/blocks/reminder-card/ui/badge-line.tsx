type Props = {
  children: React.ReactNode
}

export function BadgeLine({ children }: Props) {
  return <div className="flex flex-wrap mt-1.5 gap-2">{children}</div>
}
