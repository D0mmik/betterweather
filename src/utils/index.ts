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

export async function ConvertUTCtoLocalWithShift(dt : number , shiftFromUTCInSeconds : number) {
  const currentUTCTime = new Date(dt * 1000);
  const localTimeInCity = new Date(currentUTCTime.getTime() + (shiftFromUTCInSeconds * 1000));
  return localTimeInCity.toLocaleString();
}

export const getColor = async (date : string)  => {
  const time = new Date(date).getHours();
  let bgColor, textColor;

  switch (true) {
    case time >= 4 && time < 12:
      bgColor = "#FFC085";
      textColor = "#000000";
      break;
    case time >= 12 && time < 18:
      bgColor = "#BADCFF";
      textColor = "#24609B";
      break;
    case time >= 18 && time < 22:
      bgColor = "#627685";
      textColor = "#FFFFFF";
      break;
    default:
      bgColor = "#233B52";
      textColor = "#FFFFFF";
      break;
  }

  return { bgColor, textColor };
};
