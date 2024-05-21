const AuthorPic = ({ name, src }) => {
	return (
		<img src={src} alt={name} className="w-10 h-10 object-cover object-center rounded-[50%] mr-2"/>
	)
};

export default AuthorPic;