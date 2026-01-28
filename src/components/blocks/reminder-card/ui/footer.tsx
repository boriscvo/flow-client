type Props = {
  children: React.ReactNode
}

export function Footer({ children }: Props) {
  return (
    <div className="flex md:px-6 md:py-2 justify-between border-t border-divider">
      {children}
    </div>
  )
}
