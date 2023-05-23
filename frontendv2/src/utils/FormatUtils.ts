export function formatDate(date: Date): string {
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