import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter, selectCategories } from '../store/slices/movieSlice'

export type Option = {
  label: string
  value: string
}

interface Props {
	options: Option[]
}

const Filter:React.FC<Props> = ({ options }) => {

  const dispatch = useDispatch()

  return (
    <Select
      options={options}
      isMulti
      onChange={options => {
        const categories = options.map(option => option.value)
        dispatch(setFilter(categories))
      }}
      placeholder="Selectionner Catégorie..."
    />
        
  )
}
export default Filter