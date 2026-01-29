import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/_ui/dialog"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/_ui/form"
import { Input } from "@/components/_ui/input"
import { Button } from "@/components/atoms"
import { ReminderFormDialogProps } from "../types"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/_ui/select"
import { TIMEZONE_OPTIONS } from "@/utils/const/timezones"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/_ui/popover"
import { Calendar } from "@/components/_ui/calendar"
import { formatDate } from "date-fns"

export function ReminderForm({
  isOpen,
  form,
  title,
  handleSubmit,
  handleClose,
}: Omit<ReminderFormDialogProps, "variant">) {
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent
        aria-describedby="reminder-form-dialog-content"
        className="max-sm:flex max-sm:flex-col sm:max-w-xl sm:w-132 w-full h-full max-w-none rounded-none sm:h-auto sm:rounded-lg"
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={handleSubmit}
            className="max-sm:flex max-sm:flex-col max-sm:h-full"
          >
            <div className="no-scrollbar space-y-4 -mx-4 max-h-[75vh] sm:max-h-[50vh] overflow-y-auto px-4 py-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone number</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex max-sm:flex-col gap-2 justify-between items-start">
                <FormField
                  control={form.control}
                  name="scheduledAtDate"
                  render={({ field }) => (
                    <FormItem className="min-w-40 sm:min-w-34">
                      <FormLabel>Date</FormLabel>
                      <FormControl>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="form-trigger"
                              version="outline"
                              label={
                                field.value
                                  ? formatDate(new Date(field.value), "PPP")
                                  : "Select date"
                              }
                              type="button"
                            />
                          </PopoverTrigger>
                          <PopoverContent
                            align="start"
                            className="p-0 bg-background"
                          >
                            <Calendar
                              mode="single"
                              selected={
                                field.value ? new Date(field.value) : undefined
                              }
                              disabled={(date) => {
                                const today = new Date()
                                today.setHours(0, 0, 0, 0)
                                return date < today
                              }}
                              onSelect={(date) => {
                                field.onChange(date?.toLocaleDateString())
                              }}
                            />
                          </PopoverContent>
                        </Popover>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="scheduledAtTime"
                  render={({ field }) => (
                    <FormItem className="max-sm:min-w-40">
                      <FormLabel>Time</FormLabel>
                      <FormControl>
                        <Input type="time" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="timezone"
                  render={({ field }) => (
                    <FormItem className="max-sm:min-w-40 sm:flex-1">
                      <FormLabel>Timezone</FormLabel>
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select timezone" />
                          </SelectTrigger>
                          <SelectContent className="sm:bg-white">
                            {TIMEZONE_OPTIONS.map((tz) => (
                              <SelectItem key={tz.value} value={tz.value}>
                                {tz.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <DialogFooter className="max-sm:mt-auto mt-6 pt-2">
              <Button
                variant="outline"
                label="Cancel"
                handleClick={handleClose}
              />
              <Button
                variant="form-trigger"
                type="submit"
                version="default"
                label="Save"
              />
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
