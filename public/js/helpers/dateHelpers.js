function adjustTime(dateUTCMilliseconds) {
  const date = new Date(dateUTCMilliseconds);
  let timeSuffix = '';
  let currentString = '';

  // Convert 24 cycle to AM/PM cycle
  if (date.getHours() > 12) {
    currentString += (date.getHours() - 12).toString();
    timeSuffix = 'PM';
  } else {
    currentString += date.getHours().toString();
    timeSuffix = 'AM';
  }

  currentString += `:${date.getMinutes()}${timeSuffix}`;
  return currentString;
}

export { adjustTime };

