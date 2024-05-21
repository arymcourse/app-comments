import { useReducer, useState } from "react";
import { createContext } from "react";
import { reducer } from "../store/reducer";
import { initialState } from "../store/state";

export const Context = createContext(null);

const AppContext = ({ children }) => {

	const [state, dispatch] = useReducer(reducer, initialState);
	const [replyState, setReplyState] = useState({id: null, replyStatus: false});
	const [edit, setEdit] = useState({id: null, editStatus: false});

	return (
		<Context.Provider
			value={{
				state,
				dispatch,
				replyState,
				setReplyState,
				edit,
				setEdit,
			}}
		>
			{children}
		</Context.Provider>
	)

};

export default AppContext;