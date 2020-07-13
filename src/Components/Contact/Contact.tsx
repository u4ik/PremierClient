import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Logo from '../../assets/Premier-Commercial-Services-icon.svg';
import './Contact.css';


interface contactPage {
    showContact: boolean
    setShowContact: React.Dispatch<React.SetStateAction<boolean>> 
}



const Contact: React.FunctionComponent<contactPage> = (props:contactPage) => {


    const [modal, setModal] = useState(true);
    
    const toggle = () => props.setShowContact(!props.showContact);


    const modalHeaderStyle:React.CSSProperties= {
        backgroundColor:'#177BBD',
        color: 'white',
        textShadow: '.1rem .1rem .1rem black',
        borderColor:'transparent',
        borderRadius: '20px 20px 0px 0px',

    } 

    const modalFooterStyle:React.CSSProperties= {
        backgroundColor:'#177BBD',
        color: 'white',
        textShadow: '.1rem .1rem .1rem black',
        borderColor:'transparent',
        borderRadius: '0px 0px 20px 20px'
    } 


    const inputStyles:React.CSSProperties= {
        textAlign: 'center',
        borderRadius:'5px',
        outline:'none',
        borderColor:'transparent'
    }
    const labelStyles:React.CSSProperties= {
        textShadow: '.1rem .1rem .1rem black',
        color:'white',
        marginTop: '.5rem'
    
    }

    const textBoxStyle:React.CSSProperties={
        textAlign: 'center',
        resize:'none',
        borderRadius:'5px',
        outline:'none',
        borderColor:'transparent'
    }
    return (
    <div className="" >
        <div>

            <Modal style={{borderRadius:'20px'}}isOpen={props.showContact} toggle={toggle} className=''>
                <ModalHeader toggle={toggle} style={modalHeaderStyle}>
                
                <img src = {Logo} style={{width:'20%'}} />
                </ModalHeader>
                <ModalBody style={{backgroundColor: '#009FE4'}}>
                <form className="fs-frm" id="myForm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/matthewoladele@gmail.com" method="post">

                    <fieldset id="fs-frm-inputs">

                        <div style = {{display: 'flex', flexDirection: 'column', textAlign:'center'}}>
                        <label style={labelStyles} id="labelName" htmlFor="full-name">Name:</label>
                        <input style = {inputStyles} type="text" name="name" id="full-name" placeholder="First and Last" required= {true}></input>

                        <label style={labelStyles} htmlFor="email-address">E-mail:</label>
                        <input style = {inputStyles} type="email" name="_replyto" id="email-address" placeholder="Type email here" required= {true}></input>
                        <label style={labelStyles} htmlFor="message">Message:</label>
                       <textarea style = {textBoxStyle} rows = {3} cols={50} name="message" id="message" placeholder="Type message here" required= {true}></textarea>
                  


                        <input style = {inputStyles} type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"></input>


                        </div>
                    </fieldset>
                    


                    <div id="sendButton" style={{textAlign:'center', marginTop:'3%'}}> 
                    <Button color="primary" type="submit" id="subm" value="Submit" className="btn btn-primary" >Send</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                    
                    </div>
                </form>
              
                </ModalBody>
                <ModalFooter style={modalFooterStyle}>
              
                </ModalFooter>
            </Modal>
        </div>
    </div>
    );
  }
  
  export default Contact;
  