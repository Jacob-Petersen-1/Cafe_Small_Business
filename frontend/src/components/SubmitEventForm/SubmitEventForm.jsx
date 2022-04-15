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
        // <div>
        //     <form className="event-form" onSubmit={handleSubmitEvent}>
        //         <input type="text" placeholder="Name of Event.." id= "Title" value={title} onChange={(event) => setTitle(event.target.value)}/> 
        //         <input type="date" id= "start" value={start} onChange={(event) => setStart(event.target.value)}/> 
        //         <input type="date" id= "end" value={end} onChange={(event) => setEnd(event.target.value)}/> 
        //         <button type="text" class="submit">Update Calendar</button>
        //     </form>

        // </div>

        <div class="card mb-3-calendar">
        <h3 class="card-header">Add Event To Business Calendar</h3>
        
        In the name of the event field, be sure to add the time of the event.
        <div class="card-body">
        </div>
        <ul class="list-group list-group-flush">
        <form on onSubmit={handleSubmitEvent}>
            <li class="list-group-item"> <input type="text" placeholder="Name of Event.." id= "Title" value={title} onChange={(event) => setTitle(event.target.value)}/> </li>
            <li class="list-group-item"><input type="date" id= "start" value={start} onChange={(event) => setStart(event.target.value)}/> </li>
            <li class="list-group-item"><input type="date" id= "end" value={end} onChange={(event) => setEnd(event.target.value)}/></li>
            <button type="submit" class="btn btn-primary mb-2">ADD</button>  
        </form>
        </ul>
        </div>

     );
}
 
export default SubmitEventForm;