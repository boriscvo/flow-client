type Props = {
  children: React.ReactNode
}

export function DialogLinkContainer(props: Props) {
  return <div className="flex gap-x-6">{props.children}</div>
}
