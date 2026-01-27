import { KeyValuePair, Text } from "@/components/atoms"
import { ReminderType } from "@/types/api/reminder"
import { formatDate } from "date-fns"

type Props = {
  reminder: ReminderType | null
}

export function Details({ reminder }: Props) {
  if (!reminder) return null

  return (
    <div className="flex flex-col my-4 gap-y-2">
      <KeyValuePair label="Title" value={reminder.title} />
      <KeyValuePair label="Message" value={reminder.message} />
      <KeyValuePair label="Phone Number" value={reminder.phoneNumber} />
      <KeyValuePair
        label="Scheduled At"
        value={formatDate(
          reminder.scheduledAt,
          "EEEE, MMM do, yyyy 'at' h:mm a",
        )}
      />
      <KeyValuePair label="Timezone" value={reminder.timezone} />
      <KeyValuePair
        label="Status"
        value={
          <Text variant="key-value" className="capitalize">
            {reminder.status}
          </Text>
        }
      />
      <KeyValuePair label="Snooze Count" value={reminder.snoozeCount} />
      <KeyValuePair label="Failure Reason" value={reminder.failureReason} />
      <KeyValuePair
        label="Created At"
        value={formatDate(reminder.createdAt, "MMM do, yyyy 'at' h:mm a")}
      />
    </div>
  )
}
