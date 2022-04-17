import Modal from 'react-bootstrap/Modal'
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";




const ModalForm  = () => {
    return ( 
        <Modal show={true} onHide={handleClose}>
        <ModalHeader closeButton>
          <ModalTitle>Modal heading</ModalTitle>
        </ModalHeader>
        <ModalBody>
          Woohoo, you're reading this text in a modal!
        </ModalBody>
        <ModalFooter>
          <Button variant="primary" onClick={handleSubmit}>
            Submit 
          </Button>
        </ModalFooter>
      </Modal>
     );
}
 
export default ModalForm;