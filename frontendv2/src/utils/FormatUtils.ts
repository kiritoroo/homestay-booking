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
  let month: number = date.getMonth() + 1;
  let year: number = date.getFullYear();

  if (day < 10) {
    day = 0 + day;
  }
  if (month < 10) {
    month = 0 + month;
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