
import React from 'react'
import './NavBar.css'
import shopping_cart from '../Assets/shopping_cart.jpg'
import varaLogo from '../Assets/images/light_mode_logo.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
    const [menu,setMenu] = useState("Toys");
    const [showDropdown, setShowDropdown] = useState(false); // 👈 Add this line

    return(
        <div className = 'navbar'>
            <div>
            <Link to = '/'><img src = {varaLogo} alt = "" className='vara-icon' /></Link>    {/*similarly put a classname,img,css for the vara logo */}
            </div>
            <ul className = 'nav-menu'>
            {/* <li onClick={()=>{setMenu("ShopNow")}}><Link style={{textDecoration : 'none'}} to = '/shopnow'>Shop Now</Link>{menu==='ShopNow'?<hr></hr>:<></>}</li> */}
            <li
  className="shopnow-dropdown"
  onMouseEnter={() => setShowDropdown(true)}
  onMouseLeave={() => setShowDropdown(false)}
>
  <span className="dropdown-toggle" onClick={() => setMenu("ShopNow")}>
    Shop Now {menu === 'ShopNow' ? <hr /> : null}
  </span>
  {showDropdown && (
    <div className="dropdown">
      <Link to="/toys" onClick={() => setMenu("Toys")}>Toys</Link>
      <Link to="/accessories" onClick={() => setMenu("Accessories")}>Accessories</Link>
      <Link to="/gifts" onClick={() => setMenu("Gifts")}>Gifts</Link>
      <Link to="/decor" onClick={() => setMenu("Decor")}>Decor</Link>
    </div>
  )}
</li>
<li onClick={()=>{setMenu("About")}}><Link to = '/about'>About</Link>{menu==='About'?<hr></hr>:<></>}</li>
            {/* <li onClick={()=>{setMenu("Accessories")}}><Link to = '/accessories'>Accessories</Link>{menu==='Accessories'?<hr></hr>:<></>}</li>
            <li onClick={()=>{setMenu("Gifts")}}><Link to = '/gifts'>Gifts</Link>{menu==='Gifts'?<hr></hr>:<></>}</li>
            <li onClick={()=>{setMenu("Decor")}}><Link to = '/decor'>Decor</Link>{menu==='Decor'?<hr></hr>:<></>}</li>
            <li onClick={()=>{setMenu("About")}}><Link to = '/about'>About</Link>{menu==='About'?<hr></hr>:<></>}</li> */}
        </ul>
            <div className='nav-right'>
                <button className='login-btn'>Login</button>
                <div className='cart-wrapper'>
                <Link to = '/cart'><img src = {shopping_cart} alt = "" className='cart-icon' /> </Link>
                <div className='cart-count'>0</div>
                </div>
                
            </div>
        
        </div>
    )
}

export default NavBar