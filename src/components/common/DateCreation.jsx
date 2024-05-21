import { formatTime, getTimeDifference } from "../../functions/timeFormating";

const DateCreation  = ({ date }) => {

	const timeDifference = getTimeDifference(date); // Визначаємо різницю в часі
  const timeString = formatTime(timeDifference); // Форматуємо рядок часу

	return (
		<div className="text-gray-500 text-base">
			{timeString} 
		</div>
	)
}

export default DateCreation;