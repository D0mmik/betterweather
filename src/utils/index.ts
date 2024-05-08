"use server"
export async function ConvertTime(dt : number, timezone : string) {
  const date = new Date(dt * 1000);
  const options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', hour12: false, timeZone : timezone };
  return date.toLocaleString("cs-cz" , options)
}

export async function GetDayName(dt : number) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(dt * 1000);
  const dayIndex = date.getDay();
  return days[dayIndex];
}

export async function GetDate(dt : number) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const date = new Date(dt * 1000);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const month = months[monthIndex];
  return `${day} ${month}`;
}

export const getColor = async (date : string)  => {
  const time = new Date(date).getHours();
  let bgColor, textColor;

  switch (true) {
    case time >= 4 && time < 12:
      bgColor = "bg-morning";
      textColor = "text-black";
      break;
    case time >= 12 && time < 18:
      bgColor = "bg-midday";
      textColor = "text-blue";
      break;
    case time >= 18 && time < 22:
      bgColor = "bg-afternoon";
      textColor = "text-white";
      break;
    default:
      bgColor = "bg-evening";
      textColor = "text-white";
      break;
  }

  return { bgColor, textColor };
};
