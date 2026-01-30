import { getRemindersStats } from "@/api/reminders"
import { keepPreviousData, useQuery } from "@tanstack/react-query"
import { differenceInSeconds } from "date-fns"

export function useStats() {
  const { data: reminderStats, status: reminderStatsStatus } = useQuery({
    queryKey: ["reminders-stats"],
    queryFn: getRemindersStats,
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
    refetchInterval: 30000,
  })

  const formatTimeUntil = (nextReminderAt?: string): string => {
    if (!nextReminderAt) return "-"
    const target = new Date(nextReminderAt)
    const now = new Date()

    const diffSeconds = differenceInSeconds(target, now)

    if (diffSeconds <= 0) return "now"

    if (diffSeconds < 60) {
      return "< 1 min"
    }

    const diffMinutes = Math.floor(diffSeconds / 60)
    if (diffMinutes < 60) {
      return `${diffMinutes} min${diffMinutes === 1 ? "" : "s"}`
    }

    const diffHours = Math.floor(diffMinutes / 60)
    if (diffHours < 24) {
      return `${diffHours} hour${diffHours === 1 ? "" : "s"}`
    }

    const diffDays = Math.floor(diffHours / 24)
    if (diffDays < 30) {
      return `${diffDays} day${diffDays === 1 ? "" : "s"}`
    }

    return "over one month"
  }

  return {
    totalReminders: reminderStats?.totalReminders,
    todayReminders: reminderStats?.todayReminders,
    failedReminders: reminderStats?.failedReminders,
    nextReminderAt: formatTimeUntil(reminderStats?.nextReminderAt),
    isLoading: reminderStatsStatus === "pending" && !reminderStats,
  }
}
