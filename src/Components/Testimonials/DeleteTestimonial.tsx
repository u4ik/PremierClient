import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Logo from '../../assets/Premier-Commercial-Services-icon.svg';

import APIURL from '../../helpers/environment';

interface Delete {
    updateToken: string
    setShowDelete: any
    showDelete: boolean
    testId: number
    getTestimonials: any
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
class DeleteTestimonial extends React.Component<Delete> {
    render() {
        const toggle = () => this.props.setShowDelete(!this.props.showDelete);
        const deleteTestimonial = () => {

            fetch(`${APIURL}/testimonial/delete/` + this.props.testId, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.props.updateToken
                }
            }).then(res => res.json())
                .then(response => console.log(response))
                .then(() => this.props.getTestimonials())
                .catch(err => console.log(err.message))
        }
        return (
            <Modal isOpen={this.props.showDelete} toggle={toggle} >
                <ModalHeader toggle={toggle} style={modalHeaderStyle}>
                    <img src={Logo} style={{ width: '20%' }} />
                </ModalHeader>
                <ModalBody style={{ backgroundColor: '#009FE4' }}>
                    <p style={labelStyles}>Are you sure you want to delete this testimonial?</p>
                </ModalBody>
                <ModalFooter style={modalFooterStyle}>
                    <div id="sendButton" style={{ textAlign: 'center', marginTop: '3%' }}>
                        <Button color="danger" type="submit" id="subm" value="Submit" className="btn btn-primary" onClick={(e) => {
                            toggle();
                            deleteTestimonial();
                        }} >Delete</Button>
                        <Button style={{ marginLeft: '' }} color="secondary" onClick={toggle}>Cancel</Button>
                    </div>
                </ModalFooter>
            </Modal>
        )
    }
}



export default DeleteTestimonial