export function getBrowserTimezone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone
}
