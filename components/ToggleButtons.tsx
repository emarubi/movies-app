import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { BiLike, BiDislike } from 'react-icons/bi'
import { like, dislike, unlike, undislike } from '../store/slices/movieSlice'
import { Movie } from '../data/movies'

const LIKE = 'like'
const DISLIKE = 'dislike'
const NEUTRAL = 'neutral'

interface Props {
	data: Movie
}
const ToggleButtons: React.FC<Props> = ({ data }) => {
  const [reaction, setReaction] = useState('neutral')
	const dispatch = useDispatch()

	const handleReaction = (input: string) => {
		if (reaction === NEUTRAL) {
			setReaction(input)
			if (input === LIKE) dispatch(like(data.id))
			else dispatch(dislike(data.id))
		} else if (reaction === LIKE) {
			if (input === DISLIKE) {
				dispatch(unlike(data.id))
				dispatch(dislike(data.id))
				setReaction(DISLIKE)
			} else {
				dispatch(unlike(data.id))
				setReaction(NEUTRAL)
			}
		} else if (reaction === DISLIKE) {
			if (input === LIKE) {
				dispatch(undislike(data.id))
				dispatch(like(data.id))
				setReaction(LIKE)
			} else {
				dispatch(undislike(data.id))
				setReaction(NEUTRAL)
			}
		}
	}

  return (
    <div className="flex">
        <button
          type="button"
          className={`inline-block max-sm:px-6 px-4 py-2.5 bg-slate-400 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out rounded-full rounded-r-none ${
            reaction === LIKE &&
            'bg-gray-600 hover:bg-gray-700 focus:bg-gray-700'
          }`}
          onClick={() => handleReaction(LIKE)}
        >
          <BiLike className="h-6 w-6" />
        </button>
        <button
          type="button"
          className={`inline-block max-sm:px-6 px-4 py-2.5 bg-slate-400 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out rounded-full rounded-l-none ${
            reaction === DISLIKE &&
            'bg-gray-600 hover:bg-gray-700 focus:bg-gray-700'
          }`}
          onClick={() => handleReaction(DISLIKE)}
        >
          <BiDislike className="h-6 w-6" />
        </button>
      </div>
    )
}

export default ToggleButtons