import { DialogProps } from "./types"
import { Alert, Details, ReminderForm } from "./ui"

export function Dialog(props: DialogProps) {
  switch (props.variant) {
    case "details": {
      return <Details {...props} />
    }
    case "alert": {
      return <Alert {...props} />
    }
    case "reminder-form": {
      return <ReminderForm {...props} />
    }
    default:
      return null
  }
}
