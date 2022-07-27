// Import our only style file
import './style.css'
// Import all free brand icons
import {fab} from '@fortawesome/free-brands-svg-icons'

// Import envelope icon
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

// import library object - Individual or set of icons added to it becomes
// accessible to any file in the project - Must be used "initializing module"
// of the project
import {library} from '@fortawesome/fontawesome-svg-core'

// import card-info components - Holds the top content of the card
import CardInfo from "./card-info.js"
import CardAbout from "./about.js"
import CardInterest from "./interests.js"
import CardIcons from "./card-icons.js"
// Allow that all free brand icons and envelopeicon to be referenced by
// any file in the project
library.add(fab, faEnvelope)



export default function App(){
  return (
    <div className="card">
      <CardInfo />
      <CardAbout />
      <CardInterest />
      <CardIcons />
    </div>
  )
}
