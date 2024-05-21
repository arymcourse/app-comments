import { differenceInDays, differenceInWeeks, differenceInMonths, differenceInYears } from "date-fns";

export const getTimeDifference = (date) => {
  const currentDate = Date.now();
  const differenceDays = differenceInDays(currentDate, date);
  const differenceWeeks = differenceInWeeks(currentDate, date);
  const differenceMonths = differenceInMonths(currentDate, date);
  const differenceYears = differenceInYears(currentDate, date);

  return { differenceDays, differenceWeeks, differenceMonths, differenceYears };
};

export const formatTime = ({ differenceDays, differenceWeeks, differenceMonths, differenceYears }) => {
  if (differenceDays === 0) {
    return "today";
  } else if (differenceDays === 1) {
    return "1 day ago";
  } else if (differenceDays < 7) {
    return `${differenceDays} days ago`;
  } else if (differenceWeeks === 1) {
    return "1 week ago";
  } else if (differenceWeeks < 4) {
    return `${differenceWeeks} weeks ago`;
  } else if (differenceMonths === 1) {
    return "1 month ago";
  } else if (differenceMonths < 12) {
    return `${differenceMonths} months ago`;
  } else if (differenceYears === 1) {
    return "1 year ago";
  } else {
    return `${differenceYears} years ago`;
  }
};