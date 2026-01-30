type Props = {
  variant:
    | "section-title"
    | "card-title"
    | "main-label"
    | "main-message"
    | "card-message"
    | "card-misc"
    | "key-label"
    | "key-value"
    | "icon-label"
  children: React.ReactNode
  className?: string
}

export function Text({ variant, children, className }: Props) {
  switch (variant) {
    case "section-title":
      return (
        <h2 className={`text-xl sm:text-2xl font-bold text-foreground`}>
          {children}
        </h2>
      )
    case "card-title":
      return (
        <h3 className={`text-xl font-semibold text-foreground`}>{children}</h3>
      )
    case "main-label":
      return (
        <span
          className={`text-lg font-semibold text-foreground ${className || ""}`}
        >
          {children}
        </span>
      )
    case "card-message":
      return <p className={`text-foreground ${className || ""}`}>{children}</p>
    case "main-message":
      return (
        <p className={`text-muted font-medium ${className || ""}`}>
          {children}
        </p>
      )
    case "card-misc":
      return <p className={`text-sm font-semibold text-muted`}>{children}</p>
    case "key-label":
      return (
        <span className={` text-sm text-muted font-semibold`}>{children}</span>
      )
    case "key-value":
      return (
        <span className={`text-foreground ${className || ""}`}>{children}</span>
      )
    case "icon-label":
      return (
        <span
          className={`text-sm text-foreground font-medium ${className || ""}`}
        >
          {children}
        </span>
      )
  }
}
