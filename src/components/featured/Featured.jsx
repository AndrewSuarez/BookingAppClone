import './featured.css'

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/64/f0/13/pestana-caracas-premiun.jpg?w=600&h=400&s=1" alt="Caracas" className="featuredImg" />
        <div className="featuredTitles">
          <h2>Caracas</h2>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://cdn.britannica.com/41/125641-050-304EC877/Puerto-Cruz-beach-Margarita-Island-Venezuela.jpg" alt="Isla Margarita" className="featuredImg" />
        <div className="featuredTitles">
          <h2>Isla Margarita</h2>
          <h2>532 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://i.pinimg.com/originals/b8/d7/cf/b8d7cf3bd9a7277b05963d841501b819.jpg" alt="La Guaira" className="featuredImg" />
        <div className="featuredTitles">
          <h2>La Guaira</h2>
          <h2>533 Properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured