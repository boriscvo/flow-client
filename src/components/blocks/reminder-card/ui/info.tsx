type Props = {
  children: React.ReactNode
}

export function Info({ children }: Props) {
  return (
    <div className="px-4 sm:px-6 pt-3 sm:pt-5 pb-4 flex flex-col w-full">
      {children}
    </div>
  )
}
