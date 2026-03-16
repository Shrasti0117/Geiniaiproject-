import React, { useContext, useState } from 'react'
import'./Sidebar.css'
import { assets } from '/src/assets/assets.js';
import  {Context}  from '../../context/Context';


const Sidebar = () => {

  const [extented,setextented]=useState(false);
  const { onSent, prevprompts, setrecentprompt,newchat} = useContext(Context);

   const loadprompt =async(prompt)=>{
    setrecentprompt(prompt)
    await onSent(prompt)
   }
  return (
    <div className='sidebar'>
      <div className='top'>
        <img onClick={()=>setextented(prev=>!prev)} className ="menu"src={assets.menu_icon} alt="" />
        <div onClick={()=>newchat()} className='new-chat'>
           <img src={assets.plus_icon} alt="" />
          {extented?<p>New chat</p>:null} 
        </div>
        {extented?
        <div className='recent'>
            <p className="recent-title">Recent</p>
            {prevprompts.map((item,index)=>{
              return(
                <div onClick={()=>loadprompt(item)} className="recent-entry">
                <img src={assets.message_icon} alt="" />
               <p>{item.slice(0,18)} ...</p> 
              </div>
              )
            })}
           
        </div>
        :null}
      </div>
        <div className='bottom'>
           <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" />
            {extented?<p>Help</p>:null} 
           </div>
           <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
            {extented?<p>Activity</p>:null}
           </div>
           <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
           {extented? <p>Setting</p>:null}
           </div>
        </div>
    </div>
  )
}

export default Sidebar
