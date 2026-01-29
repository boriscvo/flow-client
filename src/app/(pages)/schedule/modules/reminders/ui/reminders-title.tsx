import { Button, Text } from "@/components/atoms"

type Props = {
  shouldShowAddNew?: boolean
  handleClick: () => void
}

export function RemindersTitle({ shouldShowAddNew, handleClick }: Props) {
  return (
    <div className="flex mb-6 gap-x-4">
      <Text variant="section-title">Reminders</Text>
      {shouldShowAddNew && (
        <Button variant="add-new" label="Add New" handleClick={handleClick} />
      )}
    </div>
  )
}
