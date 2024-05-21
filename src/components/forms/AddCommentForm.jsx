import { useContext, useState } from "react";
import { Context } from "../../context/AppContext";
import SubmitButton from "../buttons/SubmitButton";
import TextArea from "../common/TextArea";
import { handleFomInputChange, handleFormKeyDown, submitButtonAccess } from "../../functions/formHandlers";
import { createComment } from "../../store/actions";
import AuthorPic from "../author/AuthorPic";

const AddCommentForm = () => {
	const [inputValue, setInputValue] = useState('');
	const [error, setError] = useState('');
	const [charCount, setCharCount] = useState(0)

	const { dispatch } = useContext(Context);

	const submitHandler = (e) => {
		e.preventDefault();
		createComment(dispatch, inputValue);
		setInputValue('');
	}

	const changeHandler = (e) => {
		handleFomInputChange(e, setInputValue, setCharCount, setError)
	};

	const keyDownHandler = (e) => {
		handleFormKeyDown(e, submitHandler)
	}

	return (
		<div className="flex flex-col gap-4">
			<form
				onSubmit={submitHandler}
				className="flex items-start gap-4 p-5 bg-white rounded-lg"
			>
				<div className="mt-2">
					<AuthorPic src={'https://picsum.photos/id/338/200/300'} name={'John Doe'} />
				</div>
				<TextArea
					text={inputValue}
					placeholder={'Add a comment...'}
					handleChange={(e) => changeHandler(e)}
					handleKeyDown={(e) => keyDownHandler(e)}
				/>
				<SubmitButton
					name={'Send'}
					isButtonDisabled={submitButtonAccess(inputValue)}
				/>
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

export default AddCommentForm;