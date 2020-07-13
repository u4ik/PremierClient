import React, {useEffect, useState} from 'react'

import {Container, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import { MDBDataTable, MDBBtn } from 'mdbreact';
import Logo from '../../assets/Premier-Commercial-Services-icon.svg';
import './Orders.css'

interface orderProps  {
    updateToken: string
    signedIn: any
    setSignedIn: any
}

const Orders:React.FunctionComponent<orderProps> = (props:orderProps) => {

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

const [userOrders, setUserOrders] =useState<any>([])

    const fetchOrders =  ()=> {

        fetch('http://localhost:3000/orders/all' ,{
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': props.updateToken
            }
        }).then(res => res.json())
        .then(noteData => {
          console.log(noteData);

          if(noteData.YourOrders !== undefined){
            setUserOrders(noteData.YourOrders);
          } else{
            setUserOrders(noteData.AllOrders)
          }
        
            console.log(userOrders)
        }).catch(err => console.log(err))
    }
    useEffect  (() => {
      console.log('userOrders', userOrders)
        if(userOrders && userOrders.length === 0 ){
          console.log('fecthing')
        fetchOrders();
        }

    } )
    const data = {
        columns: [
          {
            label: 'Order #',
            field: 'id',
            sort: 'asc',
            width: 50
          },
          {
            label: 'Location',
            field: 'userLocation',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Service Requested',
            field: "serviceReq",
            sort: 'asc',
            width: 150
          },
          {
            label: 'Requested Date',
            field: 'reqDateTime',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Complete',
            field: 'isComplete',
            sort: 'asc',
            width: 120
          },
        ],
        rows: 
        
        userOrders ? userOrders.map((order: any) => ({
          
          
          
          ...order,

          serviceReq:   Object.keys(order.serviceReq) + "-" + (order.serviceReq.Restaurant ? JSON.stringify(order.serviceReq.Restaurant): '')
          +  (order.serviceReq.Office ? JSON.stringify(order.serviceReq.Office): '')
          +  (order.serviceReq.Medical ? JSON.stringify(order.serviceReq.Medical): '')
          +  (order.serviceReq.Athletic ? JSON.stringify(order.serviceReq.Athletic): '')
          +  (order.serviceReq.Facilities ? JSON.stringify(order.serviceReq.Facilities): '')
          +  (order.serviceReq.Grocery ? JSON.stringify(order.serviceReq.Grocery): '')
        })

        )  : []};
        
    return(
        <div style={{backgroundColor:'white', color:'#009FE4' , textShadow:'.4px .4px 1px black'}}>

          <h3 style={{fontSize:'1.9rem', paddingTop:'3%', color:'#444343', userSelect:'none', marginBottom: '1%', paddingBottom: '1%', borderBottom: 'solid 1px white', backgroundColor: 'white'}}>Orders</h3>
          <Container>
          <div style={{marginTop: '5%'}}>

          {props.signedIn ? 
          <MDBBtn style={{fontSize: '1.2rem', color:'#009FE4', textShadow:'.4px .4px 1px black'}}>Create an Order!

          <Modal style={{borderRadius:'20px'}}isOpen={props.showContact} toggle={toggle} className=''>
          <ModalHeader toggle={toggle} style={modalHeaderStyle}>
          
          <img src = {Logo} style={{width:'20%'}} />
          </ModalHeader>
          <ModalBody style={{backgroundColor: '#009FE4'}}>
          <form className="fs-frm" id="myForm" name="simple-contact-form" accept-charset="utf-8">

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
          </MDBBtn>
          
          : null }
          </div>

          <MDBDataTable style={{color: '', textShadow: ''}}
            scrollY
            maxHeight="200px"
            striped
            bordered
            small
            data={data} />
          </Container>

        </div>
    )
}

export default Orders;