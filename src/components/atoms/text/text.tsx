type Props = {
  variant:
    | "section-title"
    | "card-title"
    | "main-label"
    | "card-message"
    | "card-misc"
  children: React.ReactNode
  className?: string
}

export function Text({ variant, children, className }: Props) {
  switch (variant) {
    case "section-title":
      return (
        <h2 className={`text-2xl font-bold text-foreground ${className}`}>
          {children}
        </h2>
      )
    case "card-title":
      return (
        <h3 className={`text-xl font-semibold text-foreground ${className}`}>
          {children}
        </h3>
      )
    case "main-label":
      return (
        <span className={`text-lg font-semibold text-foreground ${className}`}>
          {children}
        </span>
      )
    case "card-message":
      return <p className={`text-foreground ${className}`}>{children}</p>
    case "card-misc":
      return (
        <p className={`text-sm font-semibold text-muted ${className}`}>
          {children}
        </p>
      )
  }
}
