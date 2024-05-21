export const addNewReplyReducer = (initialState, parentId, text) => {
	return initialState.map(comment => {

		if (comment.id === parentId) {

			return {

				...comment,

				replies: [

					...comment.replies,

					{
						id: Date.now() +1,
						date: new Date(),
						votes: 0,
						text: text,
						author: {
							name: 'John Doe',
							photo: 'https://picsum.photos/id/338/200/300',
							authorized: true
						},
						replies: [],
					},
					
				],

			};

		} else {

			return {
				...comment,
				replies: addNewReplyReducer(comment.replies, parentId, text)
			};

		}

	});
};

export const editCommentReducer = (initialState, parentId, text) => {
	return initialState.map((comment) => {

		if(comment.id === parentId) {

			return {
				...comment,
				text: text
			};

		} else if (comment.replies && comment.replies.length > 0) {

			const editedReplies = editCommentReducer(comment.replies, parentId, text);

			if (editedReplies !== comment.replies) {
				return {
					...comment,
					replies: editedReplies
				}
			}

		}

		return comment;

	});
};

export const deleteCommentReducer = (comments, parentId) => {

	return comments.map(comment => {

			if (comment.id === parentId) {
					return null;
			}

			if (comment.replies && comment.replies.length > 0) {
					comment.replies = deleteCommentReducer(comment.replies, parentId);
			}
			return comment;
	}).filter(Boolean);
};