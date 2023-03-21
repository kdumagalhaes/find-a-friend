import { Container } from './styles'
import Logo from '../../assets/icons/comp-logo.svg'
import Dogs from '../../assets/icons/dogs.svg'
import { Select } from '@/components/Select'
import { SearchButton } from '@/components/SearchButton'

export function Home() {
  function handleSearchPets() {
    // TO DO
  }

  function handleChangeState() {
    // TO DO
  }

  function handleChangeCity() {
    // TO DO
  }

  return (
    <Container>
      <img src={Logo} alt="logo find a friend" className="logo" />
      <div className="hero">
        <h1 className="cta">Leve a felicidade para o seu lar</h1>
        <img src={Dogs} alt="desenho de cães" className="dogs" />
      </div>
      <div className="bottom">
        <p className="description">
          Encontre o animal de estimação ideal para seu estilo de vida!
        </p>
        <div className="search-form">
          <span className="label-select">Busque um amigo:</span>
          <Select
            label=""
            name="UF"
            options={[]}
            defaultOption="UF"
            cssHandler="uf-select"
          />
          <Select
            label=""
            name="Cidade"
            options={[]}
            defaultOption="Cidade"
            cssHandler="cidade-select"
          />
          <SearchButton />
        </div>
      </div>
    </Container>
  )
}
