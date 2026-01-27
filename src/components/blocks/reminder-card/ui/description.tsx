import { Text } from "@/components/atoms"

type Props = {
  titleSlot: React.ReactNode
  messageSlot?: React.ReactNode
}

export function Description({ titleSlot, messageSlot }: Props) {
  return (
    <div className="flex flex-col mb-6 gap-2 max-w-[70%]">
      <Text variant="card-title">{titleSlot}</Text>
      {messageSlot && (
        <Text variant="card-message" className="truncate">
          {messageSlot}
        </Text>
      )}
    </div>
  )
}
