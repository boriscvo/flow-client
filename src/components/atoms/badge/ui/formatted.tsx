import { Text } from "../../text/text"

type Props = {
  variant: "status" | "createdAt"
  label: string
}

export function Formatted({ variant, label }: Props) {
  switch (variant) {
    case "status":
      return label.toUpperCase()
    case "createdAt": {
      const formattedDate = new Date(label).toLocaleDateString("en-US", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
      })
      const formattedTime = new Date(label).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })
      return (
        <div className="flex flex-col space-y-0.5 items-center">
          <Text variant="main-label">{formattedTime}</Text>
          <Text variant="card-misc">On {formattedDate}</Text>
        </div>
      )
    }
  }
}
