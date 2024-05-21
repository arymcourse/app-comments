import ReplyButton from "../buttons/ReplyButton";
import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";

const CommentControllers = ({ isAuthorized, id }) => {
	return (
		<div
			className="flex items-center"
		>
			{isAuthorized ? (
				<div
					className="flex items-center gap-4"
				>
					<DeleteButton id={id}/>
					<EditButton id={id}/>
				</div>
			) : (
				<ReplyButton 
					id={id}
				/>
			)}
		</div>
	)
};

export default CommentControllers;