import React from "react";
import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import PublicIcon from '@mui/icons-material/Public';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
        <SearchIcon className="icon"/>
          <input placeholder="Search" type="search"/>
        </div>
        <div className="items">
          <div className="itemlist">
          <PublicIcon className="icon"/> English
          </div>
          <div className="itemlist">
          <NotificationsIcon className="icon"/>
          <div className="counter">1</div> 
          </div>
          <div className="itemlist">
          <NotificationsIcon className="icon"/>
          <div className="counter">2</div> 
          </div>
          <div className="itemlist">
          <MessageIcon className="icon"/> 
          </div>
          <div className="itemlist">
          <MenuOpenIcon className="icon"/>
          </div>
          <div className="itemlist">
         Image
          </div>
        </div>
      </div>
    </div>
  );
}
