import Image from 'next/image'
import { BiTrash } from 'react-icons/bi'
import { useDispatch } from 'react-redux'

import { Movie } from '../data/movies'
import Tag from './Tag'
import ProgressBar from './ProgressBar'
import ToggleButtons from './ToggleButtons'
import { deleteMovie } from '../store/slices/movieSlice'

interface Props {
	data: Movie
}

const Card:React.FC<Props> = ({ data }) => {
const dispatch = useDispatch()

return (
  <div className="flex justify-center w-full md:w-1/3 lg:w-1/4 xl:w-1/5">
    <div className="rounded-md shadow-lg bg-white w-full overflow-hidden max-w-[600px]">
      <Image src={data?.image || 'https://picsum.photos/600/900'} alt="Film picture" width={600} height={900} loading="eager"/>
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h5 className="inline-block text-gray-900 text-xl font-bold mb-2 w-3/6 truncate text-left">
            {data?.title}
          </h5>
          <Tag label={data?.category}
            className={`
              ${(data?.category === 'Comedy') && 'bg-orange-200  text-orange-800'}
              ${(data?.category === 'Drame') && 'bg-green-200  text-green-800'}
              ${(data?.category === 'Animation') && 'bg-indigo-100  text-indigo-800 '}
              ${(data?.category === 'Thriller') && 'bg-red-200  text-red-800 '}
              `} />
        </div>
        <div>
          <div className="flex justify-between">
            <ToggleButtons data={data} />
            <button
              type="button"
              className={`inline-block p-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out rounded-full`}
              onClick={() => dispatch(deleteMovie(data.id))}
            >
              <BiTrash className="h-6 w-6" />
            </button>
          </div>
          <ProgressBar
            value={
              (data?.likes / (data?.dislikes + data?.likes)) *
              100
            }
          />
        </div>
      </div>
    </div>
  </div>
)
}

export default Card