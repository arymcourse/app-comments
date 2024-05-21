export const createComment = (dispatch, text) => {
	dispatch({ type:"CREATE_COMMENT", text });
};

export const voteComment = (dispatch, id) => {
	dispatch({ type:"VOTE_COMMENT", id });
};

export const deleteComment = (dispatch, id) => {
	dispatch({ type:"DELETE_COMMENT", id });
};

export const editComment = (dispatch, id, text) => {
	dispatch({ type:"EDIT_COMMENT", id, text });
};

export const createReply = (dispatch, id, text) => {
	dispatch({ type:"CREATE_REPLY", id, text })
};