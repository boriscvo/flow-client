import { PageContentProps } from "./types"

export function PageContent({
  variant = "standard",
  children,
}: PageContentProps) {
  switch (variant) {
    case "standard":
    default:
      return (
        <div className="flex flex-col mx-auto px-4 pb-7 sm:px-5 w-full sm:max-w-250 h-full min-h-screen ">
          {children}
        </div>
      )
  }
}
