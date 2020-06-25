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
    textShadow: '.1rem .1rem .1rem black'
}

const Footer: React.FunctionComponent = () => {
  return (
    <div className=""  style={footerWrap}>
        <div color="faded" style={{
            display:'flex',
            flexDirection:'column'
        }}>
                    
        <p style={footerText}>Premier Commercial Services</p>
        <p style={footerText}>555-555-5555</p>
        <p style={footerText}>123 Fake St.</p>
        </div>
    </div>
  );
}

export default Footer;
