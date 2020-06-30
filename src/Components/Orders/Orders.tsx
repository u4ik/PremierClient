import React, {useEffect, useState} from 'react'

import {Col, Row, Container} from 'reactstrap'
import { MDBDataTable,MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

import './Orders.css'

interface orderProps  {
    updateToken: any
}

const Orders:React.FunctionComponent<orderProps> = (props:orderProps) => {

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
            setUserOrders(noteData.YourOrders);
            console.log(userOrders)
<<<<<<< HEAD
            
        })
=======
        }).catch(err => console.log(err))
>>>>>>> dev
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
            label: '#',
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
          serviceReq: Object.entries(order.serviceReq).toString()})
        )  : []};
    return(
        <div style={{backgroundColor:'#009FE4',color:'white' ,textShadow:'.4px .4px 1px black'}}>


        <h3 style={{fontSize:'1.7rem',paddingTop:'1%', textShadow:'1.5px 2px 1px #024160', color:'#E8C10D', userSelect:'none', paddingBottom: '1%', backgroundColor: '#177BBD', borderTop: 'solid 1px white', borderBottom: 'solid 1px white', marginBottom:'0'}}>Orders</h3>
<Container>


<MDBDataTable style={{color: '', textShadow: ''}}
      scrollY
      maxHeight="200px"
      striped
      bordered
      small
      data={data}
    />


</Container>

        </div>



    )



}

export default Orders;