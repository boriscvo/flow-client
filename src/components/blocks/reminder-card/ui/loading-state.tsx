import { LoadingSkeleton } from "@/components/atoms"
import { Container } from "./container"
import { Info } from "./info"
import { Main } from "./main"
import { BadgeLine } from "./badge-line"
import { DialogLinkContainer } from "./dialog-link-container"
import { Footer } from "./footer"
import { Description } from "./description"

export function LoadingState() {
  return (
    <Container>
      <Info>
        <Main>
          <LoadingSkeleton className="mt-1 max-sm:mb-6 w-32 h-5" />
          <Description>
            <LoadingSkeleton className="mt-1 w-20 h-5" />
            <LoadingSkeleton className="mt-1.5 w-50 h-5" />
          </Description>
        </Main>
        <LoadingSkeleton className="mt-1 w-46 h-4" />
        <BadgeLine>
          <LoadingSkeleton className="mt-1 w-22 h-4 rounded-full" />
          <LoadingSkeleton className="mt-1 w-22 h-4 rounded-full mb-1 max-sm:mb-2" />
        </BadgeLine>
      </Info>
      <Footer>
        <DialogLinkContainer>
          <LoadingSkeleton className="mt-2.5 mb-2 w-24 h-4" />
          <LoadingSkeleton className="mt-2.5 mb-2 w-20 h-4" />
          <LoadingSkeleton className="mt-2.5 mb-2 w-20 h-4" />
        </DialogLinkContainer>
        <LoadingSkeleton className="mt-2.5 mb-2 w-20 h-4" />
      </Footer>
    </Container>
  )
}
