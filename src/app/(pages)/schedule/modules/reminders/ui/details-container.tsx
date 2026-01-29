type Props = {
  children: React.ReactNode
}

export function DetailsContainer({ children }: Props) {
  return <div className="flex flex-col my-4 gap-y-2">{children}</div>
}
