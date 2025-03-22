import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div style={{padding:'20px',display:'flex', justifyContent:'space-between', alignItems:"center", color:"white", position:'sticky', top:'0', zIndex:'1000'}}>
      <h3 className='gradient-text'>Life In A Gallery</h3>
      <div>
        <Link href="https://www.instagram.com/devanshabrol/">
          <img style={{width:"30px", borderRadius:"50%"}} src='/pictures/Profile_Pic.jpg'></img>
        </Link>
      </div>
    </div>
  )
}

export default Header