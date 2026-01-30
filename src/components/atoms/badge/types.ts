import { ReminderStatus } from "@/types/api/reminder"

export type CommonBadgeProps = {
  label: string
}

export type CardStatusBadgeProps = CommonBadgeProps & {
  variant: "card-status"
  state: ReminderStatus
}

export type InfoBadgeProps = CommonBadgeProps & {
  variant: "info" | "delayed"
}

export type PastBadgeProps = {
  variant: "past"
}

export type BadgeProps = CardStatusBadgeProps | InfoBadgeProps | PastBadgeProps
