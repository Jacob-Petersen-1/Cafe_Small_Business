import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import "./Calendar.css"

const Calendar = () => {
 const [events, setEvents] = useState([]);
 const[titles, setTitles] = useState("");
 const[dates, setDates] = useState("");
    
    useEffect(() => {
        const fetchEvents = async () => {
            try {
              let response = await axios.get("http://127.0.0.1:8000/business/events/");
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
                selectMirror={true}/>
               

            </div>
        </div>

     );
}
 
export default Calendar;
