import {
  differenceInCalendarDays,
  format,
  isToday,
  isTomorrow,
  isYesterday,
} from "date-fns"

export function getDayOnlyLabel(date: Date) {
  if (isToday(date)) return "today"
  if (isTomorrow(date)) return "tomorrow"
  if (isYesterday(date)) return "yesterday"

  const diff = differenceInCalendarDays(date, new Date())

  if (diff < 0 && diff >= -7) {
    return `last ${format(date, "EEEE")}`
  }

  return format(date, "MMM dd, yyyy")
}
