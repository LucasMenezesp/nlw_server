export default function convertHourToMinutes(time: string) {
  const [hour = 0, minutes = 0]  =  time.split(':').map(Number);
  const timeInMinutes = (hour * 60) + minutes;

  return timeInMinutes;
}