import React from 'react'
import classes from './sidebar.module.css'
import { IoMdHome } from "react-icons/io";
import { LuUsers2 } from "react-icons/lu";

const Sidebar = () => {
  return (
    <div className={classes.sidebarContainer}>
        <div className={classes.tab}>
            <LuUsers2 />
            <p>Users</p>
        </div>
        <div className={classes.tab}>
            <LuUsers2 />
            <p>Users</p>
        </div>
        
        
    </div>
  )
}

export default Sidebar