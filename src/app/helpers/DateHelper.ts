export const getCurrentDay = () => {
  const date = new Date();
  const currentDate =
    date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  const currentDay = date.toLocaleString('en-GB', { weekday: 'long' });
  return `${currentDay} (${currentDate})`;
};

export const getCurrentTime = () => {
  const now = new Date();
  const currentHours = now.getHours();
  let currentMinutes = now.getMinutes();

  return `${currentHours}:${
    currentMinutes < 10 ? '0' + currentMinutes : currentMinutes
  }`;
};
