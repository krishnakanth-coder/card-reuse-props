import './index.css'

const CardsItems = props => {
  const {eachCard} = props
  const {title, description, imgUrl, className} = eachCard
  return (
    <div className={`${className} single-card`}>
      <h1 className="card-header">{title}</h1>
      <p>{description}</p>
      <img src={imgUrl} alt={title} />
    </div>
  )
}

export default CardsItems
