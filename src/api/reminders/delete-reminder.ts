export async function deleteReminder(id?: string | null) {
  if (!id) {
    throw new Error("Reminder ID not found")
  }
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/reminders/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    },
  )
  if (!res.ok) {
    throw new Error("Failed to delete reminder")
  }

  return
}
