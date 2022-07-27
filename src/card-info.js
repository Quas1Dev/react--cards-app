import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import foto from './images/fernando.jpg'

// CardInfo Section
export default function CardInfo() {
  return (
    <section className="cardinfo">

      <div className="cardinfo--aspect_ration_keeper">
        <img className="cardinfo--foto"src={foto}/>
      </div>

      <h1 className="cardinfo--person_name">Fernando</h1>

      <span className="cardinfo--job">Full Stack Developer</span>

      <span className="cardinfo--website">fernando.website</span>

      <div className="cardinfo--main_contact_means">
        <div className="main_contact_means--button main_contact_means--email" >
           <FontAwesomeIcon icon="fa-envelope" /> E-mail
        </div>
        <div className="main_contact_means--button main_contact_means--linkedin">
          <FontAwesomeIcon icon="fa-brands fa-linkedin-in" /> Linkedin
        </div>
      </div>
    </section>
  )
}
