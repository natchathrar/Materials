import React from 'react'
import Sidebar from './Sidenav'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div>
            <div className='row'>
                <div className='col-md-3'>
                    <Sidebar />
                </div>
                <div className='col-md-8'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
