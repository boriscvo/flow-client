type Props = {
  children: React.ReactNode
}

export function Description({ children }: Props) {
  return (
    <div className="flex flex-col mb-6 gap-2 sm:max-w-[70%]">{children}</div>
  )
}
