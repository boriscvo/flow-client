import { ReminderStatus } from "@/types/common/reminder-status"

export type CommonBadgeProps = {
  label: string
}

export type CardStatusBadgeProps = CommonBadgeProps & {
  variant: "card-status"
  state: ReminderStatus
}

export type InfoBadgeProps = CommonBadgeProps & {
  variant: "info"
}

export type BadgeProps = CardStatusBadgeProps | InfoBadgeProps
