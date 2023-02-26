import { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies, selectMovies } from '../store/slices/movieSlice'
import { AppDispatch } from '../store/store'
import Card from './Card'

// interface Props {
// 	data: Movie[]
// }

const List:React.FC = () => {
  const { movies, loading, filter } = useSelector(selectMovies)
	const dispatch = useDispatch<AppDispatch>()

	const [movieOffset, setmovieOffset] = useState(0)
	const [moviesPerPage, setmoviesPerPage] = useState(movies.length || 10)

	const endOffset = movieOffset + moviesPerPage
	const currentmovies = movies.slice(movieOffset, endOffset)
	const pageCount = Math.ceil(movies.length / moviesPerPage)

	const handlePageClick = (event: any) => {
		const newOffset = (event.selected * moviesPerPage) % movies.length
		setmovieOffset(newOffset)
	}

	useEffect(() => {
		dispatch(fetchMovies())
	}, [dispatch])

	if (loading) return <h1>Loading...</h1>


return (
  <div className="flex flex-wrap justify-evenly gap-x-1 gap-y-16 w-full mt-4">
    {currentmovies && currentmovies
		.filter(
			movie =>
				filter.includes(movie.category) ||
				filter.length === 0
		)
		.map((movie) => 
      <Card data={movie} key={movie.id} />
    )}
  </div>

)}

export default List
;