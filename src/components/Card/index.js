// Write your code here.
import './index.css'

const Card = props => {
  const {details} = props
  const {title, description, imgUrl, className} = details
  return (
    <div className={`one ${className}`}>
      <h1 className="sub-heading">{title}</h1>
      <p className="sub-para">{description}</p>
      <div className="imageContainer">
        <img src={imgUrl} alt="img" className="image" />
      </div>
    </div>
  )
}
export default Card
