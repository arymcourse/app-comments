import { useContext } from "react";
import { Context } from "../../context/AppContext";
import RenderComments from "./RenderCommets";

const Comments = () => {

	const { state } = useContext(Context);

	return (

		<div
			className="flex flex-col items-center gap-5 w-full">
			<RenderComments comments={state} />
		</div>

	)

};

export default Comments;