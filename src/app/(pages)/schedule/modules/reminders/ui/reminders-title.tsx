import { Button, Text } from "@/components/atoms"

type Props = {
  handleClick: () => void
}

export function RemindersTitle({ handleClick }: Props) {
  return (
    <div className="flex mb-6 gap-x-4">
      <Text variant="section-title">Reminders</Text>
      <Button variant="add-new" label="Add New" handleClick={handleClick} />
    </div>
  )
}
