"use client"
import { useStats } from "../hooks/use-stats"
import { KeyValueRow } from "./key-value-row"
import { StatsLayout } from "./stats-layout"
import { StatsLoaderRow } from "./stats-loader-row"

export function Stats() {
  const {
    totalReminders,
    todayReminders,
    failedReminders,
    nextReminderAt,
    isLoading,
  } = useStats()

  if (isLoading) {
    return (
      <StatsLayout>
        <StatsLoaderRow />
        <StatsLoaderRow />
        <StatsLoaderRow />
        <StatsLoaderRow />
      </StatsLayout>
    )
  }
  return (
    <StatsLayout>
      <KeyValueRow label="Next Reminder In" value={nextReminderAt} />
      <KeyValueRow label="Today Reminders" value={todayReminders || 0} />
      <KeyValueRow label="Failed Reminders" value={failedReminders || 0} />
      <KeyValueRow label="Total Reminders" value={totalReminders || 0} />
    </StatsLayout>
  )
}
