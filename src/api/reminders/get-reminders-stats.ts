import { ReminderStatsType } from "@/types/api/reminder"

export async function getRemindersStats() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/reminders/stats`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  )

  if (!res.ok) {
    throw new Error("Failed to get reminders stats")
  }

  return res.json() satisfies Promise<ReminderStatsType>
}
