import { Formatted } from "@/components/atoms/badge/ui"

type Props = {
  scheduledAt: string
}

export function TimeIndicator({ scheduledAt }: Props) {
  return (
    <div className="">
      <Formatted variant="createdAt" label={scheduledAt} />
    </div>
  )
}
