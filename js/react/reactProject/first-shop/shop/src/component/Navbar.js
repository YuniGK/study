import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../images/o-logo.jpg'
import React, { useEffect } from 'react'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const Navbar = ({authenticate, setAuthenticate}) => {
    const menuList = ['Women', 'Men', 'Baby', 'Kids', 'Home', 'Sale'];
    const navigae = useNavigate();

    const goToLogin = () => {
        navigae('/login');
    }

    const search = (e) => {
        if(e.key === 'Enter'){
            let keyword = e.target.value;

            navigae(`/?q=${keyword}`)
        }
    }

  return (
    <div className='nav-content'>
        {
            authenticate ?
            <div className='login-button' onClick={()=>setAuthenticate(false)}>
                <FontAwesomeIcon icon={faUser} />
                <h4>로그아웃</h4>
            </div>
            :
            <div className='login-button' onClick={goToLogin}>
                <FontAwesomeIcon icon={faUser} />
                <h4>로그인</h4>
            </div>            
        }        

        <div className='logo-content'>
            <Link to="/">
                <img src={logo} alt='logo' />
            </Link>
        </div>

        <div className='menu-content'>
            <ul className='menu'>
                {
                    menuList && 
                        menuList.map((menu, idx)=>(
                            <li key={idx}>{menu}</li>
                        ))
                }
            </ul>
            <div className='search-box'>
                <FontAwesomeIcon icon={faSearch} />
                <input type='text' onKeyDown={(e) => search(e)} />
            </div>
        </div>
    </div>
  )
}

export default Navbar