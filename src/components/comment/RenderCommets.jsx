import Comment from "./Comment";

const RenderComments = ({ comments }) => {

	const renderComments = (comments) => {
		return comments.map((comment) => (
			<div key={comment.id} className="w-full flex flex-col gap-4">
				<Comment comment={comment} />
				{comment.replies && comment.replies.length > 0 && (
					<div className="w-11/12 self-end flex flex-col gap-4 pl-5 border-l border-gray-300">
						{renderComments(comment.replies)}
					</div>
				)}
			</div>
		));
	};

	return renderComments(comments);
};

export default RenderComments;
