import { ReminderType } from "@/types/api/reminder"

export async function getReminder(id: string | null) {
  if (!id) {
    throw new Error("Reminder ID is required")
  }
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/reminders/${id}`,
    {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    },
  )
  if (!res.ok) {
    throw new Error("Failed to get reminder")
  }
  return res.json() satisfies Promise<ReminderType>
}
