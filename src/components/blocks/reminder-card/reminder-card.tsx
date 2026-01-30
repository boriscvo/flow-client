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
    isSnoozeLoading = false,
    isPast = false,
    handleOpenDelete,
    handleOpenDetails,
    handleOpenEdit,
    handleSnooze,
  } = props

  const {
    id,
    title,
    message,
    scheduledAt,
    timezone,
    phoneNumber,
    status,
    snoozeCount,
  } = reminder

  return (
    <Container>
      <Info>
        <Main>
          <TimeIndicator scheduledAt={scheduledAt} timezone={timezone} />
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
          {isPast && <Badge variant="past" />}
          {snoozeCount ? (
            <Badge variant="delayed" label={`Snoozed x ${snoozeCount}`} />
          ) : null}
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
            isDisabled={isPast}
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
            <BellDot
              size={20}
              strokeWidth={2.5}
              className={`text-foreground ${isSnoozeLoading ? "pointer-events-none opacity-60" : ""}`}
            />
          }
          isDisabled={isPast}
          handleClick={() => handleSnooze(id)}
        />
      </Footer>
    </Container>
  )
}
