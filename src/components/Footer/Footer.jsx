import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <h4>©Sreejith's KITCHEN</h4>
      <p><h5>This is a demo Website which is created by Mr.Sreejith.N S in which all the functionalities of a food cart is shown,<br></br>
        but the actual services are not provided.</h5>
        <h6>Feel free to contact the developer for any queries with below given social links.</h6></p>
        <div className="links">
          <a className='goto' href="https://www.linkedin.com/in/sreejith-n-s-54b9b325a"><i class="fa fa-linkedin-square"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className='goto' href="https://twitter.com/sreeinverse?t=k6rcuTMHccJ-lbboCYIAYg&s=35"><i class="fa fa-twitter"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className='goto' href="https://t.me/getintouchwithsree"><i class="fa fa-telegram"></i></a>
        </div>
    </div>
  )
}

export default Footer
