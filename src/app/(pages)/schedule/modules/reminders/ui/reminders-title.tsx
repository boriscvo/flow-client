import { Button, Checkbox, Text } from "@/components/atoms"
import { ArrowDown10, ArrowUp10 } from "lucide-react"

type Props = {
  shouldShowAddNew: boolean
  shouldHideCompleted: boolean
  isSortAsc: boolean
  isError?: boolean
  handleClick: () => void
  handleSort: () => void
  handleHideCompleted: () => void
}

export function RemindersTitle({
  shouldShowAddNew,
  shouldHideCompleted,
  isSortAsc,
  isError,
  handleClick,
  handleSort,
  handleHideCompleted,
}: Props) {
  const iconClass = `text-foreground size-6 -mt-0.5 transition-transform duration-500` //mt-0.5 for a bit of a visual centering, edge case usage only
  return (
    <div className="flex max-sm:flex-col sm:items-center justify-between mt-6 sm:mb-6">
      <div className="flex gap-x-4 max-sm:mb-6">
        <Text variant="section-title">Reminders</Text>
        {shouldShowAddNew && (
          <Button variant="add-new" label="Add New" handleClick={handleClick} />
        )}
      </div>
      {!isError && (
        <div className="flex gap-x-2 max-sm:mb-2">
          <Checkbox
            label="Hide Past"
            isChecked={shouldHideCompleted}
            handleClick={handleHideCompleted}
          />{" "}
          <Button
            variant="toggle-icon"
            icon={
              isSortAsc ? (
                <ArrowUp10 strokeWidth={2} className={iconClass} />
              ) : (
                <ArrowDown10 strokeWidth={2} className={iconClass} />
              )
            }
            handleClick={handleSort}
          />
        </div>
      )}
    </div>
  )
}
