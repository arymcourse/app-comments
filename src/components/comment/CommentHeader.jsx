import CommentControllers from "./CommentControllers";
import CommentInfo from "./CommentInfo";


const CommentHeader = ({ name, src, isAuthorized, date, id }) => {
	return (
		<div
			className="flex items-center justify-between"
		>
			<CommentInfo 
				name={name}
				src={src}
				isAuthorized={isAuthorized}
				date={date}
			/>
			<CommentControllers 
				isAuthorized={isAuthorized}
				id={id}
			/>
		</div>
	)
};

export default CommentHeader;