import {
  differenceInCalendarDays,
  isToday,
  isTomorrow,
  isYesterday,
  format,
} from "date-fns"
import { Text } from "../../text/text"

type Props = {
  variant: "status" | "createdAt"
  label: string
}

function getDayOnlyLabel(date: Date) {
  if (isToday(date)) return "today"
  if (isTomorrow(date)) return "tomorrow"
  if (isYesterday(date)) return "yesterday"

  const diff = differenceInCalendarDays(date, new Date())

  if (diff < 0 && diff >= -7) {
    return `last ${format(date, "EEEE")}`
  }

  return format(date, "MMM dd, yyyy")
}

export function Formatted({ variant, label }: Props) {
  switch (variant) {
    case "status":
      return label.toUpperCase()
    case "createdAt": {
      const dateFromLabel = new Date(label)
      const labelOnly = getDayOnlyLabel(dateFromLabel)
      const formattedTime = new Date(label).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })
      return (
        <div className="flex flex-col space-y-0.5 items-end">
          <Text variant="main-label" className="capitalize">
            {labelOnly}
          </Text>
          <Text variant="card-misc">at {formattedTime}</Text>
        </div>
      )
    }
  }
}
