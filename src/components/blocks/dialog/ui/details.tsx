import {
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/_ui/dialog"
import { KeyValueDialogProps } from "../types"
import { Button } from "@/components/atoms"

export function Details({
  isOpen,
  title,
  contentSlot,
  handleClose,
}: Omit<KeyValueDialogProps, "variant">) {
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent
        aria-describedby="details-dialog-content"
        className="w-full h-full max-w-none rounded-none sm:h-auto sm:max-w-lg sm:rounded-lg"
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="no-scrollbar -mx-5 sm:-mx-4 sm:max-h-[50vh] overflow-y-auto px-4">
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
