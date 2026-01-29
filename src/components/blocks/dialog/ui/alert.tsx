import {
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/_ui/dialog"
import { AlertDialogProps } from "../types"
import { Button } from "../../../atoms/button/button"

export function Alert({
  isOpen,
  title,
  descriptionSlot,
  handleConfirm,
  handleClose,
}: Omit<AlertDialogProps, "variant">) {
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {descriptionSlot}
        <DialogFooter>
          <DialogClose asChild>
            <Button
              variant="outline"
              handleClick={handleClose}
              label="Cancel"
            />
          </DialogClose>
          <Button
            variant="destructive"
            handleClick={handleConfirm}
            label={"Delete"}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
