import { Button, Text } from "@/components/atoms"
import { SearchCheck } from "lucide-react"

type Props = {
  handleAddNew: () => void
}

export function EmptyState({ handleAddNew }: Props) {
  return (
    <div className="flex flex-col gap-3 items-center justify-center max-sm:py-10 px-5 sm:p-10 border-2 border-divider rounded-xl">
      <SearchCheck className="text-primary/70" size={40} />
      <div className="gap-1 mb-1 flex flex-col items-center text-center">
        <Text variant="section-title">No reminders yet</Text>
        <Text variant="main-message">
          You can add new reminders to stay organized.
        </Text>
      </div>
      <Button
        variant="add-new"
        handleClick={handleAddNew}
        label="Add New Reminder"
      />
    </div>
  )
}
