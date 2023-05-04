import React from 'react'
import {Link} from 'react-router-dom';

const HeaderLogo = ({link, logo}: {link: string, logo: string}) => {
  return (
    <div className="header-logo">
      
        <Link to={link}>{logo}</Link>
      
        {/* <a href='' className='logo'>Electrican</a> */}
    </div>
    )
}

export default HeaderLogo