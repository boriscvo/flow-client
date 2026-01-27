import { BellDot, Pencil, Trash, ReceiptText } from "lucide-react"
import { ReminderCardProps, ReminderCardType } from "../types"
import { Button } from "@/components/atoms"

export function Actions({
  id,
  handleOpenDelete,
  handleOpenSnooze,
  handleOpenEdit,
  handleOpenDetails,
}: Pick<
  ReminderCardProps,
  | "handleOpenDelete"
  | "handleOpenSnooze"
  | "handleOpenEdit"
  | "handleOpenDetails"
> &
  Pick<ReminderCardType, "id">) {
  return (
    <div className="flex md:px-6 md:py-2 justify-between border-t border-divider">
      <div className="flex gap-x-6">
        <Button
          variant="inline-card"
          label="View More"
          state="default"
          iconSlot={
            <ReceiptText strokeWidth={2.5} className="text-foreground" />
          }
          handleClick={() => handleOpenDetails(id)}
        />
        <Button
          variant="inline-card"
          label="Edit"
          state="default"
          iconSlot={<Pencil strokeWidth={2.5} className="text-foreground" />}
          handleClick={() => handleOpenEdit(id)}
        />
        <Button
          variant="inline-card"
          label="Delete"
          state="default"
          iconSlot={
            <Trash
              strokeWidth={2.5}
              className="hover:text-card-error-text/80"
            />
          }
          handleClick={() => handleOpenDelete(id)}
          isDestructive
        />
      </div>
      <div>
        <Button
          variant="inline-card"
          label="Snooze"
          state="default"
          iconSlot={
            <BellDot size={20} strokeWidth={2.5} className="text-foreground" />
          }
          handleClick={() => handleOpenSnooze(id)}
        />
      </div>
    </div>
  )
}
