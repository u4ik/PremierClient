import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Logo from '../../assets/Premier-Commercial-Services-icon.svg';

import APIURL from '../../helpers/environment';

interface Delete {
    updateToken: string
    setShowDelete: any
    showDelete: boolean
    userId: any
    getUsers: any

    userErrorText: string
    setUserErrorText: any

    userName: string
}

interface DeleteTypes {

    // setUserErrorText: any
}

const modalHeaderStyle: React.CSSProperties = {
    backgroundColor: '#177BBD',
    color: 'white',
    textShadow: '.1rem .1rem .1rem black',
    borderColor: 'transparent',
    borderRadius: '20px 20px 0px 0px',
}
const modalFooterStyle: React.CSSProperties = {
    backgroundColor: '#177BBD',
    color: 'white',
    textShadow: '.1rem .1rem .1rem black',
    borderColor: 'transparent',
    borderRadius: '0px 0px 20px 20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
}
const inputStyles: React.CSSProperties = {
    textAlign: 'center',
    borderRadius: '5px',
    outline: 'none',
    borderColor: 'transparent',
    alignItems: 'center',
}
const labelStyles: React.CSSProperties = {
    textShadow: '.1rem .1rem .1rem black',
    color: 'white',
    marginTop: '.5rem',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '1.5rem'
}
const DeleteUser: React.FunctionComponent<Delete> = (props: Delete) => {
    const toggle = () => {
        props.setShowDelete(!props.showDelete)
    };
    const deleteUser = () => {
        let reqBody = {
            id: localStorage.getItem('id')
        }
        fetch(`${APIURL}/user/delete/` + props.userId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.updateToken
            },
            body: JSON.stringify(reqBody)
        }).then(res => res.json())
            .then(response => {
                // console.log(response.Oops)
                props.setUserErrorText(response.Oops)
            })
            .then(() => {
                props.getUsers()
            })
            .catch(err => console.log(err.message))
    }
    return (
        <Modal isOpen={props.showDelete} toggle={toggle} >
            <ModalHeader toggle={toggle} style={modalHeaderStyle}>
                <img src={Logo} style={{ width: '20%' }} />
            </ModalHeader>
            <ModalBody style={{ backgroundColor: '#009FE4' }}>
                <p style={labelStyles}>Are you sure you want to delete this user?</p>
                <p style={labelStyles}>{props.userName}</p>
            </ModalBody>
            <ModalFooter style={modalFooterStyle}>
                <div id="sendButton" style={{ textAlign: 'center', marginTop: '3%' }}>
                    <Button color="danger" type="submit" id="subm" value="Submit" className="btn btn-primary" onClick={(e) => {
                        deleteUser();
                        toggle();
                    }} >Delete</Button>
                    <Button style={{ marginLeft: '' }} color="secondary" onClick={toggle}>Cancel</Button>
                </div>
            </ModalFooter>
        </Modal>
    )
}

export default DeleteUser