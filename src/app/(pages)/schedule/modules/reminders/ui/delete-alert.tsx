import { Text } from "@/components/atoms"
import { ReminderType } from "@/types/api/reminder"

type Props = {
  excerpt: Pick<ReminderType, "scheduledAt" | "title"> | null
}

export function DeleteAlert({ excerpt }: Props) {
  if (!excerpt) return null

  return (
    <Text variant="card-message">
      You are about to delete reminder <strong>{excerpt.title}</strong>{" "}
      scheduled for{" "}
      {new Date(excerpt.scheduledAt).toLocaleDateString("en-US", {
        dateStyle: "long",
      })}{" "}
      at{" "}
      {new Date(excerpt.scheduledAt).toLocaleTimeString("en-US", {
        timeStyle: "short",
      })}
      .<br />
      <br />
      Are you sure you want to proceed?
    </Text>
  )
}
