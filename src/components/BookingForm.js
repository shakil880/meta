import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function BookingForm() {
    const [name, setName] = useState(""); 
    const [date, setDate] = useState(""); 
    const [time, setTime] = useState(""); 
    const [guests, setGuests] = useState("");
    const [occassion, setOccassion] = useState(""); 
   
    
    const handleSubmit = (e) => {
      console.log(name);
      console.log(date);
      console.log(time);
      console.log(guests);
      console.log(occassion);

      setName("");
      setDate("");
      setTime("");
      setGuests("");
      setOccassion("");
      e.preventDefault();
      
      
    }; 
    


    return (
      <div className='form-section'>
        <form onSubmit={handleSubmit}>

          <div className='name_field'>
            <label for="appt">Name:</label>
            <input
              type="text"
              placeholder='Barack Obama'
              value={name}
              required
              onChange={(e) => { 
                setName(e.target.value); 
            }} 
            />
          </div>
          
          <div>
            <label for="appt">Select a Date:</label>
            <input
              type="date" 
              value={date}
              required
              onChange={(e) => { 
                setDate(e.target.value)
              ; 
            }} 
            />
          </div>

          <div>
            <label for="res-time">Choose time</label>
            <select value={time} required onChange={(e) => setTime(e.target.value)} id="res-time ">
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
          </div>

          <div>
            <label>Number of Guests:</label>
            <input 
              type="number" 
              placeholder='1-10'
              value={guests}
              required
              onChange={(e) => { 
                setGuests(e.target.value); 
            }}
            />
          </div>

          <div>
            <label>Occassion</label> 
            <select value={occassion} required onChange={(e) => setOccassion(e.target.value)}> 
                <option value="birthday">Birthday</option> 
                <option value="anniversary">Anniversary</option> 
                <option value="business">Business</option> 
            </select>
          </div>



          <button type="submit" className='hero-button'>
            <Link to='/orderconfirm'>Reserve a Table</Link>
         </button> 
        </form>
      </div>
  )
 }
