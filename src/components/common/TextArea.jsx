const TextArea = ({ text, placeholder, handleChange, handleKeyDown }) => {
	return (
		<textarea
			className="flex-1 w-full h-auto min-h-28 p-2 flex outline-none resize-none scroll-smooth text-base leading-6 break-words placeholder-gray-600 border border-gray-200 rounded-sm"
			value={text}
			placeholder={placeholder}
			onChange={handleChange}
			onKeyDown={handleKeyDown}
		/>
	)
};

export default TextArea;