import { addNewReplyReducer, deleteCommentReducer, editCommentReducer } from "../functions/reducerFunctions";

export const reducer = (state, action) => {

	switch (action.type) {

		case 'CREATE_COMMENT':
			return [
				...state,
				{
					id: Date.now(),
					date: new Date(),
					votes: 0,
					text: action.text,
					author: {
						name: 'John Doe',
						photo: 'https://picsum.photos/id/338/200/300',
						authorized: true
					},
					replies: []
				}
			];

		case 'DELETE_COMMENT':
			return deleteCommentReducer(state, action.id);
			
		case 'EDIT_COMMENT':
			return editCommentReducer(state, action.id, action.text);

		case 'CREATE_REPLY':
			return addNewReplyReducer(state, action.id, action.text);

		default:
			return state;

	}

};