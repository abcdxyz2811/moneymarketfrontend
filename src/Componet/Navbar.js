import React from 'react';
import { Link } from 'react-router-dom';

import "../App.css"

import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import toastr from "toastr"
import 'toastr/build/toastr.css';
import money from "./img/money.gif"
import $ from 'jquery';
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
export default function Navbar() {
  // const apicall=async()=>{
  //    const data=await axios.get("https://www.nseindia.com/api/snapshot-capital-market-largedeal");
  //    console.log("darta..........",data);
  // }
  // React.useEffect(()=>{
  //   apicall()
  // },[])
  const token =localStorage.getItem("token")
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handalProfile=()=>{
   console.log("profil is show");
  }

  const onLogout=()=>{
    alert("Are you sure!!!");
    localStorage.setItem("token","")
    toastr.success("successfull logout")
  }

  // const addevent=()=>{debugger
  //   document.addEventListener("DOMContentLoaded", function(){
  //     // make it as accordion for smaller screens
  //     if (window.innerWidth < 992) {
      
  //       // close all inner dropdowns when parent is closed
  //       document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
  //         everydropdown.addEventListener('hidden.bs.dropdown', function () {
  //           // after dropdown is hidden, then find all submenus
  //             this.querySelectorAll('.submenu').forEach(function(everysubmenu){
  //               // hide every submenu as well
  //               everysubmenu.style.display = 'none';
  //             });
  //         })
  //       });
      
  //       document.querySelectorAll('.dropdown-menu a').forEach(function(element){
  //         element.addEventListener('click', function (e) {
  //             let nextEl = this.nextElementSibling;
  //             if(nextEl && nextEl.classList.contains('submenu')) {	
  //               // prevent opening link if link needs to open dropdown
  //               e.preventDefault();
  //               if(nextEl.style.display == 'block'){
  //                 nextEl.style.display = 'none';
  //               } else {
  //                 nextEl.style.display = 'block';
  //               }
      
  //             }
  //         });
  //       })
  //     }
  //     // end if innerWidth
  //     }); 
  // }

  // document.getElementById('menu-item').style.display='block';

  // function show_sidebar()
  // {
  // document.getElementById('menu-item').style.visibility="visible";
  // }
  
  // function hide_sidebar()
  // {
  // document.getElementById('menu-item').style.visibility="hidden";
  // }
  $(document).ready(function(){
    $('.dropdown-submenu Link.dropdown-item').on("click", function(e){
      $(this).next('ul').toggle();
      e.stopPropagation();
      e.preventDefault();
    });
  });

  React.useEffect(()=>{
    },[token])

    React.useEffect(()=>{
    
    },[]) 
   
  return <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src={money}/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/livemarket">Live Market</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/news">News</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">Services</Link>
        </li>
        <li className="nav-item dropdown">
       

          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Market
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/gainerandlower">Top ganier and Top losser</Link></li>
            <li><Link className="dropdown-item" to="/weeklydata">52 weekly higher and weekly lower</Link></li>
            <li><Link className="dropdown-item" to="/largedeal">large deals</Link></li>
              <li><Link className="dropdown-item" to="/mostactive">Most Active equities</Link></li>

            {/* <li><a class="dropdown-submenu" href="#" >Breakout stock &raquo; </a>
              <ul class="submenu dropdown-menu dropdown-menu1">
            <li><Link className="dropdown-item" to="/movingaverege">The moving average</Link></li>
            <li><Link className="dropdown-item" to="/pivot">Price pivot</Link></li>
              </ul>
            </li> */}

            <li class="dropdown-submenu">
            <a class="dropdown-item item-menu" href="#" >Breakout stock &raquo;<span class="caret"></span></a>
            <ul class="dropdown-menu menu-item" >
            <li><Link className="dropdown-item" to="/movingaverege">The moving average</Link></li>
            <li><Link className="dropdown-item" to="/pivot">Price pivot</Link></li>
            </ul>
          </li>
           
            

          </ul>
        </li> 
        <li className="nav-item">
          <Link className="nav-link" to="/contact">contact</Link>
        </li>
      </ul>
      <form className="d-flex ">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success me-3" type="submit">Search</button>

        {
          token&&token?
          (
            <>
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
             {/* ['Profile', 'Account', 'Dashboard', 'Logout']; */}
              {/* {settings.map((setting) => ( */}
                <MenuItem key={settings} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={handalProfile}>Profile</Typography>
                  <Typography textAlign="center">Account</Typography>
                  <Typography textAlign="center">Dashboard</Typography>
                  <Typography textAlign="center" onClick={()=>onLogout()}>Logout</Typography>
                </MenuItem>
              {/* ))} */}
            </Menu>
          </Box>
            </>
          ):(<>
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar src="/broken-image.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
             {/* ['Profile', 'Account', 'Dashboard', 'Logout']; */}
              {/* {settings.map((setting) => ( */}
                <MenuItem key={settings} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={handalProfile}><Link to="/login">Login</Link></Typography>
                  <Typography textAlign="center"><Link to="/signup">Signup</Link></Typography>
                </MenuItem>
              {/* ))} */}
            </Menu>
          </Box>
          </>)
        }
        
      </form>
    </div>
  </div>
</nav>
  </>;
}
