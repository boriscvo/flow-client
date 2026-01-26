import { Badge, Text } from "@/components/atoms"
import { ReminderCardProps } from "./types"
import {
  Container,
  Description,
  Actions,
  Info,
  Main,
  BadgeLine,
  TimeIndicator,
} from "./ui"

export function ReminderCard({
  reminder,
  handleOpenDelete,
  handleOpenSnooze,
  handleOpenEdit,
}: ReminderCardProps) {
  const { id, title, message, scheduledAt, timezone, phoneNumber, status } =
    reminder
  return (
    <Container>
      <Info>
        <Main>
          <Description titleSlot={title} messageSlot={message} />
          <TimeIndicator scheduledAt={scheduledAt} />
        </Main>
        <Text variant="card-misc" className="mt-6">
          Phone: {phoneNumber}
        </Text>
        <BadgeLine>
          <Badge variant="card-status" state={status} label={status} />
          <Badge variant="info" label={timezone} />
        </BadgeLine>
      </Info>
      <Actions
        id={id}
        handleOpenDelete={handleOpenDelete}
        handleOpenSnooze={handleOpenSnooze}
        handleOpenEdit={handleOpenEdit}
      />
    </Container>
  )
}
