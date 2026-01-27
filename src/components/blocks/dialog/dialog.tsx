import { DialogProps } from "./types"
import { Alert, Details } from "./ui"

export function Dialog(props: DialogProps) {
  switch (props.variant) {
    case "details": {
      return <Details {...props} />
    }
    case "alert": {
      return <Alert {...props} />
    }
    default:
      return null
  }
}
