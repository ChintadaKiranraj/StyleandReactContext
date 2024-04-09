import './index.css'
import MyContext from '../../context/LanguageContext'

const NewWaysToConnect = () => {
  const getNewWaysToConnectData = (newWaysToConnectContent, activeLanguage) => {
    switch (activeLanguage) {
      case 'EN':
        return newWaysToConnectContent.EN
      case 'HI':
        return newWaysToConnectContent.HI
      case 'TE':
        return newWaysToConnectContent.TE
      default:
        return null
    }
  }

  return (
    <MyContext.Consumer>
      {value => {
        const {activeLanguage, playtimeContent} = value
        const {heading, description} = getNewWaysToConnectData(
          playtimeContent,
          activeLanguage,
        )

        return (
          <div className="new-ways-to-connect-container">
            <h1 className="new-ways-to-content-heading">{heading}</h1>
            <p className="new-ways-to-content-description">{description}</p>
          </div>
        )
      }}
    </MyContext.Consumer>
  )
}

export default NewWaysToConnect
