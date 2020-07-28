import React from 'react';
import {Col, Container} from 'reactstrap'

import ServicesHome from '../Services/ServicesHome' ;
import TestimonialsHome from '../Testimonials/TestimonialsHome';
import HomeBackground from '../../assets/Home/home-background.jpg';

import LogoIcon from '../../assets/Premier-Commercial-Services-icon.svg'

import Edit from '../../assets/edit/delete/editwhite.svg'


import './Home.css'




// import LogoLayer from '../../assets/logoLayer.png'


type HomeProps = {
    signedIn: boolean
    isAdmin: boolean
   

}

type HomeTypes = {
    siteData:any
    siteId: any
    welcomeText:string
    welcomeTextOwner:string
    welcomeTextOwnerCompany:string,
    setWelcomeText:string
    setWelcomeTextOwner:string
    setWelcomeTextOwnerCompany:string,
    editImg : any,
    editImg2: any,
    editImg3: any,
    editText1: boolean
    editText2: boolean
    editText3: boolean

}



class Home extends React.Component <HomeProps, HomeTypes> {


        constructor(props: HomeProps) {
          super(props);
          this.state = {
              siteData: [],
              siteId: '',
              welcomeText: '',
              welcomeTextOwner: '',
              welcomeTextOwnerCompany: '',
              setWelcomeText: '',
              setWelcomeTextOwner: '',
              setWelcomeTextOwnerCompany: '',
              editImg: '',
              editImg2: '',
              editImg3: '',
              editText1: false,
              editText2: false,
              editText3: false
          }
      }
      componentDidMount = () =>{
        this.fetchSite();
    }
     fetchSite = () => {
        fetch('http://localhost:3000/site/all',  {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
            }
        }).then(res => res.json())
        .then(site => {

            if(site.SiteInfo[0].id !== undefined || null) {
                this.setState({
                    siteId: site.SiteInfo[0].id,
                    welcomeText: site.SiteInfo[0].welcomeText,
                    welcomeTextOwner: site.SiteInfo[0].welcomeTextOwner,
                    welcomeTextOwnerCompany: site.SiteInfo[0].welcomeTextOwnerCompany,
                    setWelcomeText: site.SiteInfo[0].welcomeText,
                    setWelcomeTextOwner: site.SiteInfo[0].welcomeTextOwner,
                    setWelcomeTextOwnerCompany: site.SiteInfo[0].welcomeTextOwnerCompany,
                })
            }
            //    console.log(this.state.siteData)
            //    console.log(site.SiteInfo)
            // console.log(site.SiteInfo[0].id)
            // console.log(site.SiteInfo[0].welcomeText)
            // console.log(site.SiteInfo[0].welcomeTextOwner)
            // console.log(site.SiteInfo[0].welcomeTextOwnerCompany)
        })
    }
    updateSite = () => {
        let token = localStorage.getItem('token')
        const reqBody = { 
            welcomeText: this.state.setWelcomeText,
            welcomeTextOwner: this.state.setWelcomeTextOwner,
            welcomeTextOwnerCompany: this.state.setWelcomeTextOwnerCompany,
        }
        fetch('http://localhost:3000/site/edit/' + this.state.siteId,  {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : token!
            },
            body: JSON.stringify(reqBody)
        }).then(res => res.json())
        .then(site => {
            this.fetchSite();
            this.setState({
                editText1: false,
                editText2: false,
                editText3: false,
                editImg: '',
                editImg2: '',
                editImg3: ''
            })
        })
    }
    render() {
      const editIcon = {
          width:'3%',
          marginTop:'3%',
          marginBottom:'3%'
      }
        return (
            <div style={{height:"auto", backgroundImage: `url(${HomeBackground})`, backgroundRepeat: '', backgroundPosition: 'center', backgroundSize: 'cover',  paddingBottom:'3%'}}>
                <div style={{ display: 'flex', flexDirection:'row', justifyContent:'center', paddingBottom:'3%',paddingTop:'3%'}} >
                    <div className="transparentContainer" style={{display:'flex',flexDirection: 'column',width:'70%',    background: 'rgba(26, 35, 64, 0.5)', borderRadius:'20px'}}>
                        <div className="welcomeText" style={{padding:'2%', textAlign:'center'}} >
                            <Container>
                            <Col className="welcomeText">
                            <img className="logoIcon" src={LogoIcon} style={{width: '10vh', marginBottom: '1rem', marginTop: '4%',  filter:'drop-shadow(2px 2px 1px black)'}}></img>
                            {this.props.signedIn ? 
                            <h4  className="headerText"  style={{fontSize:'1.9rem', textShadow:'2px 2px 1px black', color:'#E8C10D', userSelect:'none' }}>
                                Welcome&nbsp;{localStorage.getItem('firstname')}!</h4>
                            :    <h4 className="headerText"  style={{fontSize:'1.9rem', textShadow:'2px 2px 1px black', color:'#E8C10D', userSelect:'none' }}>
                            Welcome!</h4> }
                                <div style={{minHeight:'50px'}} onClick ={()=> {
                                if(this.props.isAdmin){
                                this.setState({
                                    editText1: true,
                                    editImg: Edit
                                })
                                }
                                }}>
                                {this.state.editText1 ?
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}
                                onMouseLeave={()=> {
                                    if(this.props.isAdmin){
                                        this.setState({
                                            editText1: false,
                                            editImg: ''
                                        })
                                }}}
                                >
                                <textarea  style={{ width:'100%', fontSize: '1.1rem',  lineHeight:'1.4rem', height:'142px' }} defaultValue={this.state.welcomeText}
                                onChange={(e) => {
                                    this.setState({
                                        setWelcomeText: e.target.value
                                    })
                                }}
                                ></textarea>
                                    <div style={{display:'flex',flexDirection:'row', justifyContent:'center'}}>
                                        <img style={editIcon} src= {this.state.editImg} 
                                        onClick={() => {
                                            this.updateSite();
                                        }}></img>
                                    </div>
                            </div>
                            :
                            <p className='welcomeText' style={{ fontSize: '1.1rem', textShadow:'2px 2px 1px black', lineHeight:'3rem', color: 'white'}}>
                                {this.state.welcomeText}
                            </p>
                            }
                            </div>
                            <div style={{minHeight:'25px'}}onClick ={()=> {
                                if(this.props.isAdmin){
                                this.setState({
                                    editText2: true,
                                    editImg2: Edit
                                })
                                }}}>
                         {this.state.editText2 ? 
                         <div   onMouseLeave={()=> {

                            if(this.props.isAdmin){
                                this.setState({
                                    editText2: false,
                                    editImg2: ''
                            
                                })
                        }}}>
                            <input defaultValue={this.state.welcomeTextOwner} className='ownerText' style={{ marginLeft:'10%', marginRight:'10%',fontSize: '1.2rem',  lineHeight:'1rem', }}
                                  onChange={(e) => {
                                    this.setState({
                                        setWelcomeTextOwner: e.target.value
                                    })
                                }}
                                
                            ></input>
                            <div style={{display:'flex',flexDirection:'row', justifyContent:'center'}}>
                                <img style={editIcon} src= {this.state.editImg2}
                                  onClick={() => {
                                    this.updateSite();
                                }}></img>
                            </div>


                         </div>
                         :<p className='ownerText' style={{ marginLeft:'10%', marginRight:'10%',fontSize: '1.2rem', textShadow:'2px 2px 1px black', lineHeight:'1rem', color: 'white'}}>
                            {this.state.welcomeTextOwner}</p>}
                            </div>
                            <div style={{minHeight:'50px'}}  onClick ={()=> {


                                if(this.props.isAdmin){
                                this.setState({
                                    editText3: true,
                                    editImg3: Edit

                                })
                                }}}>
                                {this.state.editText3 ? 
                                <div   onMouseLeave={()=> {

                                if(this.props.isAdmin){
                                this.setState({
                                    editText3: false,
                                    editImg3: ''

                                })
                                }}}>
                                    <input defaultValue={this.state.welcomeTextOwnerCompany} className='ownerText' style={{ marginLeft:'10%', marginRight:'10%',fontSize: '1.2rem',  lineHeight:'1rem', }}
                                        onChange={(e) => {
                                            this.setState({
                                                setWelcomeTextOwnerCompany: e.target.value
                                            })
                                        }}
                                    ></input>
                                    <div style={{display:'flex',flexDirection:'row', justifyContent:'center'}}>
                                        <img style={editIcon} src= {this.state.editImg3}
                                        onClick={() => {
                                            this.updateSite();
                                        }}></img>
                                    </div>

                                </div>
                                :<p className='ownerText' style={{ marginLeft:'10%', marginRight:'10%',fontSize: '0.9rem', textShadow:'2px 2px 1px black', lineHeight:'1rem', color: 'white'}}>
                                {this.state.welcomeTextOwnerCompany}</p>}
                                </div>
            
                    </Col>
                    </Container>
                        </div>
                    </div>
                </div>
                <div>
                </div>
                <div>
                    <ServicesHome/>
                </div>
                <div >
                    <TestimonialsHome/>
                </div>
            </div>
        );
    }
}

export default Home;