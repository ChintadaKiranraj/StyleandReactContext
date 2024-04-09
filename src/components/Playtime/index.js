import {useContext} from 'react'
import './index.css'
import MyContext from '../../context/LanguageContext'

const Playtime = () => {
  const value = useContext(MyContext)
  const {activeLanguage, playtimeContent} = value

  const getPlaytimeData = () => {
    switch (activeLanguage) {
      case 'EN':
        return playtimeContent.EN
      case 'HI':
        return playtimeContent.HI
      case 'TE':
        return playtimeContent.TE
      default:
        return null
    }
  }

  const {heading, description} = getPlaytimeData()

  return (
    <div className="playtime-container">
      <h1 className="playtime-heading">{heading}</h1>
      <div className="playtime-description-container">
        <p className="playtime-description">{description}</p>
        <img
          className="playtime-games-image"
          src="https://assets.ccbp.in/frontend/react-js/gaming-pad-img.png"
          alt="gaming pad"
        />
      </div>
    </div>
  )
}

export default Playtime
