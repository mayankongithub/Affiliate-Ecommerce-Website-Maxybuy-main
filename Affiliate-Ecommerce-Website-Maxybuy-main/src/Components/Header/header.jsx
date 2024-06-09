import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { StoreContext } from '../Store/storeContext';
import AllImgList from '../../assets/all_img_list';

const Header = () => {
  const { setLoged, loged, menu, setMenuState, items } = useContext(StoreContext);

  // Retrieve user name from local storage if logged in
  const [name, setName] = useState();
  const userNameData = JSON.parse(localStorage.getItem('loged'));
  const userName = userNameData ? userNameData.name : null;
  const [hiddenProfile, setHiddenProfile] = useState(false);

  function showprofile() {
    console.log('showed')
    setHiddenProfile(e=> !e)

  }
  function logOut() {
    localStorage.removeItem('loged');
    setLoged(false); // Set loged state to false upon logout
  }

  if (userName) {
    setLoged(true)
  }

  return (
    <header className='w-full flex flex-col items-center select-none fixed top-3'>
      <div className=' headcolor navbar-box-shadow-css h-[75px] flex items-center justify-between rounded-2 border-solid border-gray-800 p-4 px-5'>
        <NavLink to='/' onClick={() => setMenuState('shop')} className='logo text-[#fff] cursor-pointer text-[30px] font-bold'>Cloth-it</NavLink>
        <ul className='flex w-2/5 justify-between text-[#fff] sm:visible invisible'>
          <li><NavLink to='/' onClick={() => setMenuState('shop')} href="#">Shop</NavLink> {menu === 'shop' ? <hr /> : ""}</li>
          <li><NavLink to='men' onClick={() => setMenuState('men')} href="#">Men</NavLink>  {menu === 'men' ? <hr /> : ""}</li>
          <li><NavLink to='women' onClick={() => setMenuState('women')} href="#">Women</NavLink> {menu === 'women' ? <hr /> : ""}</li>
          <li><NavLink to='kids' onClick={() => setMenuState('kids')} href="#">Kids</NavLink> {menu === 'kids' ? <hr /> : ""}</li>
          <li><NavLink to='about' onClick={() => setMenuState('about')} href="#">About</NavLink> {menu === 'about' ? <hr /> : ""}</li>
        </ul>

        <div className="flex gap-x-4 items-center justify-between h-10 mr-[30px] rounded-md sm:gap-14" >
          {userName ? <div className=' relative login h-[35px] text-[18px] w-[50px] border-solid border-[1px] bg-white cursor-pointer border-white text-black p-[25px] flex items-center justify-center rounded  ' onClick={(e) => showprofile()}>
            {userName}

            <div className={`${hiddenProfile ? 'visible' : 'hidden'} flex flex-col top-12 left-9 bg-white absolute rounded-md p-2`} >
              {/* <span className='cursor-pointer hover:bg-slate-400 rounded-sm px-1 transition-all'>Profile</span> */}
              <span className='cursor-pointer hover:bg-slate-400 rounded-sm px-1 transition-all' onClick={()=> logOut()}>Logout</span>
            </div>


          </div> : <NavLink onClick={() => setMenuState('login')} to='login' className='login h-[35px] text-[18px] w-[70px] border-solid border-[1px] border-white text-white p-[5px] flex items-center justify-center rounded-md hover:bg-[#223e6f]'>
            Login
          </NavLink>}


          <NavLink to='cartContainer' className="h-[30px] w-[40px] sm:h-[40px] sm:w-[50px] flex items-center justify-center bg-[#fff] rounded-md relative">
            <span className='absolute top-[-13px] left-4/12 p-1 border-solid border-[1px] border-white w-4 h-4 flex items-center justify-center bg-green-400 rounded-full'>{items.length}</span>
            <img className='w-4/6' src={AllImgList.cartIcon} alt="cart img" />
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
