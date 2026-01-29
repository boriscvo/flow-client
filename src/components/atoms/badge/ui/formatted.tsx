type Props = {
  label: string
}

export function Formatted({ label }: Props) {
  return label.toUpperCase()
}
