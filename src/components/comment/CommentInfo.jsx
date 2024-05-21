import Author from "../author/Author";
import DateCreation from "../common/DateCreation";

const CommentInfo = ({ name, src, isAuthorized, date }) => {
	return (
		<div
			className="flex items-center gap-8"
		>
			<Author
				name={name}
				src={src}
				isAuthorized={isAuthorized}
			/>
			<DateCreation date={date} />
		</div>
	)
};

export default CommentInfo;