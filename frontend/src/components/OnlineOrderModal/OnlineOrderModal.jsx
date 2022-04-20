import React, { useState, useEffect } from 'react';
import {Modal, Button} from 'react-bootstrap';
import "./OnlineOrderModal.css";


const OnlineOrderModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return ( 
        
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
              <Modal.Title>Order!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {/* <div class="form-group">
              <form onSubmit={handleSubmitMessage}>
                  <label class="form-label mt-4">Contact Info: </label>
                    <div class="form-floating mb-3">
                      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(event) => setEmail(event.target.value)}/>
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" id="floatingPhone" placeholder="Last Name"value={phone} onChange={(event) => setPhone(event.target.value)}/>
                      <label for="floatingPhone">Phone Number</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" id="floatingFirst" placeholder="First Name" value={first_name} onChange={(event) => setFirstName(event.target.value)}/>
                      <label for="floatingFirst">First Name</label>
                    </div>

                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" id="floatingSecond" placeholder="Last Name" value={last_name} onChange={(event) => setLastName(event.target.value)}/>
                      <label for="floatingSecond">Last Name</label>
                    </div>

                    <div class="form-group">
                      <label for="exampleTextarea" class="form-label mt-4">Message</label>
                      <textarea class="form-control" id="exampleTextarea" rows="3" value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
                    </div> */}
                        <Modal.Footer>
                          <Button variant="primary" type="submit" onClick={handleClose}>
                            Submit 
                          </Button>
                        </Modal.Footer>
                  {/* </form>
              </div> */}
            </Modal.Body>

      </Modal>
     );

}
 
export default OnlineOrderModal;