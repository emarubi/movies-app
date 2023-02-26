export interface Movie {
	id: string
	title: string
	description?: string
	image?: string
	category: string
	likes: number
	dislikes: number
}

const movies: Movie[] = [
	{
		id: '1',
		title: 'Oceans 8',
		category: 'Comedy',
		likes: 4,
		description:
			'Debbie Ocean is released from jail after serving a prison sentence. She assembles a special crew of seven women to steal a diamond necklace, worth 150 million dollars, from the Met Gala.',
		image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9fxmD5um8kqj3lCV3TBVKJqRB4P.jpg",
		dislikes: 1,
	},
	{
		id: '2',
		title: 'Midnight Sun',
		category: 'Comedy',
		description:
			'Sheltered since childhood, 17-year-old Katie Price lives with a life-threatening sensitivity to sunlight. Her world opens up after dark when she ventures out to play her guitar for random travelers.',
		image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1TH4PwfcRPenIxce3BREDIV4mBd.jpg',
		likes: 2,
		dislikes: 0,
	},
	{
		id: '3',
		title: 'Les indestructibles 2',
		description:
			'Entrusted with a task to restore public faith in superheroes, Helen sets off on a mission to catch a supervillain, while Bob faces the challenges of stay-at-home parenting. Enjoy the family friendly blockbuster!',
		image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/Apish2YD3QIAepzxZ96VLkqEZo3.jpg',
		category: 'Animation',
		likes: 3,
		dislikes: 1,
	},
	{
		id: '4',
		title: 'Sans un bruit',
		category: 'Thriller',
		description:
			'A family struggles for survival in a world where most humans have been killed by blind but noise-sensitive creatures. They are forced to communicate in sign language to keep the creatures at bay.',
		image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xlJCSHnR7sbaibX3OY97vEmsjxt.jpg',
		likes: 6,
		dislikes: 6,
	},
	{
		id: '5',
		title: 'Creed II',
		category: 'Drame',
		description:
			"In 1985, Ivan Drago killed Apollo Creed in a tragic boxing match. Under the guidance of his trainer Rocky, Apollo's son Adonis confronts Drago's son in an ultimate showdown. A tale of vengeance awaits!",
		image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/84FrvyX2QiAy2QXYSanaCcnqgE1.jpg',
		likes: 16,
		dislikes: 2,
	},
	{
		id: '6',
		title: 'Pulp Fiction',
		category: 'Thriller',
		description:
			"In the realm of underworld, a series of incidents intertwines the lives of two Los Angeles mobsters, a gangster's wife, a boxer and two small-time criminals. One of the best movies of all time!",
		image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4TBdF7nFw2aKNM0gPOlDNq3v3se.jpg',
		likes: 11,
		dislikes: 3,
	},
	{
		id: '7',
		title: 'Pulp Fiction',
		category: 'Thriller',
		description:
			"In the realm of underworld, a series of incidents intertwines the lives of two Los Angeles mobsters, a gangster's wife, a boxer and two small-time criminals. One of the best movies of all time!",
		image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4TBdF7nFw2aKNM0gPOlDNq3v3se.jpg',
		likes: 12333,
		dislikes: 32,
	},
	{
		id: '8',
		title: 'Seven',
		category: 'Thriller',
		description:
			'A serial killer begins murdering people according to the seven deadly sins. Two detectives, one new to the city and the other about to retire, are tasked with apprehending the criminal. Will they succeed?',
		image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/moHx8JGzIdEAMLj1CqDzcLYhMRY.jpg',
		likes: 2,
		dislikes: 1,
	},
	{
		id: '9',
		title: 'Inception',
		category: 'Thriller',
		description:
			"Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son. A visually stunning movie!",
		image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aej3LRUga5rhgkmRP6XMFw3ejbl.jpg',
		likes: 2,
		dislikes: 1,
	},
	{
		id: '10',
		title: 'Gone Girl',
		category: 'Thriller',
		description:
			'Nick Dunne discovers that the entire media focus has shifted on him when his wife, Amy Dunne, mysteriously disappears on the day of their fifth wedding anniversary. A psychological thriller!',
		image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7xkJ1ACu40BjzLHVPRILWjFvW7.jpg',
		likes: 22,
		dislikes: 12,
	},
]

export const movies$ = new Promise<Movie[]>((resolve, reject) => setTimeout(resolve, 100, movies))
