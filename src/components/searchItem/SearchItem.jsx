import './searchItem.css'

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img 
            src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" 
            alt="" 
            className="siImg" 
        />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxi0p">Free airport taxi</span>
            <span className="siSubtitle">Studio Apartment with Air Conditioning</span>
            <span className="siFeatures">Entire Studio - 1 bathroom - 21m² 1 full bed</span>
            <span className="siCancel0p">Free cancellation</span>
            <span className="siCancel0pSubtitle">You can cancel later, so lock in this great price today!</span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$123</span>
                <span className="siTax0p">Includes taxes and fees</span>
                <button className="siCheckButton">See Availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem