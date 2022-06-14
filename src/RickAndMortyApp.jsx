import './RickAndMortyApp.css'
import img from './helps/img/background-image.png'
import LocationInfo from './components/LocationInfo'
import CharacterCard from './components/CharacterCard'
import Input from './components/Input'
import useApi from './hooks/useApi'
import Loader from './components/Loader'

function RickAndMortyApp() {
  const {location, loader, setInput} = useApi()

  const onSubmitFunction = e => {
    e.preventDefault()
    setInput(e.target.firstChild.value)
  }

  return (
    <div className="RickAndMortyApp">
      { 
      loader
      ?
      <Loader />
      : 
      <>
        <div className="RickAndMortyApp__image-container" style={{backgroundImage: `url(${img})`}}>
          <Input onSubmitFunction={onSubmitFunction}/>
        </div>
        <div className='RickAndMortyApp__info-container'>
          <LocationInfo location={location} />
          <div className='CharacterCard-container'>
            {location?.residents.map(resident => (
              <CharacterCard key={resident} resident={resident}/>
            ))}
          </div>
        </div>
      </>
      }
    </div>
    )
}

export default RickAndMortyApp