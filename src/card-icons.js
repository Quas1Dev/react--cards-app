import instagram from "./images/instagram.png"
import facebook from "./images/facebook.png"
import twitter from "./images/twitter.png"
export default function CardIcons() {
  return (
    <div className="card--icons">
      <img src={instagram} />
      <img src={facebook} />
      <img src={twitter} />
    </div>
  )
}
