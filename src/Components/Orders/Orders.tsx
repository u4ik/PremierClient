import React, { useEffect, useState } from 'react'
import { Container, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { MDBDataTable, MDBBtn } from 'mdbreact';
import LoadingGif from '../../assets/premier-icon.png'
import DeleteArrow from '../../assets/deletearrow.svg'
import LogoIcon from '../../assets/Premier-Commercial-Services-icon.svg'
import { Spring, animated } from 'react-spring/renderprops'
import APIURL from '../../helpers/environment';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import CreateOrder from '../Orders/CreateOrder';
import './Orders.css'
import Edit from '../../assets/testimonialPage/edit.svg'
import Delete from '../../assets/testimonialPage/delete.svg'
import DeleteOrder from '../Orders/DeleteOrder'

interface orderProps {
  updateToken: string
  signedIn: any
  setSignedIn: any
  isAdmin: any
}

const Orders: React.FunctionComponent<orderProps> = (props: orderProps) => {

  const [showOrder, setShowOrder] = useState<boolean>(false);
  const [orderId, setOrderId] = useState<any>()
  const [userOrders, setUserOrders] = useState<any>([])
  const [showOrderUpdateToast, setShowOrderUpdateToast] = useState(true)
  const [showOrderDeleteToast, setOrderDeleteToast] = useState(true)
  const [showDelete, setShowDelete] = useState<boolean>(false)
  const [userName, setUserName] = useState('')
  const showThatOrder = (e: any) => {
    e.preventDefault();
    setShowOrder(!showOrder)
  }

  const createButton = {
    fontSize: '1.6rem',
    color: '#009FE4',
    textShadow: '1px 1px 1px black'
  }

  const deleteArrowStyle: React.CSSProperties = {
    width: '2vw',
    filter: 'drop-shadow(.1px .1px .2px black)',
    opacity: .7,
    cursor: 'pointer',
    textAlign: 'center'
  }

  const fetchOrders = () => {
    let token = localStorage.getItem('token')
    fetch(`${APIURL}/orders/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token!
      }
    }).then(res => res.json())
      .then(orderData => {
        // console.log(orderData);

        if (orderData.YourOrders !== undefined) {
          setUserOrders(orderData.YourOrders);
        } else {
          setUserOrders(orderData.AllOrders)
        }

        // console.log(userOrders)
      }).catch(err => console.log(err))
  }


  const updateOrder = (e: any, userId: number) => {
    let token = localStorage.getItem('token')
    const reqBody = {
      isComplete: e.target.value,
      userId: userId

    }

    fetch(`${APIURL}/orders/edit/` + orderId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token!
      },
      body: JSON.stringify(reqBody)
    }).then(res => res.json())
      .then(response => {
        console.log(response.data)
        // if (response.data !== undefined) {
          setShowOrderUpdateToast(false)
          timeoutOrderNotification();
        // }
        fetchOrders();

      })
  }

  const handleChange = (e: any, userId: number) => {
    // setServiceComplete(e.target.value);
    // console.log(e.target.value)
    updateOrder(e, userId);
    fetchOrders();
  }

  useEffect(() => {
    // window.scrollTo(0, 0);
    if (userOrders && userOrders.length === 0) {

      fetchOrders();
    }

  })

  const updateOrderUpdateNotification = () => {
    return (
      <div className="p-3 my-2 rounded" style={{ position: 'fixed', marginLeft: '49%', marginRight: '49%', marginBottom:'', bottom:'60%',display: 'flex', flexDirection: 'row', justifyContent: 'center', zIndex: 999 }}>

        <Toast style={{ width: '200px', position: 'fixed', marginLeft: '', marginRight: '', marginTop: '',marginBottom:'', zIndex: 999, background: 'rgba(10, 10, 10, .1)', borderRadius: '5px' }}>
          <ToastHeader style={{ color: 'black', opacity: '.5' }}>
            Update: {userName}'s Order'
          </ToastHeader>
          <ToastBody>
            Order Updated!
            </ToastBody>
        </Toast>

      </div>
    )
  }

  const updateOrderDeleteNotification = () => {
    return (
      <div className="p-3 my-2 rounded" style={{  bottom:'60%',position: 'fixed', marginLeft: '49%', marginRight: '49%', display: 'flex', flexDirection: 'row', justifyContent: 'center', zIndex: 999 }}>

        <Toast style={{ width: '200px', position: 'fixed', marginLeft: '', marginRight: '', marginTop: '', zIndex: 999, background: 'rgba(10, 10, 10, .1)', borderRadius: '5px' }}>
          <ToastHeader style={{ color: 'black', opacity: '.5' }}>
            Delete: {userName}'s Order'
          </ToastHeader>
          <ToastBody>
            Order Deleted!
            </ToastBody>
        </Toast>

      </div>
    )
  }

  const timeoutOrderNotification = () => {
    setTimeout(function () { setShowOrderUpdateToast(true); setOrderDeleteToast(true) }, 1000);
  }




  let data = {

    columns: [
      {
        label: 'Order #',
        field: 'id',
        sort: 'asc',
        width: 70
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
        width: 430
      },
      {
        label: 'Requested Date',
        field: 'reqDateTime',
        sort: 'asc',
        width: 130
      },
      {
        label: 'Complete',
        field: 'isComplete',
        sort: 'asc',
        width: 120

      },
      {
        label: 'X',
        field: 'deleteOrder',
        sort: 'asc',
        width: 90
      }
    ],

    rows:



      userOrders ? userOrders.map((order: any) => ({
        ...order,
        deleteOrder: <span style={deleteArrowStyle} onClick={() => {
          setOrderId(order.id)
          setUserName(order.userName);
          setShowDelete(true);
          setOrderDeleteToast(true)
        }}>❌</span>,
        serviceReq: Object.keys(order.serviceReq) + " " + "-"
          + (order.serviceReq.Restaurant ? JSON.stringify(order.serviceReq.Restaurant).replace('{', ' ').replace('}', ' ').replace(/,/g, "-").replace(/"/g, " ").replace(/true/g, "Yes").replace(/false/g, "No") : '')
          + (order.serviceReq.Office ? JSON.stringify(order.serviceReq.Office).replace('{', ' ').replace('}', ' ').replace(/,/g, "-").replace(/"/g, " ").replace(/true/g, "Yes").replace(/false/g, "No") : '')
          + (order.serviceReq.Medical ? JSON.stringify(order.serviceReq.Medical).replace('{', ' ').replace('}', ' ').replace(/,/g, "-").replace(/"/g, " ").replace(/true/g, "Yes").replace(/false/g, "No") : '')
          + (order.serviceReq.Athletics ? JSON.stringify(order.serviceReq.Athletics).replace('{', ' ').replace('}', ' ').replace(/,/g, "-").replace(/"/g, " ").replace(/true/g, "Yes").replace(/false/g, "No") : '')
          + (order.serviceReq.Services ? JSON.stringify(order.serviceReq.Services).replace('{', ' ').replace('}', ' ').replace(/,/g, "-").replace(/"/g, " ").replace(/true/g, "Yes").replace(/false/g, "No") : '')
          + (order.serviceReq.Grocery ? JSON.stringify(order.serviceReq.Grocery).replace('{', ' ').replace('}', ' ').replace(/,/g, "-").replace(/"/g, " ").replace(/true/g, "Yes").replace(/false/g, "No") : ''),
        isComplete: <select style={{ outline: 'none', border: 'none', backgroundColor: 'transparent' }} value={order.isComplete} name="name" id="" onClick={() => {
          // console.log(order.id);
          setUserName(order.userName);
          setShowOrderUpdateToast(true);
          setOrderId(order.id);



        }} onChange={(e) => {
          handleChange(e, order.userId);
          setShowOrderUpdateToast(false);
        }}>
          <option value={order.isComplete === 'Yes' ? 'Yes' : 'No'}>{order.isComplete === 'Yes' ? 'Yes' : 'No'} </option>
          <option value={order.isComplete === 'Yes' ? 'No' : 'Yes'}>{order.isComplete === 'Yes' ? 'No' : 'Yes'}</option>


          {/* <option value='yes'>yes</option>
                 <option value='no'>no</option> */}
        </select>
      })
      ) : []




  };


  let data2 = {

    columns: [
      {
        label: 'Order #',
        field: 'id',
        sort: 'asc',
        width: 70
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
        width: 120
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
        serviceReq: Object.keys(order.serviceReq) + " " + "-"
          + (order.serviceReq.Restaurant ? JSON.stringify(order.serviceReq.Restaurant).replace('{', ' ').replace('}', ' ').replace(/,/g, "-").replace(/"/g, " ").replace(/true/g, "Yes").replace(/false/g, "No") : '')
          + (order.serviceReq.Office ? JSON.stringify(order.serviceReq.Office).replace('{', ' ').replace('}', ' ').replace(/,/g, "-").replace(/"/g, " ").replace(/true/g, "Yes").replace(/false/g, "No") : '')
          + (order.serviceReq.Medical ? JSON.stringify(order.serviceReq.Medical).replace('{', ' ').replace('}', ' ').replace(/,/g, "-").replace(/"/g, " ").replace(/true/g, "Yes").replace(/false/g, "No") : '')
          + (order.serviceReq.Athletics ? JSON.stringify(order.serviceReq.Athletics).replace('{', ' ').replace('}', ' ').replace(/,/g, "-").replace(/"/g, " ").replace(/true/g, "Yes").replace(/false/g, "No") : '')
          + (order.serviceReq.Services ? JSON.stringify(order.serviceReq.Services).replace('{', ' ').replace('}', ' ').replace(/,/g, "-").replace(/"/g, " ").replace(/true/g, "Yes").replace(/false/g, "No") : '')
          + (order.serviceReq.Grocery ? JSON.stringify(order.serviceReq.Grocery).replace('{', ' ').replace('}', ' ').replace(/,/g, "-").replace(/"/g, " ").replace(/true/g, "Yes").replace(/false/g, "No") : ''),

      })
      ) : []




  };





  return (

    props.signedIn ?
      <div style={{ backgroundColor: 'white', color: '#009FE4', textShadow: '.4px .4px 1px black', minHeight: '89vh' }}>

        <Spring
          config={{ duration: 600 }}
          native
          from={{ o: 0, marginT: '' }}
          to={{ o: 1, marginT: '' }}>
          {({ o, marginT }) => (
            <animated.div style={{ opacity: o, marginTop: marginT }}>
              <img src={LogoIcon} style={{ width: '10vh', marginBottom: '.5rem', marginTop: '7%', filter: 'drop-shadow(2px 2px 1px black)' }}></img>
            </animated.div>
          )}
        </Spring>
        {/* All Orders/All Users Text */}
        <Spring
          config={{ duration: 600, delay: 400 }}
          native
          from={{ o: 0, marginT: '' }}
          to={{ o: 1, marginT: '' }}>
          {({ o, marginT }) => (
            <animated.div style={{ opacity: o, marginTop: marginT }}>
              <h3 style={{ fontSize: '2.2rem', paddingTop: '3%', textShadow: '0.5px 0.5px 0.5px black', color: '#177BBD', userSelect: 'none', marginBottom: '1%', paddingBottom: '1%', borderBottom: 'solid 1px white', backgroundColor: 'white' }}>
                {props.isAdmin === false ?
                  localStorage.getItem('firstname') + `'s` + " " + "Orders"
                  : 'All Orders'}</h3>
            </animated.div>
          )}
        </Spring>
        {/* User Updated Notification */}
        {!showOrderUpdateToast ?
          <Spring
            config={{ duration: 100 }}
            native
            from={{ o: 0, marginT: '' }}
            to={{ o: 1, marginT: '' }}>
            {({ o, marginT }) => (
              <animated.div style={{ opacity: o, marginTop: marginT, }}>
                {updateOrderUpdateNotification()}
              </animated.div>
            )}
          </Spring>
          :
          <Spring
            config={{ duration: 100 }}
            native
            from={{ o: 1, marginT: '' }}
            to={{ o: 0, marginT: '' }}>
            {({ o, marginT }) => (
              <animated.div style={{ opacity: o, marginTop: marginT, }}>
                {updateOrderUpdateNotification()}
              </animated.div>
            )}
          </Spring>}
        {/* Deleted Notification */}
        {!showOrderDeleteToast ?
          <Spring
            config={{ duration: 100 }}
            native
            from={{ o: 0, marginT: '' }}
            to={{ o: 1, marginT: '' }}>
            {({ o, marginT }) => (
              <animated.div style={{ opacity: o, marginTop: marginT, }}>
                {updateOrderDeleteNotification()}
              </animated.div>
            )}
          </Spring>
          :
          <Spring
            config={{ duration: 100 }}
            native
            from={{ o: 1, marginT: '' }}
            to={{ o: 0, marginT: '' }}>
            {({ o, marginT }) => (
              <animated.div style={{ opacity: o, marginTop: marginT, }}>
                {updateOrderDeleteNotification()}
              </animated.div>
            )}
          </Spring>}





        <Container>

          <Spring
            config={{ duration: 600, delay: 500 }}
            native
            from={{ o: 0, marginT: '' }}
            to={{ o: 1, marginT: '' }}
          >
            {({ o, marginT }) => (
              <animated.div style={{
                opacity: o,
                marginTop: marginT

              }}>
                {props.isAdmin === false ?
                  <div style={{ marginTop: '5%' }}>

                    {props.signedIn ?
                      <MDBBtn style={createButton}
                        onClick={(e: any) => {
                          showThatOrder(e);
                        }}
                      >Create an Order!</MDBBtn>
                      : <p>What are you doing here...?</p>}
                  </div>
                  : null
                }
              </animated.div>
            )}
          </Spring>
          <CreateOrder updateToken={props.updateToken} setShowOrder={setShowOrder} showOrder={showOrder} fetchOrders={fetchOrders} />
          <Spring
            config={{ duration: 600, delay: 600 }}
            native
            from={{ o: 0, marginT: '' }}
            to={{ o: 1, marginT: '' }}>
            {({ o, marginT }) => (
              <animated.div style={{ opacity: o, marginTop: marginT }}>
                {props.isAdmin ?
                  <MDBDataTable style={{ color: '', textShadow: '' }}
                    scrollY
                    maxHeight="500px"
                    striped
                    bordered
                    small
                    data={data} />
                  : <MDBDataTable style={{ color: '', textShadow: '' }}
                    scrollY
                    maxHeight="500px"
                    striped
                    bordered
                    small
                    data={data2} />}


              </animated.div>
            )}
          </Spring>

        </Container>
        <DeleteOrder userName={userName} timeoutOrderNotification={timeoutOrderNotification} setOrderDeleteToast={setOrderDeleteToast} updateToken={props.updateToken} setShowDelete={setShowDelete} showDelete={showDelete} orderId={orderId} fetchOrders={fetchOrders} />
      </div>
      : <div>
        <img style={{ width: '15vh', marginTop: '28vh', marginBottom: '50vh', filter: 'drop-shadow(2px 2px 2px black)' }} id='loadingImg' src={LoadingGif}></img>
      </div>

  )
}

export default Orders;