import { PencilIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { Context } from "../../context/AppContext";
const EditButton = ({ id }) => {

	const { edit, setEdit } = useContext(Context);

	const clickHandler = () => {
		setEdit({id: id, editStatus: true});
	};

	const isDisabled = edit.id === id;
	
	return(
		<button
			type="button"
			onClick={clickHandler}
			disabled={edit.id === id && false}
      className={`flex gap-2 items-center text-indigo-600 font-bold text-sm ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
			>
			<PencilIcon className="w-3.5 h-3.5" />
			<span>Edit</span>
		</button>
	)

};

export default EditButton;