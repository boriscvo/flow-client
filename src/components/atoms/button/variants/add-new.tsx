import { Button as UIButton } from "@/components/_ui/button"
import { AddNewButtonProps } from "../types"
import { Plus } from "lucide-react"

export function AddNew({
  label,
  handleClick,
}: Omit<AddNewButtonProps, "variant">) {
  return (
    <UIButton
      onClick={handleClick}
      size="sm"
      className="px-0 items-center text-base font-medium border border-foreground hover:cursor-pointer"
    >
      <Plus strokeWidth={2.5} />
      {label}
    </UIButton>
  )
}
