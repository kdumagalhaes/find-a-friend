import { Button } from './styles'
import SearchIcon from '../../assets/icons/search.svg'

export function SearchButton() {
  return (
    <Button>
      <img src={SearchIcon} alt="ícon de pesquisa" className="button-icon" />
    </Button>
  )
}
