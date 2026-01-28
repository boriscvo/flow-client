import { Button, Text } from "@/components/atoms"
import { SearchAlert } from "lucide-react"

type Props = {
  handleRetry: () => void
}

export function ErrorState({ handleRetry }: Props) {
  return (
    <div className="flex flex-col gap-3 items-center justify-center p-10 border-2 border-divider rounded-xl">
      <SearchAlert className="text-destructive/70" size={40} />
      <div className="gap-1 mb-1 flex flex-col items-center text-center">
        <Text variant="section-title">Oops something went wrong</Text>
        <Text variant="main-message">
          We were unable to load your reminders
        </Text>
      </div>
      <Button
        variant="destructive"
        handleClick={handleRetry}
        label="Try Again"
      />
    </div>
  )
}
