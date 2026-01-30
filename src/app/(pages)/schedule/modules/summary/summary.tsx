import { Container, Message, Stats } from "./ui"

export function Summary() {
  return <Container statsSlot={<Stats />} messageSlot={<Message />} />
}
