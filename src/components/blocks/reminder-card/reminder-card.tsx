import { Badge, Button, Text } from "@/components/atoms"
import { ReminderCardProps } from "./types"
import {
  Container,
  Description,
  Info,
  Main,
  BadgeLine,
  LoadingState,
  Footer,
  DialogLinkContainer,
  TimeIndicator,
} from "./ui"
import { BellDot, Pencil, ReceiptText, Trash } from "lucide-react"

export function ReminderCard(props: ReminderCardProps) {
  if (props.variant === "placeholder") {
    return <LoadingState />
  }

  const {
    reminder,
    handleOpenDelete,
    handleOpenDetails,
    handleOpenEdit,
    handleOpenSnooze,
  } = props

  const { id, title, message, scheduledAt, timezone, phoneNumber, status } =
    reminder

  return (
    <Container>
      <Info>
        <Main>
          <TimeIndicator scheduledAt={scheduledAt} />
          <Description>
            <Text variant="card-title">{title}</Text>
            <Text
              variant="card-message"
              className="md:truncate max-md:line-clamp-2"
            >
              {message}
            </Text>
          </Description>
        </Main>
        <Text variant="card-misc">Phone: {phoneNumber}</Text>
        <BadgeLine>
          <Badge variant="card-status" state={status} label={status} />
          <Badge variant="info" label={timezone} />
        </BadgeLine>
      </Info>
      <Footer>
        <DialogLinkContainer>
          <Button
            variant="inline-card"
            label="View More"
            state="default"
            iconSlot={
              <ReceiptText strokeWidth={2.5} className="text-foreground" />
            }
            handleClick={() => handleOpenDetails(id)}
          />
          <Button
            variant="inline-card"
            label="Edit"
            state="default"
            iconSlot={<Pencil strokeWidth={2.5} className="text-foreground" />}
            handleClick={() => handleOpenEdit(id)}
          />
          <Button
            variant="inline-card"
            label="Delete"
            state="default"
            iconSlot={
              <Trash
                strokeWidth={2.5}
                className="hover:text-card-error-text/80"
              />
            }
            handleClick={() => handleOpenDelete(id)}
            isDestructive
          />
        </DialogLinkContainer>
        <Button
          variant="inline-card"
          label="Snooze"
          state="default"
          iconSlot={
            <BellDot size={20} strokeWidth={2.5} className="text-foreground" />
          }
          handleClick={() => handleOpenSnooze(id)}
        />
      </Footer>
    </Container>
  )
}
