import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import Select from 'react-select'
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi'

import { useSelector, useDispatch } from 'react-redux'
import { fetchMovies, selectMovies } from '../store/slices/movieSlice'
import { AppDispatch } from '../store/store'
import Card from './Card'
import { reactSelectStyles, reactSelectTheme } from "../styles/react-select-styles";

export type Option = {
  label: string
  value: string
}

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
	<>
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
		<div className="flex mt-8 w-full justify-center gap-x-4 items-center">
			<ReactPaginate
				breakLabel="..."
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel={
					<button className="bg-slate-400 text-white p-2.5 hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out rounded-full">
						<BiLeftArrowAlt className="h-6 w-6 text-white-500" />
					</button>
				}
				nextLabel={
					<button className="bg-slate-400 text-white p-2.5 hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out rounded-full">
						<BiRightArrowAlt className="h-6 w-6 text-white-500" />
					</button>
				}
				renderOnZeroPageCount={() => null}
				containerClassName="flex justify-center gap-x-2"
				pageClassName="hidden"
			/>
			<Select
				options={[4, 8, 12].map(value => ({
					value,
					label: value + ' / page',
				}))}
				menuPosition="fixed"
				onChange={(option: any) =>
					setmoviesPerPage(option!.value ?? moviesPerPage)
				}
				placeholder="Movies per page"
				styles={reactSelectStyles()}
      	theme={(currentTheme) => reactSelectTheme(currentTheme)}
			/>
		</div>
	</>

)}

export default List
;