import { Checkbox as UICheckbox } from "@/components/_ui/checkbox"
import { Field } from "@/components/_ui/field"
import { Label } from "@/components/_ui/label"
import { CheckboxProps } from "./types"

export function Checkbox({ label, isChecked, handleClick }: CheckboxProps) {
  const id = "checkbox-" + label

  return (
    <Field orientation="horizontal">
      <Label
        htmlFor={id}
        className="flex items-center gap-2 cursor-pointer select-none"
      >
        <UICheckbox
          id={id}
          name="checkbox"
          checked={isChecked}
          className="cursor-pointer select-none"
          onCheckedChange={() => handleClick()}
        />
        <span className="text-base leading-2">{label}</span>
      </Label>
    </Field>
  )
}
