import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import "./Calendar.css"
import { Link } from "react-router-dom";
import "bootswatch/dist/sandstone/bootstrap.min.css";
import SubmitEventForm from '../SubmitEventForm/SubmitEventForm';

const Calendar = () => {
 const [events, setEvents] = useState([]);

 
 
 const fetchEvents = async () => {
     try {
         let response = await axios.get("http://127.0.0.1:8000/business/events/"); //Data from Database unprotected
         setEvents(response.data);
         console.log("EVENT DATA:",response.data)
       } catch (error) {
         console.log(error.message);
       }
     };
 

    useEffect(() => {
        
        fetchEvents();
      }, []);
      
      
      
      return ( 
        <div className="calendar">
            <div className='calendar-main'>
              <div className='back-home'>
                <Link to="/"><button class="btn btn-lg btn-primary" type="button">Back to Home</button></Link>
              </div>
                <FullCalendar
                plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
                headerToolbar={{
                  left: 'prev,next today',
                  center: 'title',
                  right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                initialView='dayGridMonth'
                editable={true}
                selectable={true}
                selectMirror={true}
                events={events}/>
               

            </div>
            <SubmitEventForm fetchEvents={fetchEvents} />
        </div>

);
}

export default Calendar;
// notes:
// let formatData = events.map( (e) => {
//   return {id:e.id.toString(), title:e.title, start: e.start, end: e.end}
//  })
//  console.log(formatData)