import React from 'react';

const Footer = () => {
  return (
    <div className='footer_header'>
    <div className='footer'>
      <div className='footer-item'>
        <div className='item-1'>Terms & Conditions</div>
        <div className='item-1'>Privacy Policy</div>
        <div className='item-1'>Contact Us</div>
      </div>
      <div className='footer-item'>
        <div>
          <img src="./Images/Facebook.jpeg" alt="Facebook" />
        </div>
        <div>
          <img src="../Images/Instagram.jpeg" alt="Instagram" />
        </div>
        <div>
          <img src="../Images/LinkedIn.jpeg" alt="LinkedIn" />

        </div>
      </div>

    </div>
    <div className='copyright'>
      <p>&copy; 2023 Online Job Portal</p>
    </div>
    </div>
  );
};

export default Footer;
