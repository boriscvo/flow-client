import { PageContentProps } from "./types"

export function PageContent({
  variant = "standard",
  children,
}: PageContentProps) {
  switch (variant) {
    case "standard":
    default:
      return (
        <div className="flex flex-col mx-auto px-4 py-8 md:px-5 lg:px-8 md:py-7 w-full md:max-w-250 h-full min-h-screen ">
          {children}
        </div>
      )
  }
}
