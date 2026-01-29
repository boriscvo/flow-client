import { ReminderUpdateType } from "@/types/api/reminder"

export async function postReminder(data: ReminderUpdateType) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reminders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    throw new Error("Failed to post reminder")
  }

  return res.json()
}
