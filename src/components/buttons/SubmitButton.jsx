const SubmitButton = ({ name, isButtonDisabled }) => {

	return (
		<button
			type="submit"
			disabled={isButtonDisabled}
			className={`w-20 h-9 py-2 px-3 text-center uppercase font-semibold rounded-md bg-indigo-800 text-white leading-none ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
		>
			<span>{name}</span>
		</button>
	)
};

export default SubmitButton;