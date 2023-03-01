import './header.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate } from "react-router-dom";
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range'
import { useState } from 'react';
import { format } from 'date-fns';


const Header = ({type}) => {
    
    const [destination, setDestination] = useState('')
    const [openDate, setOpenDate] = useState(false)
    const [openOptions, setOpenOptions] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const navigate = useNavigate()

    const handleOptions = (name, operation) => {
        setOptions((prev)=> {
            return{
                ...prev,
                [name]: operation === 'i' ? options[name] + 1 : options[name] - 1
            }
        })
    }

    const handleSearch = () => {
        navigate('/hotels', {state:{destination, date, options}})
    }

  return (
    <>
        <div className="header">
            <div className={type === 'list' ? 'headerContainer listMode' : 'headerContainer'} >
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed}/>
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane}/>
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar}/>
                        <span>Car Rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed}/>
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi}/>
                        <span>Airport Taxis</span>
                    </div>
                </div>
                {type !== 'list' && 
                <>
                <h1 className="headerTitle">A lifetime of discounts? Its Genius.</h1>
                <p className="headerDesc">
                    General Description General Description General Description General 
                    Description General Description General Description
                </p>
                <button className="headerBtn">Sign In / Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className='headerIcon'/>
                        <input 
                            type="text" 
                            placeholder='Where are you going?'
                            className="headerSearchInput"
                             onChange={e=>setDestination(e.target.value)}
                        />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className='headerIcon'/>
                        <span className="headerSearchText" onClick={() => setOpenDate(!openDate)}>
                            {`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}
                        </span>
                        {openDate && <DateRange 
                            editableDateInputs={true}
                            onChange={(item)=> setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date" 
                            minDate={new Date()}
                        />}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
                        <span className="headerSearchText" onClick={() => setOpenOptions(!openOptions)}>
                            {`${options.adult} adult(s) | ${options.children} children(s) | ${options.room} room(s)`}
                        </span>
                        {openOptions && 
                        <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" onClick={() => handleOptions('adult', 'd')} disabled={options.adult <= 1}>-</button>
                                    <span className="optionCounterNumber">{options.adult}</span>
                                    <button className="optionCounterButton" onClick={() => handleOptions('adult', 'i')} >+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" onClick={() => handleOptions('children', 'd')} disabled={options.children <= 0}>-</button>
                                    <span className="optionCounterNumber">{options.children}</span>
                                    <button className="optionCounterButton" onClick={() => handleOptions('children', 'i')}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Room</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" onClick={() => handleOptions('room', 'd')} disabled={options.room <= 1}>-</button>
                                    <span className="optionCounterNumber">{options.room}</span>
                                    <button className="optionCounterButton" onClick={() => handleOptions('room', 'i')}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn" onClick={handleSearch}>Search</button>
                    </div>
                </div>
                </>}
            </div>
        </div>
    </>
  )
}

export default Header