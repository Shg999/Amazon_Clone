import React, { useEffect, useRef, useState } from 'react'
import {logo} from '../../assets/index';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import { allItems } from '../../constants';
import HeaderBottom from './HeaderBottom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import {amazonReducer, userSignOut} from '../../redux/amazonSlice';
const Header = () => {
    const auth=getAuth();
    const dispatch=useDispatch();
    const [showAll, setShowAll] = useState(false)
    const products = useSelector((state)=> state.amazon.products);
    const userInfo = useSelector((state)=>state.amazon.userInfo);
    const ref=useRef();
    useEffect(()=>{
        document.body.addEventListener("click", (e)=>{
            if(e.target.contains(ref.current)){
                showAll && setShowAll(false);
            }
        });
    }, [ref,showAll])
    const handleLogout=()=>{
        console.log("done")
        signOut(auth).then(() => {
            console.log("Sign out Successfully");
            dispatch(userSignOut());
          }).catch((error) => {
            console.log(error);
          });
    }
     return (
    <div className='w-full sticky top-0 z-50'>
    <div className="w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4">
        {/* Image start here */}
       <Link to='/home'>
       <div className='headerHover'>
            <img className='w-24 mt-2' src= {logo} />
        </div>
       </Link>
        {/* Image end here */}
        {/* Deliver start here */}
        <div className='headerHover hidden mdl:inline-flex'>
            <LocationOnIcon />
            <p className='text-sm text-lightText font-light flex flex-col'>Deliver to <span className='text-sm font-semibold -mt-1 text-whiteText'>Omen</span></p>
        </div>
        {/* Deliver end here */}
        {/* Search start here */}
        <div className='h-10 rounded-md hidden lgl:flex flex flex-grow relative'>
            <span onClick={()=>setShowAll(!showAll)} className='w-14 h-full bg-gray-100 hover:bg-gray-300 border-2 cursor-pointer
               duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center
                 rounded-tl-md rounded-bl-md'>
                All <span></span><ArrowDropDownIcon />
                </span>
                {
                    showAll &&(
                        <div>
                            <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll
                            overflow-x-hidden bg-white border-[1px] border-amazon_blue
                            text-black p-2 flex-col gap-1 z-50'>
                                {/* <li>All Departments</li> */}
                                {
                                    allItems.map((item) =>(
                                        <li className='text-sm tracking-wide font-titleFont border-b-[1px]
                                         border-b-transparent hover: border-b-amazon_blue cursor-pointer
                                         duration-200 '
                                        key={item._id}>{item.title}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }
            <input className='h-full text-base text-amazon_blue flex-grow outline-none
                 border-none px-2' type="text"/>
                 <span className='w-10 h-full flex items-center justify-center bg-amazon_yellow
                   hover: bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md
                     rounded-br-md'>
                    <SearchIcon />
                 </span>
        </div>
        {/* Search end here */}
        {/* Signin start here */}
       <Link to="/signin">
       <div className='flex flex-col items-start justify-center headerHover'>
        {userInfo ? (
                <p className='text-sm  text-gray-100 font-medium'>{userInfo.username}</p>
            
        ) : (
            <p className='text-sm mdl:text-xs text-white mdl:text-lightText font-light'>Hello, sign in</p>
        )}
            {/* <p className='text-sm mdl:text-xs text-white mdl:text-lightText font-light'>Hello, sign in</p> */}
            <p className='text-sm font-semibold -mt-1 text-whiteText hidden mdl:inline-flex'>Accounts & Lists <span><ArrowDropDownIcon /></span></p>
        </div>
       </Link>
        {/* Signin end here */}
        {/* Orders start here */}
        <div className='flex hidden lgl:flex flex-col items-start justify-center headerHover'>
            <p className='text-xs text-lightText font-light'>Returns</p>
            <p className='text-sm font-semibold -mt-1 text-whiteText'>& Orders</p>
        </div>
        {/* Orders end here */}
        {/* Cart start here */}
       <Link to='/cart'>
       <div className='flex items-start justify-center headerHover relative'>
            <ShoppingCartIcon />
            <p className='text-xs font-semibold mt-3 text-whiteText'>
                Cart <span className='absolute text-xs -top-3 left-6 font-semibold
                p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex items-center 
                justify-center'>
                    {products.length >0 ?products.length:0}
                    </span></p>
        </div>
       </Link>
        {/* Cart end here */}
        {userInfo && (
            <div onClick={handleLogout} className='flex flex-col justify-center items-center headerHover relative'>
                <LogoutIcon/>
                <p className='hidden mdl:inline-flex text-xs font-semibold text-whiteText'>Log out</p>

            </div>
        )}
    </div>
    <HeaderBottom />
    </div>
  )
}

export default Header
