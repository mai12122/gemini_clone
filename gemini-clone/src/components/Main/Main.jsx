import React, { useContext } from 'react'
import './Main.css'
import {assets} from '../../assets/assets'
import { Context } from '../../context/context'
const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon}alt="" />
      </div>
      <div className="main-container">

        {!showResult
        ?<>
         <div className="greet">
            <p><span>Hello,Mai</span></p>
            <p>How can I help you </p>
        </div>
        <div className="cards">
            <div className="card">
                <p>What is Javascript?</p>
                <img src={assets.compass_icon} alt="" />
            </div>
             <div className="card">
                <p>How to reduce stress? If I'm struggle with stress is it good or bad?</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Details infomation about Stray Kids</p>
                <img src={assets.message_icon} alt="" />
            </div>
             <div className="card">
                <p>The road to explore the world with different places</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>
        </>
        :<div className='result'>
            <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading
                ?<div className='loader'>
                    <hr />
                    <hr />
                    <hr />
                </div>:
                <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
            </div>
        </div>
        }

       

        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    {input?<img onClick = {() => onSent()}src={assets.send_icon} alt="" />:null}
                </div>
            </div>
           <p className="bottom-info">
            Gemini may display incorrect infomation
           </p>
        </div>
      </div>
    </div>
  )
}

export default Main
