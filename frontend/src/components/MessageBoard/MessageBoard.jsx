import React, { useState, useEffect } from 'react';
import axios from "axios";
import useAuth from '../../hooks/useAuth';
import "bootswatch/dist/sandstone/bootstrap.min.css";


const MessageBoard = () => {
    const [user,token] = useAuth();
    const [messages,setMessages] = useState([]);
     
    const fetchMessages = async () => {
       try{
        let result = await axios.get("http://127.0.0.1:8000/messages/", {
         headers: {
           Authorization: "Bearer " + token,
         },
       });
       setMessages(result.data);
        }catch (error) {
            console.log(error.message);
        }
     };
     console.log(messages);
    
    useEffect(() => {
     fetchMessages();
    }, []);
    
    
    return ( 
        <div class="list-group-messages">
            <h3 class="card-header">Messages</h3>
             {messages && messages.map((m) => (
        < div key={m.id} class="list-group-item list-group-item-action flex-column align-items-start active">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{m.first_name} {m.last_name}</h5>
            <small>Today</small>
          </div>
          <p class="mb-1">{m.message}</p>
          <small>{m.email} {m.phone}</small>
        </div>
             ))}
      </div>
     );
}
 
export default MessageBoard;
