import './featuredProperties.css'

const featuredProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
            <img 
                src="https://media-cdn.tripadvisor.com/media/photo-s/16/c4/4e/66/aparthotel-stare-miasto.jpg" 
                alt="" 
                className="fpImg" 
            />
            <span className="fpName">Aparthotel Stare Miasto</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img 
                src="https://www.ahsm-krakow.com/images/junior_suite__003_49095f5ab3c42475c9244d8.jpg" 
                alt="" 
                className="fpImg" 
            />
            <span className="fpName">Aparthotel Stare Miasto</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img 
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/46/20/0b/aparthotel-stare-miasto.jpg?w=700&h=-1&s=1" 
                alt="" 
                className="fpImg" 
            />
            <span className="fpName">Aparthotel Stare Miasto</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img 
                src="https://www.ahsm-krakow.com/images/deluxe_studio_with_spa_bath_001_49095f5ab3c42475c924d84.jpg" 
                alt="" 
                className="fpImg" 
            />
            <span className="fpName">Aparthotel Stare Miasto</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
    </div>
  )
}

export default featuredProperties 