import { ReminderType } from "@/types/api/reminder"

export async function getReminders() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reminders`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })

  if (!res.ok) {
    throw new Error("Failed to get reminder details")
  }

  return res.json() satisfies Promise<ReminderType[]>
}
