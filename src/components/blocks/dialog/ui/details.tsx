import {
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/_ui/dialog"
import { KeyValueDialogProps } from "../types"
import { Button } from "../../../atoms/button/button"

export function Details({
  isOpen,
  title,
  contentSlot,
  handleClose,
}: Omit<KeyValueDialogProps, "variant">) {
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent aria-describedby="details-dialog-content">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="no-scrollbar -mx-4 max-h-[50vh] overflow-y-auto px-4">
          {contentSlot}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" handleClick={handleClose} label="Close" />
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
