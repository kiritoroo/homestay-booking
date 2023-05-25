export function formatDateSlice(date: Date): string {
  let day: number = date.getDate();
  let month: number = date.getMonth() + 1;
  let year: number = date.getFullYear();

  if (day < 10) {
    day = 0 + day;
  }
  if (month < 10) {
    month = 0 + month;
  }

  const formattedDate: string = `${day}/${month}/${year}`;
  return formattedDate;
}

export function formatDateStrike(date: Date): string {
  let day: number = date.getDate();
  let month: any = date.getMonth() + 1;
  let year: number = date.getFullYear();

  if (day < 10) {
    day = 0 + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  const formattedDate: string = `${year}-${month}-${day}`;
  return formattedDate;
}

export function formatDateString(date: Date): string {
  let day: number = date.getDate();
  let month: number = date.getMonth() + 1;
  let year: number = date.getFullYear();
  
  return day + " thg " + month + " " + year;
}

export function stringStrike2Day(date: string): Date {
  const [year, month, day] = date.split("-");
  return new Date(Number(year), Number(month) - 1, Number(day));
}

export function dayOfWeek(date: Date): string {
  const dayOfWeek = date.getDay()+1;
  let dayName;
  switch (dayOfWeek) {
    case 0:
      dayName = 'Chủ nhật';
      break;
    case 1:
      dayName = 'Thứ hai';
      break;
    case 2:
      dayName = 'Thứ ba';
      break;
    case 3:
      dayName = 'Thứ tư';
      break;
    case 4:
      dayName = 'Thứ năm';
      break;
    case 5:
      dayName = 'Thứ sáu';
      break;
    case 6:
      dayName = 'Thứ bảy';
      break;
    default:
      dayName = 'Không xác định';
  }
  return dayName;
}