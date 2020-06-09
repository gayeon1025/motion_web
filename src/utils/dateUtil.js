export function convertToTZDate(dateArray) {
  return (
    dateArray[0] +
    '-' +
    dateArray[1] +
    '-' +
    dateArray[2] +
    'T' +
    dateArray[3] +
    ':' +
    dateArray[4] +
    ':00+09:00'
  );
}
