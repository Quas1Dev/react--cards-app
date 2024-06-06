import instagram from "./images/instagram.png"
import facebook from "./images/facebook.png"
import twitter from "./images/twitter.png"

export default function CardIcons() {
  return (
    <div className="card--icons">
      <img src={instagram} alt = "Instagram logo; select and go to my Instagram profile."/>
      <img src={facebook} alt = "Facebook logo; select and go to my Facebook profile."/>
      <img src={twitter} alt = "Twitter logo; select and go to my Twitter profile."/>
    </div>
  )
}
