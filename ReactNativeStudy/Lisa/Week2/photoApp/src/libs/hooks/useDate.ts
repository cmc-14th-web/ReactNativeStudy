const padNumberToTwoDigits = (date: number) => {
  return date.toString().padStart(2, '0');
};

export const useDate = (dateString: string) => {
  const dateObject = new Date(parseInt(dateString));

  const formatDate = () => {
    const formattedDate = `${dateObject.getFullYear()}.${padNumberToTwoDigits(
      dateObject.getMonth() + 1,
    )}.${padNumberToTwoDigits(dateObject.getDate())} ${padNumberToTwoDigits(
      dateObject.getHours(),
    )}:${padNumberToTwoDigits(dateObject.getMinutes())}`;

    return formattedDate;
  };

  return {formatDate};
};
