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
import { Loader2 } from "lucide-react"

export function Alert({
  isOpen,
  title,
  descriptionSlot,
  isLoading,
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
            label={isLoading ? <Loader2 className="animate-spin" /> : "Delete"}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
