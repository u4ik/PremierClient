import React, {useEffect, useState} from 'react'

import {Container, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import { MDBDataTable, MDBBtn } from 'mdbreact';
import CreateOrder from '../Orders/CreateOrder';
import './Orders.css'

interface orderProps  {
    updateToken: string
    signedIn: any
    setSignedIn: any
}

const Orders:React.FunctionComponent<orderProps> = (props:orderProps) => {

const [showOrder, setShowOrder] = useState<boolean>(false);


const [userOrders, setUserOrders] =useState<any>([])

const showThatOrder= (e:any) => {
  e.preventDefault();
  setShowOrder(!showOrder)
}

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
          +  (order.serviceReq.Athletics ? JSON.stringify(order.serviceReq.Athletics): '')
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
          <MDBBtn style={{fontSize: '1.2rem', color:'#009FE4', textShadow:'.4px .4px 1px black'}}
          onClick={(e:any) => {
            showThatOrder(e);
        }} 
          >Create an Order!</MDBBtn>
          : null }
          </div>
          <CreateOrder updateToken={props.updateToken} setShowOrder={setShowOrder} showOrder ={showOrder} />
          
            
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