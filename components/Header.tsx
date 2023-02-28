import { useSelector } from 'react-redux'
import { selectCategories } from '../store/slices/movieSlice'
import Filter from './Filter'

interface Props {
	title: string
}

const Header:React.FC<Props> = ({ title }) => {  
  const categories = useSelector(selectCategories).map(category => ({
		value: category,
		label: category,
	}))

  return (
    <header className="sticky top-0 w-full mb-4">
        <nav className="w-full flex justify-center gap-10 items-center border-gray-200 px-8 py-5 bg-red-600 text-white">
          <div>
            <h1 className="self-center text-6xl font-semibold whitespace-nowrap">
              {title}
            </h1>
          </div>
          <Filter options={categories} />
        </nav>
    </header>
  )}

export default Header;