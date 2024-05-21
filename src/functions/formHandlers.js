export const handleAddReplyToCommentFormSubmit = (e, id, inputValue, dispatch, action) => {
	e.preventDefault();
	action(dispatch, id, inputValue);
};

export const handleFomInputChange = (e, setInputValue, setCharCount, setError) => {
	setInputValue(e.target.value);
	setCharCount(e.target.value.length);
	if (e.target.value.length >= 320) {
		setError(e.target.value.length > 320 ? 'Comment cannot exceed 320 characters' : '');
		return;
	}
	setError('');
};

export const handleFormKeyDown = (e, handleSubmit) => {
	if (e.key === 'Enter' && !e.shiftKey && !e.ctrlKey) {
		handleSubmit(e);
	} else if (e.key === 'Enter' && e.ctrlKey) {
		e.preventDefault();
		const textArea = e.target;
		const start = textArea.selectionStart;
		const end = textArea.selectionEnd;
		const value = textArea.value;
		const newValue = value.substring(0, start) + '\n' + value.substring(end);
		textArea.value = newValue;
		textArea.setSelectionRange(start + 1, start + 1);
	}
};

export const submitButtonAccess = (inputValue) => {
	return !inputValue.trim() || inputValue.length > 320;
};