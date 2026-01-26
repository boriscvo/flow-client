type Props = {
  children: React.ReactNode
}

export function Info({ children }: Props) {
  return <div className="md:px-6 md:py-5 flex flex-col w-full">{children}</div>
}
