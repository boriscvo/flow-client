import { Text } from "@/components/atoms"

type Props = {
  label: string
  value?: string | number
}

export function KeyValueRow({ label, value }: Props) {
  return (
    <div className="flex justify-between w-full items-center">
      <Text variant="stats-label">{label}</Text>
      <Text variant="stats-value">{value}</Text>
    </div>
  )
}
