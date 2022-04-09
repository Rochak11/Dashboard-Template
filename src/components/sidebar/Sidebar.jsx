import React from 'react'
import "./sidebar.scss"
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import BookIcon from '@mui/icons-material/Book';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';





export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='top'><span className='logo'>RochakDev</span></div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>Home</p>
          <li>
          <DashboardCustomizeIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className='title'>List</p>
          <li>
            <AccountCircleIcon className='icon' />
            <span>Users</span>
          </li>
          <li>
            <ProductionQuantityLimitsIcon className='icon' />
            <span>Products</span>
          </li>
          <li>
            <BookmarkBorderIcon className='icon' />
            <span>Orders</span>
          </li>
          <p className='title'>Link</p>
          <li>
            <QueryStatsIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveIcon className='icon' />
            <span>Notification</span>
          </li>
          <p className='title'>Service</p>
          <li>
            <BookIcon className='icon' />
            <span>Logs</span>
          </li>
          <p className='title'>User</p>
          <li>
            <AccountBoxIcon  className='icon'/>
            <span>Profile</span>
          </li>
          <li>
            <SettingsIcon  className='icon'/>
            <span>Settings</span>
          </li>
          <li>
            <LogoutIcon  className='icon'/>
            <span>LogOut</span>
          </li>

        </ul>
      </div>
      <div className='bottom'>
        <div className="colorOption"></div>
      <div className="colorOption"></div>
      <div className="colorOption"></div>
      </div>
      </div>
  )
}
