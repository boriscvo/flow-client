import { Text } from "../text/text"

type Props = {
  label: string
  value: string | React.ReactNode
}

export function KeyValuePair({ label, value }: Props) {
  return (
    <div className="flex flex-col justify-between">
      <div className="">
        <Text variant="key-label">{label}</Text>
      </div>
      <div className="">
        {typeof value === "string" ? (
          <Text variant="key-value">{value}</Text>
        ) : (
          value || "-"
        )}
      </div>
    </div>
  )
}
