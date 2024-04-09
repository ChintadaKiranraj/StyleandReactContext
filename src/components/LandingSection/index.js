import './index.css'
import MyContext from '../../context/LanguageContext'

const LandingSection = () => {
  const getLandingSectionData = (activeLanguage, landingSectionContent) => {
    switch (activeLanguage) {
      case 'EN':
        return landingSectionContent.EN
      case 'HI':
        return landingSectionContent.HI
      case 'TE':
        return landingSectionContent.TE
      default:
        return null
    }
  }
  return (
    <MyContext.Consumer>
      {value => {
        const {activeLanguage, playtimeContent} = value

        const {heading, description} = getLandingSectionData(
          activeLanguage,
          playtimeContent,
        )
        return (
          <div className="bg-container">
            <div className="responsive-container">
              <div className="description-container">
                <h1 className="heading">{heading}</h1>
                <p className="description">{description}</p>
              </div>
              <img
                className="logo-white"
                src="https://assets.ccbp.in/frontend/react-js/windows-logo-white-img.png"
                alt="windows logo"
              />
            </div>
          </div>
        )
      }}
    </MyContext.Consumer>
  )
}

export default LandingSection
