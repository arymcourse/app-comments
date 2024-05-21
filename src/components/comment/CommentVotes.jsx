import { useState } from "react";

const CommentVotes = ({ votes, isAuthorized }) => {

	const [voteState, setVoteState] = useState(votes);

	const handleUpVote = () => {
		setVoteState(prev => prev < votes + 1 ? prev + 1 : prev);
	};

	const handleDownVote = () => {
		setVoteState(prev => prev > votes - 1 ? prev - 1 : prev);
	};

	return (
		<div
			className="flex flex-col text-center items-center justify-center font-semibold text-gray-500 w-9 h-20 bg-indigo-100 rounded-md"
		>
			<button type="button" onClick={handleUpVote} disabled={isAuthorized} className={`px-4 ${isAuthorized ? 'cursor-not-allowed' : ''}`} >+</button>
			<span className="text-indigo-600">{voteState}</span>
			<button type="button" onClick={handleDownVote} disabled={isAuthorized} className={`px-4 ${isAuthorized ? 'cursor-not-allowed' : ''}`} >-</button>
		</div>
	)
};

export default CommentVotes;