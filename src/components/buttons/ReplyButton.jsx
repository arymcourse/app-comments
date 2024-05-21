import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { Context } from "../../context/AppContext";
const ReplyButton = ( {id} ) => {

	const { setReplyState } = useContext(Context);

	const clickHandler = () => {
		setReplyState({id: id, replyStatus:true });
	};

	const isDisabled = null;
	
	return(
		<button
			type="button"
			onClick={clickHandler}
			// disabled={isDisabled}
      className={`flex gap-2 items-center text-indigo-600 font-bold text-sm ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
			>
			<ArrowUturnLeftIcon className="w-3.5 h-3.5" />
			<span>Reply</span>
		</button>
	)

};

export default ReplyButton;