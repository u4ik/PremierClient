import React from 'react';




// const logo: React.CSSProperties ={
//     height: '5.5vh',
//     cursor: 'pointer'
// }

const footerWrap: React.CSSProperties ={
    background: '#177BBD',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    color:'white'
    
}

const footerText: React.CSSProperties ={
    marginBottom: '1%',
    textShadow: '.1rem .1rem .1rem #024160'
}
const footerText1: React.CSSProperties ={
    marginBottom: '1%',
    textShadow: '.1rem .1rem .1rem #024160',
    fontSize:'1.2rem',
    color:'#E8D47B'
}

const Footer: React.FunctionComponent = () => {
  return (
    <div className=""  style={footerWrap}>
        <div color="faded" style={{
            display:'flex',
            flexDirection:'column'
        }}>
                    
        <p style={footerText1}>Premier Commercial Services</p>
        <p style={footerText}>Tel. 317.417.8208</p>
        <p style={footerText}>21113 N Banbury Rd</p>
        <p style={footerText}>Noblesville, IN 46062</p>
        </div>
    </div>
  );
}

export default Footer;
