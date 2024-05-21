export const initialState = [
	{
		id: Date.now(),
		date: new Date('10/10/2023'),
		votes: 5,
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		author:
		{
			name: 'firstUser',
			photo: 'https://picsum.photos/id/40/200/300',
			authorized: false,
		},
		replies: [
			{
				id: Date.now() +2,
				date: new Date('12/12/2023'),
				votes: 3,
				text: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
				author:
				{
					name: 'thirdUser',
					photo: 'https://picsum.photos/id/42/200/300',
					authorized: false,
				},
				replies: [
					{
						id: Date.now() +3,
						date: new Date('02/02/2024'),
						votes: 12,
						text: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
						author:
						{
							name: 'fourthUser',
							photo: 'https://picsum.photos/id/43/200/300',
							authorized: false,
						},
						replies: [],
					}
				],
			}
		],
	},
	{
		id: Date.now() + 1,
		date: new Date('12/11/2023'),
		votes: 10,
		text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
		author:
		{
			name: 'secondUser',
			photo: 'https://picsum.photos/id/48/200/300',
			authorized: false,
		},
		replies: [],
	},
]