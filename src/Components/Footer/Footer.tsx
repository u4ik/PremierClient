import React, {useState, useEffect } from 'react';

import Edit from '../../assets/edit/delete/editwhite.svg'
import APIURL from '../../helpers/environment';




const footerWrap: React.CSSProperties ={
    background: '#177BBD',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    color:'white',
    minHeight:'120px',
    paddingBottom:' 25px',
    paddingTop: '25px'
    
}

const footerText: React.CSSProperties ={
    marginBottom: '1%',
    textShadow: '.1rem .1rem .1rem #024160'
}
const footerText1: React.CSSProperties ={
    marginBottom: '1%',
    textShadow: '.1rem .1rem .1rem #024160',
    fontSize:'1.2rem',
    color:'#E8C10D'
}


interface FooterProps  {

    isAdmin: boolean
}


const Footer: React.FunctionComponent<FooterProps> = (props: FooterProps) => {

    const [siteId, setSiteId] = useState();
    const [footerTextTitle, setFooterTextTitle] = useState();
    const [footerTextPhone, setFooterTextPhone] = useState();
    const [footerTextAddressStreet, setFooterTextAddressStreet] = useState();
    const [footerTextAddressTown, setFooterTextAddressTown] = useState();

    const [editFooterTextTitle, setEditFooterTextTitle] = useState<string>('');
    const [editFooterTextPhone, setEditFooterTextPhone] = useState<string>('');
    const [editFooterTextAddressStreet, setEditFooterTextAddressStreet] = useState<string>('');
    const [editFooterTextAddressTown, setEditFooterTextAddressTown] = useState<string>('');

    const [editText1, setEditText1] = useState<boolean>();
    const [editText2, setEditText2] = useState<boolean>();
    const [editText3, setEditText3] = useState<boolean>();
    const [editText4, setEditText4] = useState<boolean>();

    const [editImg, setEditImg] = useState<string>('');
    const [editImg2, setEditImg2] = useState<any>();
    const [editImg3, setEditImg3] = useState<any>();
    const [editImg4, setEditImg4] = useState<any>();




    const editIcon = {
        width:'3%',
        marginTop:'3%',
        marginBottom:'3%'
    }


    const fetchSite = () => {
        fetch(`${APIURL}/site/all`,  {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
            }
        }).then(res => res.json())
        .then(site => {
             setSiteId(site.SiteInfo[0].id)
      
            setFooterTextTitle(site.SiteInfo[0].footerTextTitle)
            setFooterTextPhone(site.SiteInfo[0].footerTextPhone)
            setFooterTextAddressStreet(site.SiteInfo[0].footerTextAddressStreet)
            setFooterTextAddressTown(site.SiteInfo[0].footerTextAddressTown)
            setFooterTextAddressStreet(site.SiteInfo[0].footerTextAddressStreet)

            setEditFooterTextTitle(site.SiteInfo[0].footerTextTitle)
            setEditFooterTextPhone(site.SiteInfo[0].footerTextPhone)
            setEditFooterTextAddressStreet(site.SiteInfo[0].footerTextAddressStreet)
            setEditFooterTextAddressTown(site.SiteInfo[0].footerTextAddressTown)
            setEditFooterTextAddressStreet(site.SiteInfo[0].footerTextAddressStreet)



                
        })
    }

    const updateSite = () => {
        let token = localStorage.getItem('token')
        const reqBody = { 
            footerTextTitle: editFooterTextTitle,
            footerTextPhone: editFooterTextPhone,
            footerTextAddressStreet: editFooterTextAddressStreet,
            footerTextAddressTown: editFooterTextAddressTown
        }
        fetch(`${APIURL}/site/edit/` + siteId,  {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : token!
            },
            body: JSON.stringify(reqBody)
        }).then(res => res.json())
        .then(site => {
            fetchSite();
            
                setEditText1(false);
                setEditText2(false);
                setEditText3(false);
                setEditImg('');
                setEditImg2('');
                setEditImg3('');
            })
        }
    






    useEffect(() =>{

        fetchSite();

    },[])
    



  return (
    <div className=""  style={footerWrap}>
        <div color="faded" style={{
            display:'flex',
            flexDirection:'column'
        }}>
            {props.isAdmin ?
            <div>
                <div style={{minHeight:'25px'}} onClick={() => {
                    setEditText1(true);
                    setEditImg(Edit);
                }}>
                    
                    {editText1 ?
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}} 
                    onMouseLeave={() => {
                        setEditText1(false);
                        setEditImg('');
                    }}>
                        
                        <input defaultValue={footerTextTitle} onChange={(e) => {
                            setEditFooterTextTitle(e.target.value)
                        }}></input>
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                            <img style={editIcon} src={Edit} onClick={() => updateSite()} ></img>
                        </div>
                    </div>
                    :<p style={footerText1}>{footerTextTitle} </p> }                   
                </div>
                <div style={{minHeight:'25px'}} onClick={() => {
                    setEditText2(true);
                    setEditImg(Edit);
                }}>
                    
                    {editText2 ?
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}} 
                    onMouseLeave={() => {
                        setEditText2(false);
                        setEditImg('');
                    }}>
                        
                        <input defaultValue={footerTextPhone} onChange={(e) => {
                            setEditFooterTextPhone(e.target.value)
                        }}></input>
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                            <img style={editIcon} src={Edit} onClick={() => updateSite()} ></img>
                        </div>
                    </div>
                    :<p style={footerText}>{footerTextPhone} </p> }                   
                </div>
                <div style={{minHeight:'25px'}} onClick={() => {
                    setEditText3(true);
                    setEditImg(Edit);
                }}>
                    
                    {editText3 ?
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}} 
                    onMouseLeave={() => {
                        setEditText3(false);
                        setEditImg('');
                    }}>
                        
                        <input defaultValue={footerTextAddressStreet} onChange={(e) => {
                            setEditFooterTextAddressStreet(e.target.value)
                        }}></input>
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                            <img style={editIcon} src={Edit} onClick={() => updateSite()} ></img>
                        </div>
                    </div>
                    :<p style={footerText}>{footerTextAddressStreet} </p> }                   
                </div>
                <div style={{minHeight:'25px'}} onClick={() => {
                    setEditText4(true);
                    setEditImg(Edit);
                }}>
                    
                    {editText4 ?
                    <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}} 
                    onMouseLeave={() => {
                        setEditText4(false);
                        setEditImg('');
                    }}>
                        
                        <input defaultValue={footerTextAddressTown} onChange={(e) => {
                            setEditFooterTextAddressTown(e.target.value)
                        }}></input>
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                            <img style={editIcon} src={Edit} onClick={() => updateSite()} ></img>
                        </div>
                    </div>
                    :<p style={footerText}>{footerTextAddressTown} </p> }                   
                </div>
            </div>
            :
            <div>
            <p style={footerText1}>{footerTextTitle}</p>
            <p style={footerText}>{footerTextPhone}</p>
            <p style={footerText}>{footerTextAddressStreet}</p>
            <p style={footerText}>{footerTextAddressTown}</p>
        </div>}
        </div>
    </div>
  );
}

export default Footer;
