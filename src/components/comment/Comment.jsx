
import CommentBody from "./CommentBody";
import CommentHeader from "./CommentHeader";
import CommentVotes from "./CommentVotes";
import { useContext } from "react";
import { Context } from "../../context/AppContext";
import AddReplyForm from "../forms/AddReplyForm";


const Comment = ({ comment }) => {

	const { replyState } = useContext(Context);

	return (
		<div
			className="flex flex-col gap-4 comment-and-form-wrapper"
		>
			<div
				className="bg-white p-5 rounded-xl flex gap-5 comment-wrapper"
			>
				<CommentVotes
					votes={comment.votes}
					isAuthorized={comment.author.authorized}
				/>
				<div
					className="flex flex-col gap-4 flex-1"
				>
					<CommentHeader
						name={comment.author.name}
						src={comment.author.photo}
						isAuthorized={comment.author.authorized}
						date={comment.date}
						id={comment.id}
					/>
					<CommentBody
						text={comment.text}
						id={comment.id}
					/>
				</div>
			</div>

			{replyState.id === comment.id && replyState.replyStatus && (
				<AddReplyForm />
			)}

		</div>

	)
};

export default Comment;