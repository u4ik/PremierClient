import React, {useState} from 'react'


import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Contact: React.FunctionComponent = (props) => {


    const [modal, setModal] = useState(true);
    
    const toggle = () => setModal(!modal);


    const modalHeaderStyle= {
        backgroundColor:'#177BBD',
        color: 'white',
        textShadow: '.1rem .1rem .1rem black'
    } 

    const modalFoorterStyle= {
        backgroundColor:'#177BBD',
        color: 'white',
        textShadow: '.1rem .1rem .1rem black'
    } 
    return (
    <div className="" >
        <div>

            <Modal isOpen={modal} toggle={toggle} className=''>
                <ModalHeader toggle={toggle} style={modalHeaderStyle}>Contact Form</ModalHeader>
                <ModalBody>
                <form className="fs-frm" id="myForm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/insighteuphoric@gmail.com" method="post">

                    <fieldset id="fs-frm-inputs">

                        <div style = {{display: 'flex', flexDirection: 'column', textAlign:'center'}}>
                        <label id="labelName" htmlFor="full-name">Name:</label>
                        <input type="text" name="name" id="full-name" placeholder="First and Last" required= {true}></input>

                        <label htmlFor="email-address">E-mail:</label>
                        <input type="email" name="_replyto" id="email-address" placeholder="Type email here" required= {true}></input>
                        <label htmlFor="message">Message:</label>
                       <textarea rows = {3} cols={50} name="message" id="message" placeholder="Type message here" required= {true} style={{resize: "none"}}></textarea>
                  


                        <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"></input>


                        </div>
                    </fieldset>
                    
               
                </form>
                </ModalBody>
                <ModalFooter style={modalFoorterStyle}>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    </div>
    );
  }
  
  export default Contact;
  