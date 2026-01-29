import { Text } from "@/components/atoms"
import { getDayOnlyLabel } from "@/utils/helpers/get-day-only-label"

type Props = {
  scheduledAt: string
  timezone: string
}

export function TimeIndicator({ scheduledAt, timezone }: Props) {
  const dateFromLabel = new Date(scheduledAt)
  const labelOnly = getDayOnlyLabel(dateFromLabel)
  const formattedTime = dateFromLabel.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: timezone,
  })

  return (
    <div className="flex max-sm:items-baseline max-sm:gap-1 max-sm:mb-4 sm:flex-col space-y-0.5 sm:items-end">
      <Text variant="main-label" className="capitalize">
        {labelOnly}
      </Text>
      <Text variant="card-misc">at {formattedTime}</Text>
    </div>
  )
}
