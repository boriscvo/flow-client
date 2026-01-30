import { Switch } from "@/components/atoms"
import { Container, Timezone } from "./ui"

export function TopBar() {
  return (
    <Container>
      <Timezone /> |
      <Switch variant="theme" />
    </Container>
  )
}
