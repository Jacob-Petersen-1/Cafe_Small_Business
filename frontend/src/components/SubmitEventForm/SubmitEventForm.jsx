import React, { useState, useEffect } from 'react';
import axios from "axios";
import useAuth from "../../hooks/useAuth"


const SubmitEventForm = () => {
    const[user, token] = useAuth();
    const [title, setTitle] = useState("");
    const [start, setStart] = useState("");
    const[end,setEnd] = useState("");



    async function handleSubmitEvent(event){
        event.preventDefault();
        let newEvent = {
          title: title,
          start: start,
          end: end,
        }
        console.log(newEvent)
        await axios.post("http://127.0.0.1:8000/business/events/update/", newEvent, {
          headers: {
            Authorization: 'Bearer ' + token
          }
        });
      }
    

    return ( 
        <div>
            <form className="event-form" onSubmit={handleSubmitEvent}>
                <input type="text" placeholder="Name of Event.." id= "Title" value={title} onChange={(event) => setTitle(event.target.value)}/> 
                <input type="date" id= "start" value={start} onChange={(event) => setStart(event.target.value)}/> 
                <input type="date" id= "end" value={end} onChange={(event) => setEnd(event.target.value)}/> 
                <button type="text" class="submit">Update Calendar</button>
            </form>

        </div>
     );
}
 
export default SubmitEventForm;