import { useContext } from "react";
import TextMessage from "../common/TextMessage";
import { Context } from "../../context/AppContext";
import EditForm from "../forms/EditForm";

const CommentBody = ({ text, id }) => {

	const { edit } = useContext(Context);

	return (
		<>
			{edit.id === id && edit.editStatus ?
				(<EditForm text={text} />) :
				(<TextMessage text={text} />)
			}
		</>
	)
};

export default CommentBody;