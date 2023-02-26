import { useSelector } from 'react-redux'
import { selectCategories } from '../store/slices/movieSlice'
import Filter from './Filter'

interface Props {
	title: string
  author: string
}

const Header:React.FC<Props> = ({ title, author }) => {  
  const categories = useSelector(selectCategories).map(category => ({
		value: category,
		label: category,
	}))

  return (
    <header className="w-full md:px-12 sm:px-2">
        <nav className="w-full flex items-end border-gray-200 px-8 py-2.5 bg-red-600 text-white justify-between gap-5">
          <div>
            <h1 className="self-center text-6xl font-semibold whitespace-nowrap">
              {title}
            </h1>

            <span className="mt-3 ml-2 text-2xl">
              {author}
            </span>
          </div>
          <Filter options={categories} />
        </nav>
    </header>
  )}

export default Header;