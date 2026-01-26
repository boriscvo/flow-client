import { BellDot, Pencil, Trash } from "lucide-react"
import { ReminderCardProps, ReminderCardType } from "../types"
import { Button } from "@/components/atoms"

export function Actions({
  id,
  handleOpenDelete,
  handleOpenSnooze,
  handleOpenEdit,
}: Pick<
  ReminderCardProps,
  "handleOpenDelete" | "handleOpenSnooze" | "handleOpenEdit"
> &
  Pick<ReminderCardType, "id">) {
  return (
    <div className="flex md:px-6 md:py-2 justify-between border-t-2 border-divider">
      <div className="flex gap-x-6">
        <Button
          variant="inline-card"
          label="Edit"
          state="default"
          iconSlot={
            <Pencil size={20} strokeWidth={2.5} className="text-foreground" />
          }
          handleClick={() => handleOpenEdit(id)}
        />
        <Button
          variant="inline-card"
          label="Delete"
          state="default"
          iconSlot={<Trash strokeWidth={2.5} className="text-foreground" />}
          handleClick={() => handleOpenDelete(id)}
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
