import { useContext, useState } from "react";
import { handleFomInputChange, handleFormKeyDown, submitButtonAccess } from "../../functions/formHandlers";
import SubmitButton from "../buttons/SubmitButton";
import TextArea from "../common/TextArea";
import { Context } from "../../context/AppContext";
import { editComment } from "../../store/actions";

const EditForm = ({ text }) => {

	const [inputValue, setInputValue] = useState(text);
	const [error, setError] = useState('');
	const [charCount, setCharCount] = useState(0)

	const { dispatch, edit, setEdit } = useContext(Context);

	const submitHandler = (e) => {
		e.preventDefault();
		editComment(dispatch, edit.id, inputValue);
		setEdit({ id: null, editStatus: false });
	}

	const changeHandler = (e) => {
		handleFomInputChange(e, setInputValue, setCharCount, setError)
	};

	const keyDownHandler = (e) => {
		handleFormKeyDown(e, submitHandler)
	}

	return (

			<form
				onSubmit={submitHandler}
				className="flex flex-col gap-y-4 bg-white rounded-lg"
			>

				<TextArea
					text={inputValue}
					placeholder={'Add a comment...'}
					handleChange={(e) => changeHandler(e)}
					handleKeyDown={(e) => keyDownHandler(e)}
				/>

				<div
					className={`flex ${error ? 'justify-between' : 'self-end'}`}
				>

					{error &&
						<div className="flex items-center justify-between gap-1 p-2">
							<span className="text-gray-500 text-xs">{error}</span>
							<span className="text-xs text-gray-400">{charCount}/320</span>
						</div>
					}

					<div className="">
						<SubmitButton
							name={'Update'}
							isButtonDisabled={submitButtonAccess(inputValue)}
						/>
					</div>

				</div>

			</form>

	)

};

export default EditForm;