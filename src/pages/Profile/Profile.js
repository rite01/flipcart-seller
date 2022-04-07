import React from 'react'
import Main from '../../components/Main'
import Sidenav from '../../components/Sidenav/Sidenav'
import "./profile.css"

export const Profile = () => {
  return (
    <div>
        <Main/>
        <Sidenav/>
        <div className='profile1'>
            <h1 className='profile2'>Profile</h1>
            <div className='container-profile'>
                <div>
                    <img className='image0' src="https://www.whatsappimages.in/wp-content/uploads/2020/06/Whatsapp-DP-Images-8-300x300.jpg" alt="" />
                </div>

                <div className='title0'>
                    <p>Name</p>
                    <h2>Ritesh Maru</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

