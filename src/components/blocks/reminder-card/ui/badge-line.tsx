type Props = {
  children: React.ReactNode
}

export function BadgeLine({ children }: Props) {
  return <div className="flex mt-1.5 gap-x-2">{children}</div>
}
