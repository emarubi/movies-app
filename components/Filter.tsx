import Select from 'react-select'
import { useDispatch } from 'react-redux'
import { setFilter } from '../store/slices/movieSlice'
import { reactSelectStyles, reactSelectTheme } from "../styles/react-select-styles";

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
      styles={reactSelectStyles()}
      theme={(currentTheme) => reactSelectTheme(currentTheme)}
    />
        
  )
}
export default Filter