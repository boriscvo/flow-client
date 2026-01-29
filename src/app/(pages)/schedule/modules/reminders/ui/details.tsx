import { KeyValuePair, LoadingSkeleton, Text } from "@/components/atoms"
import { ReminderDetailsType } from "@/types/api/reminder"
import { formatDate } from "date-fns"
import { DetailsContainer } from "./details-container"
import { SearchAlert } from "lucide-react"

type Props = {
  reminder?: ReminderDetailsType | null
  status: "error" | "success" | "pending"
}

export function Details({ reminder, status }: Props) {
  if (status === "pending") {
    return (
      <DetailsContainer>
        <LoadingSkeleton className="mt-1 w-12 h-4" />
        <LoadingSkeleton className="w-36 h-4" />
        <LoadingSkeleton className="mt-2 w-12 h-4" />
        <LoadingSkeleton className="w-36 h-4" />
        <LoadingSkeleton className="mt-2 w-12 h-4" />
        <LoadingSkeleton className="w-36 h-4" />
        <LoadingSkeleton className="mt-2 w-12 h-4" />
        <LoadingSkeleton className="w-36 h-4" />
        <LoadingSkeleton className="mt-2 w-12 h-4" />
        <LoadingSkeleton className="w-36 h-4" />
        <LoadingSkeleton className="mt-2 w-12 h-4" />
        <LoadingSkeleton className="w-36 h-4" />
        <LoadingSkeleton className="mt-2 w-12 h-4" />
        <LoadingSkeleton className="w-36 h-4" />
      </DetailsContainer>
    )
  }

  if (status === "error" || !reminder) {
    return (
      <DetailsContainer>
        <div className="mb-12 flex flex-col items-center text-center">
          <SearchAlert
            className="text-destructive/70 sm:mt-12 mb-2"
            size={44}
          />
          <Text variant="main-label">Oops something went wrong</Text>
          <Text variant="main-message" className="px-3 sm:px-6">
            We were unable to load details about this reminder. Please try
            again.
          </Text>
        </div>
      </DetailsContainer>
    )
  }

  return (
    <DetailsContainer>
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
    </DetailsContainer>
  )
}
