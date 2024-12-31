import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div style={{display: 'flex', backgroundColor: '#f5f7fa', paddingTop: '90px'}}>
        <span>Download Paytm App to Pay from anywhere</span>
        <img src='https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/downloadApple.svg' />
        <img src='https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/downloadGoogle.svg' />
        <div className='socialMedia'>
            <img src='https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/twitter.svg' />
            <img src='https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/instagram.svg' />
            <img src='https://pwebassets.paytm.com/commonwebassets/paytmweb/footer/images/facebook.svg' />
        </div>
    </div>
  )
}

export default Footer