"use client"
import { SwitchProps } from "./types"
import { Theme } from "./variants"

export function Switch(props: SwitchProps) {
  switch (props.variant) {
    case "theme":
      return <Theme />
  }
}
