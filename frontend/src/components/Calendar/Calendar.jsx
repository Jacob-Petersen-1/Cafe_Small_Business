import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import "./Calendar.css"

const Calendar = () => {
 const [events, setEvents] = useState([]);

 
 


    useEffect(() => {
        
      const fetchEvents = async () => {
          try {
              let response = await axios.get("http://127.0.0.1:8000/business/events/"); //Data from Database unprotected
              setEvents(response.data);
            } catch (error) {
              console.log(error.message);
            }
          };
        fetchEvents();
        console.log("EVENT DATA:",events)
      }, []);
      
      
      
      return ( 
        <div className="calendar">
            <div className='calendar-main'>
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
        </div>

);
}

export default Calendar;
// notes:
// let formatData = events.map( (e) => {
//   return {id:e.id.toString(), title:e.title, start: e.start, end: e.end}
//  })
//  console.log(formatData)