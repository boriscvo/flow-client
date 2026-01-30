import { Text } from "@/components/atoms"

export function Message() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <Text variant="section-title">Never forget what matters</Text>
      <Text variant="main-message" className="text-center max-md:hidden">
        Schedule voice reminders that automatically call you at the right time -
        no apps to open, no notifications to miss.
      </Text>
    </div>
  )
}
