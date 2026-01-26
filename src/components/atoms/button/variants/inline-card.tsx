import { Button as UIButton } from "@/components/_ui/button"
import { InlineCardButtonProps } from "../types"
import { Loader2 } from "lucide-react"

export function InlineCard({
  state,
  label,
  iconSlot,
  handleClick,
}: Omit<InlineCardButtonProps, "variant">) {
  return (
    <UIButton
      variant="link"
      onClick={handleClick}
      className="px-0 items-center text-base text-foreground hover:cursor-pointer"
    >
      {state === "loading" ? (
        <Loader2 size="24" className="animate-spin" />
      ) : (
        iconSlot
      )}
      {label}
    </UIButton>
  )
}
