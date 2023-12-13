import React, { useState } from 'react';
// import Paltech from "../../public/documents.svg"
// import { ReactComponent as Logo } from './documents.svg';
import { Outlet, Link } from "react-router-dom";


// import require

const Sidebar = () => {
    const [sidebarOpen,setSidebarOpen]=useState(true)
    return (<>
        {sidebarOpen ? 
        <div className='flex flex-col bg-[#003B6B]   text-white '>
            <div className='flex p-4 gap-8'><img src ="/paltech.svg" alt="Paltech"/></div>
            <Link to="/"><div className='flex p-4 gap-8 hover:cursor-pointer'><img src ="/dashboard.svg" alt="Dashboard"/>Dashboard</div></Link>
            <Link to="/projects"><div className='flex p-4 gap-8 hover:cursor-pointer'><img src = "/projects.svg" alt="Projects" />Projects</div></Link>
            <Link to="/documents"><div className='flex p-4 gap-8 hover:cursor-pointer'><img src = "/documents.svg" alt="Documents"/>Documents</div></Link>
            {/* <div className='flex p-4 gap-8'><img src = "/tasks.svg" alt="Tasks"/>Tasks</div> */}
            <div className='flex p-4 gap-8 mt-4 hover:cursor-pointer'><img src = "/sidebar-close.svg" alt="toggle" onClick={()=>setSidebarOpen(false)} /></div>

        </div> :<div className='flex flex-col bg-[#003B6B]   text-white items-center'>
        <div className='flex p-4 gap-8 hover:cursor-pointer '><img src = "/paltech-logo.svg" alt="Paltech"/></div>
        <Link to="/"><div className='flex p-4 gap-8 hover:cursor-pointer'><img src = "/dashboard.svg" alt="Dashboard"/></div></Link>
        <Link to="/projects"><div className='flex p-4 gap-8 hover:cursor-pointer'><img src = "/projects.svg" alt="Projects" /></div></Link>
        <Link to="/documents"><div className='flex p-4 gap-8 hover:cursor-pointer'><img src = "/documents.svg" alt="Documents"/></div></Link>
        {/* <div className='flex p-4 gap-8'><img src = "/tasks.svg" alt="Tasks"/></div> */}
        <div className='flex p-4 gap-8 mt-4 hover:cursor-pointer '><img src = "/sidebar-open.svg" alt="toggle" className='rotate-180'onClick={()=>setSidebarOpen(true)} /></div>

    </div>}
    
      </>
        
    );
};

export default Sidebar;