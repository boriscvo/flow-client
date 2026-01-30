type Props = {
  messageSlot: React.ReactNode
  statsSlot: React.ReactNode
}

export function Container({ messageSlot, statsSlot }: Props) {
  return (
    <div
      className={`flex max-md:flex-col md:mx-auto px-4 py-8 mb-6 md:px-5 gap-2 lg:px-8 md:py-7 w-full h-full sm:h-fit rounded-xl bg-surface border-2 border-divider`}
    >
      <div className="md:mt-1 md:w-3/5 md:pr-4 max-md:mb-2">{messageSlot}</div>
      <div className="md:w-2/5 md:pl-4">{statsSlot}</div>
    </div>
  )
}
