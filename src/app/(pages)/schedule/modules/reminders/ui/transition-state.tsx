import { ReminderCard } from "@/components/blocks"
import { ErrorState } from "./error-state"
import { EmptyState } from "./empty-state"
import { ReminderTransitionStateProps } from "../types"

export function TransitionState(props: ReminderTransitionStateProps) {
  switch (props.variant) {
    case "loading":
      return (
        <>
          <ReminderCard variant="placeholder" />
          <ReminderCard variant="placeholder" />
        </>
      )
    case "error":
      return <ErrorState handleRetry={props.handleRetry} />
    case "empty":
      return <EmptyState handleAddNew={props.handleAddNew} />
    default:
      return null
  }
}
