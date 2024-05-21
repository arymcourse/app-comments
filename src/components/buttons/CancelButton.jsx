const CancelButton = ( {cancelClickHandler} ) => {

	return (
		<button
			onClick={cancelClickHandler}
			type="button"
			className='inline-flex w-fit uppercase font-semibold rounded-md bg-indigo-800 text-white leading-none py-2 px-3'
		>
			<span>Cancel</span>
		</button>
	)

};

export default CancelButton;