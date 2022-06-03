import React from 'react'

export const Home = () => {
  return (
    <div>
      <h3 style={{margin:"20PX"}}>iPhone 13 Pro</h3>
      <h1 style={{margin:"40PX"}}>Oh. So. Pro.</h1>
      <img src="https://www.apple.com/v/iphone-13-pro/f/images/overview/camera/intro/camera_system__rp945vhdfsiu_large.png" alt="" />
       <br />
       <br />
       <div style={{width: "70%",display: "flex", justifyContent : "space-around", margin:"auto"}}>
            <h2 style={{margin:"auto"}}>iPhone 13 Pro Max 6.7”</h2>
          <img src="https://www.apple.com/v/iphone-13-pro/f/images/overview/design/design_display_pro__d3dtminb414y_large.png" alt="" />
          <h2 style={{margin:"auto"}}>iPhone 13 Pro 6.1”</h2>
       </div>

       
       <div style={{backgroundColor:"white"}}>
       <h3 style={{margin:"40px"}}>Super Retina XDR display2 with ProMotion</h3>
         <img src="https://www.apple.com/v/iphone-13-pro/f/images/overview/design/water_resistant__ddhg6jxs53yq_large.jpg" alt="" />
       </div>
      </div>
  )
}
