type Props = {
  children: React.ReactNode
}
export function Container({ children }: Props) {
  return (
    <div className="flex w-full mt-2 mb-10 h-10 gap-x-2 items-center justify-end">
      {children}
    </div>
  )
}
