export async function postSnooze(id: string | null) {
  if (!id) {
    throw new Error("Reminder ID is required for snoozeing")
  }
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/reminders/${id}/snooze`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    },
  )

  if (!res.ok) {
    throw new Error("Failed to post snooze")
  }

  return res.json()
}
