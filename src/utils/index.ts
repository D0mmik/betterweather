
export function ConvertTime(dt : number) {
  const date = new Date(dt * 1000);
  const options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', hour12: false };
  return date.toLocaleString("cs-cz", options)
}