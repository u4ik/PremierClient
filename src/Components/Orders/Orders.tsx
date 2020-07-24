import React, {useEffect, useState} from 'react'

import {Container, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import { MDBDataTable, MDBBtn } from 'mdbreact';












import CreateOrder from '../Orders/CreateOrder';
import './Orders.css'

import Edit from '../../assets/testimonialPage/edit.svg'
import Delete from '../../assets/testimonialPage/delete.svg'
interface orderProps  {
    updateToken: string
    signedIn: any
    setSignedIn: any
    isAdmin: any
}

const Orders:React.FunctionComponent<orderProps> = (props:orderProps) => {

const [showOrder, setShowOrder] = useState<boolean>(false);
const [orderId, setOrderId] = useState<any>()


const [userOrders, setUserOrders] =useState<any>([])

const showThatOrder= (e:any) => {
  e.preventDefault();
  setShowOrder(!showOrder)
}

const createButton={
  fontSize: '1.6rem',
  color: '#009FE4',
  textShadow: '1px 1px 1px black'
}

    const fetchOrders =  ()=> {
        let token = localStorage.getItem('token')
        fetch('http://localhost:3000/orders/all' ,{
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': token!
            }
        }).then(res => res.json())
        .then(orderData => {
          // console.log(orderData);

          if(orderData.YourOrders !== undefined){
            setUserOrders(orderData.YourOrders);
          } else{
            setUserOrders(orderData.AllOrders)
          }
        
            // console.log(userOrders)
        }).catch(err => console.log(err))
    }


    const updateOrder = (e:any) => {
      let token = localStorage.getItem('token')
      const reqBody = { 
           isComplete: e.target.value
      }
    
      fetch('http://localhost:3000/orders/edit/' + orderId, {
          method: 'PUT',
          headers: {
              'Content-Type' : 'application/json',
              'Authorization' : token!
          },
          body: JSON.stringify(reqBody)
      }).then(res => res.json())
      .then(response => {
       console.log(response)
         fetchOrders();
         
      })
  }

    const handleChange = (e:any) => {
      // setServiceComplete(e.target.value);
      // console.log(e.target.value)
      updateOrder(e);
      fetchOrders();
  }
  
    useEffect  (() => {
 
        if(userOrders && userOrders.length === 0 ){

        fetchOrders();
        }

    } )

    

    

    let data = {
      
        columns: [
          {
            label: 'Order #',
            field: 'id',
            sort: 'asc',
            width: 50
          },
          {
            label: 'Name',
            field: 'userName',
            sort: 'asc',
            width: 120
          },
    
          {
            label: 'Location',
            field: 'userLocation',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Service Requested',
            field: "serviceReq",
            sort: 'asc',
            width: 450
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
          serviceReq:   Object.keys(order.serviceReq) + " " +"-"
          + (order.serviceReq.Restaurant ? JSON.stringify(order.serviceReq.Restaurant).replace('{', ' ').replace('}', ' ').replace(/,/g, "-").replace(/"/g, " ").replace(/true/g, "Yes").replace(/false/g, "No"): '')
          +  (order.serviceReq.Office ? JSON.stringify(order.serviceReq.Office).replace('{', ' ').replace('}', ' ').replace(/,/g, "-").replace(/"/g, " ").replace(/true/g, "Yes").replace(/false/g, "No"): '')
          +  (order.serviceReq.Medical ? JSON.stringify(order.serviceReq.Medical).replace('{', ' ').replace('}', ' ').replace(/,/g, "-").replace(/"/g, " ").replace(/true/g, "Yes").replace(/false/g, "No"): '')
          +  (order.serviceReq.Athletics ? JSON.stringify(order.serviceReq.Athletics).replace('{', ' ').replace('}', ' ').replace(/,/g, "-").replace(/"/g, " ").replace(/true/g, "Yes").replace(/false/g, "No"): '')
          +  (order.serviceReq.Services ? JSON.stringify(order.serviceReq.Services).replace('{', ' ').replace('}', ' ').replace(/,/g, "-").replace(/"/g, " ").replace(/true/g, "Yes").replace(/false/g, "No"): '')
          +  (order.serviceReq.Grocery ? JSON.stringify(order.serviceReq.Grocery).replace('{', ' ').replace('}', ' ').replace(/,/g, "-").replace(/"/g, " ").replace(/true/g, "Yes").replace(/false/g, "No"): ''),
          isComplete:  <select style = {{outline:'none', border:'none', backgroundColor:'transparent'}} value={order.isComplete} name="name" id=""  onClick={() => {
            // console.log(order.id);
            {}
            setOrderId(order.id);
       
             }} onChange={(e) => {
              handleChange(e);
                 }}>
                 <option value={order.isComplete === 'yes'  ? 'yes' : 'no'}>{order.isComplete === 'yes' ? 'yes' : 'no'} </option>
                 <option value={order.isComplete === 'yes'  ? 'no' : 'yes'}>{order.isComplete === 'yes' ? 'no' : 'yes'}</option>
   
                 
                 {/* <option value='yes'>yes</option>
                 <option value='no'>no</option> */}
             </select>
        })
        )  : []
      
       
      
      
      };

        
    let data2 = {
      
        columns: [
          {
            label: 'Order #',
            field: 'id',
            sort: 'asc',
            width: 50
          },
          {
            label: 'Name',
            field: 'userName',
            sort: 'asc',
            width: 120
          },
    
          {
            label: 'Location',
            field: 'userLocation',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Service Requested',
            field: "serviceReq",
            sort: 'asc',
            width: 450
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
          serviceReq:   Object.keys(order.serviceReq) + " " +"-"
          + (order.serviceReq.Restaurant ? JSON.stringify(order.serviceReq.Restaurant).replace('{', ' ').replace('}', ' ').replace(/,/g, "-").replace(/"/g, " ").replace(/true/g, "Yes").replace(/false/g, "No"): '')
          +  (order.serviceReq.Office ? JSON.stringify(order.serviceReq.Office).replace('{', ' ').replace('}', ' ').replace(/,/g, "-").replace(/"/g, " ").replace(/true/g, "Yes").replace(/false/g, "No"): '')
          +  (order.serviceReq.Medical ? JSON.stringify(order.serviceReq.Medical).replace('{', ' ').replace('}', ' ').replace(/,/g, "-").replace(/"/g, " ").replace(/true/g, "Yes").replace(/false/g, "No"): '')
          +  (order.serviceReq.Athletics ? JSON.stringify(order.serviceReq.Athletics).replace('{', ' ').replace('}', ' ').replace(/,/g, "-").replace(/"/g, " ").replace(/true/g, "Yes").replace(/false/g, "No"): '')
          +  (order.serviceReq.Services ? JSON.stringify(order.serviceReq.Services).replace('{', ' ').replace('}', ' ').replace(/,/g, "-").replace(/"/g, " ").replace(/true/g, "Yes").replace(/false/g, "No"): '')
          +  (order.serviceReq.Grocery ? JSON.stringify(order.serviceReq.Grocery).replace('{', ' ').replace('}', ' ').replace(/,/g, "-").replace(/"/g, " ").replace(/true/g, "Yes").replace(/false/g, "No"): ''),
         
        })
        )  : []
      
       
      
      
      };





    return(

        props.signedIn ? 
        <div style={{backgroundColor:'white', color:'#009FE4' , textShadow:'.4px .4px 1px black'}}>

          <h3 style={{fontSize:'1.9rem', paddingTop:'3%', color:'#444343', userSelect:'none', marginBottom: '1%', paddingBottom: '1%', borderBottom: 'solid 1px white', backgroundColor: 'white'}}>

            {props.isAdmin === false  ? 
            localStorage.getItem('firstname') + `'s` + " " + "Orders"
            : 'All Orders'}</h3>
          <Container>
            {props.isAdmin === false ?
          <div style={{marginTop: '5%'}}>

            {props.signedIn ? 
            <MDBBtn style={createButton}
            onClick={(e:any) => {
              showThatOrder(e);
          }} 
            >Create an Order!</MDBBtn>
            : <p>What are you doing here...?</p> }
          </div>
          :null
        }
          <CreateOrder updateToken={props.updateToken} setShowOrder={setShowOrder} showOrder ={showOrder} fetchOrders={fetchOrders}/>
          
        {props.isAdmin ?
          <MDBDataTable  style={{color: '', textShadow: ''}}
            scrollY
            maxHeight="500px"
            striped
            bordered
            small
            data={data} />
        :<MDBDataTable  style={{color: '', textShadow: ''}}
          scrollY
          maxHeight="500px"
          striped
          bordered
          small
          data={data2} /> }
          </Container>

        </div>
        : <p style={{color:'#009FE4' , textShadow:'.4px .4px 1px black', fontSize:'4rem', marginTop: '3%'}}>?</p>
    )
}

export default Orders;