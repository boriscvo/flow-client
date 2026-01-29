type Props = {
  children: React.ReactNode
}

export function DialogLinkContainer(props: Props) {
  return (
    <div className="flex max-sm:flex-col max-sm:items-start max-sm:gap-y-1 gap-x-6">
      {props.children}
    </div>
  )
}
