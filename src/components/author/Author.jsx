import AuthorLabel from "./AuthorLabel";
import AuthorName from "./AuthorName";
import AuthorPic from "./AuthorPic";

const Author = ({ name, src, isAuthorized }) => {
	return (
		<figure
			className="flex items-center gap-2"
		>
			<AuthorPic src={src} />
			<figcaption
				className="flex items-center gap-2"
			>
				<AuthorName name={name}/>
				{isAuthorized && (
					<AuthorLabel />
				)}
			</figcaption>
		</figure>
	)
};

export default Author;