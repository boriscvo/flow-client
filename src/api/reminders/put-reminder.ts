import { ReminderUpdateType } from "@/types/api/reminder"

export async function putReminder(data: ReminderUpdateType, id: string | null) {
  if (!id) {
    throw new Error("Reminder ID is required for updating")
  }
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/reminders/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  )

  if (!res.ok) {
    throw new Error("Failed to post reminder")
  }

  return res.json()
}
