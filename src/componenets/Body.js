import React from 'react'
import icon from '../Vector.svg'


export default function Body() {
  
  

 // ONLY THE USER INTERFACE IS COMPLETED 
  
  
  return (
    <div className='container-body'>
        <div className="header">
            <div className="left">
                <p className="course-name">Calculus I</p>
                <p className="prof-name">George Dragomir</p>
                <div className="date-time">
                    <img src={icon} alt="" />
                    <span>11:40am-12:55pm</span>
                    <span>Mo We</span> 
                </div>
            </div>
            
            <div className="right">
                <div className="prog-bar">
                    <div className="prog"></div>
                </div>
                <p className='seat-available'>(15/50 seats available)</p>
                <button className = "watch">Watch</button>
            </div>

        </div>

        <div className="comments">
                <p className = "comment">Yes, this class is extremely challenging and he does not make it "easy" on you. 
                    However, he is always available to explain things over and over, he holds many OH and is always willing to help.  <span>More</span> </p>
        </div>
    </div>
  )
}
