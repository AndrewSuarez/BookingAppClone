import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import './hotel.css'

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState()
  const [slideOpen, setSlideOpen] = useState(false)

  const photos = [
    {
      src: 'https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg'
    },
    {
      src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Hotel-room-renaissance-columbus-ohio.jpg/1024px-Hotel-room-renaissance-columbus-ohio.jpg'
    },
    {
      src: 'https://pix10.agoda.net/hotelImages/209/2092140/2092140_17031512040051555216.jpg?ca=6&ce=1&s=1024x768'
    },
    {
      src: 'https://www.ggrasia.com/wp-content/uploads/2015/05/JW-Marriot-hotel-room-Galaxy-Macau-Phase-2-e1432637852679.jpg'
    },
    {
      src: 'https://www.italianbark.com/wp-content/uploads/2018/01/hotel-room-design-trends-italianbark-interior-design-blog.jpg'
    },
  ]

  const handleOpen = (i) => {
    setSlideNumber(i)
    setSlideOpen(!slideOpen)
  }

  const handleArrow = (direction) => {
    let newSlideNumber;

    if(direction ==="l"){
      newSlideNumber = slideNumber  === 0 ? 5: slideNumber - 1
    }else{
      newSlideNumber = slideNumber  === 5 ? 0: slideNumber + 1
    }

    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="hotelContainer">
      {slideOpen && 
        <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setSlideOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleArrow("l")}/>
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleArrow("r")}/>
         </div>
      }
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">Excellent location - 500m from center</span>
          <span className="hotelPriceHighlight">
            Book a stay over $144 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i)=>(
              <div className="hotelImgWrapper">
                <img onClick={()=> handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailText">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Vero, deserunt, inventore accusantium repudiandae odio quod 
                sequi odit consequuntur rerum minus amet culpa sint ipsum 
                fugiat tempora laborum molestiae. Delectus, architecto?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aut accusamus tempore, rem culpa optio quaerat repellendus 
                natus, repellat voluptas impedit consequatur mollitia 
                voluptatibus deleniti blanditiis! In totam enim nihil 
                asperiores.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of krakow, this property has an
                excellent location score of 9.8
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
           </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel