type Props = {
  children: React.ReactNode
}

export function BadgeLine({ children }: Props) {
  return <div className="flex mt-2 gap-x-2">{children}</div>
}
