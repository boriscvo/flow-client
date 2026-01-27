type Props = {
  children: React.ReactNode
}

export function Info({ children }: Props) {
  return (
    <div className="md:px-6 md:pt-5 md:pb-4 flex flex-col w-full">
      {children}
    </div>
  )
}
