import { PageContent } from "@/components/atoms"
import { Reminders, Summary, TopBar } from "./modules"

export default function Schedule() {
  return (
    <PageContent>
      <TopBar />
      <Summary />
      <Reminders />
    </PageContent>
  )
}
