import { useContext, useState } from "react";
import { handleAddReplyToCommentFormSubmit, handleFomInputChange, handleFormKeyDown, submitButtonAccess } from "../../functions/formHandlers";
import AuthorPic from "../author/AuthorPic";
import SubmitButton from "../buttons/SubmitButton";
import TextArea from "../common/TextArea";
import { Context } from "../../context/AppContext";
import CancelButton from "../buttons/CancelButton";
import { createReply } from "../../store/actions";

const AddReplyForm = () => {

	const { replyState, setReplyState } = useContext(Context);

	const { dispatch } = useContext(Context);

	const [inputValue, setInputValue] = useState('');
	const [error, setError] = useState('');
	const [charCount, setCharCount] = useState(0);

	const handleSubmit = (e) => {
		const { id } = replyState;
		handleAddReplyToCommentFormSubmit(e, id, inputValue, dispatch, createReply);
		setReplyState({id: null, replyStatus: false});
		setInputValue('');
	};

	const handleCancel = () => {
		setReplyState({ id: null, replyStatus: false });
	};
	
	return (
		<div
			className="flex flex-col gap-1 reply-form wrapper"
		>
			<form
				onSubmit={handleSubmit}
				className="flex items-start gap-4 p-5 rounded-xl bg-white"
			>
				<div
					className="mt-2"
				>
					<AuthorPic src={'https://picsum.photos/id/338/200/300'} name={'John Doe'} />
				</div>
				<TextArea
					placeholder={''}
					value={inputValue}
					handleChange={(e) => handleFomInputChange(e, setInputValue, setCharCount, setError)}
					handleKeyDown={(e) => handleFormKeyDown(e, handleSubmit)}
				/>
				{submitButtonAccess(inputValue) ?
				(<CancelButton cancelClickHandler={handleCancel} />) :
				(<SubmitButton name={'Reply'} isButtonDisabled={false} />)
				}
			</form>
			{error &&
				<div className="flex items-center justify-between gap-1 p-2">
					<p className="text-gray-500 text-xs">{error}</p>
					<p className="text-xs text-gray-400">{charCount}/320</p>
				</div>
			}
		</div>
	)

};

export default AddReplyForm;