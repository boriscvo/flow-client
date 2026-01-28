import { ReminderCard } from "@/components/blocks"
import { ErrorState } from "./error-state"
import { EmptyState } from "./empty-state"

type Props = {
  variant: "loading" | "error" | "empty"
}

export function TransitionState({ variant }: Props) {
  switch (variant) {
    case "loading":
      return (
        <>
          <ReminderCard variant="placeholder" />
          <ReminderCard variant="placeholder" />
          <ReminderCard variant="placeholder" />
        </>
      )
    case "error":
      return <ErrorState handleRetry={() => {}} />
    case "empty":
      return <EmptyState handleAddNew={() => {}} />
    default:
      return null
  }
}
