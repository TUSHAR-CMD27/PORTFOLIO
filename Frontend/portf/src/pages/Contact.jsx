import React, { useState } from 'react';
import './Contact.css';
import AnimatedGreenCollage from '../components/AnimatedGreenCollage'

const Contact = () => {
  

  return (
    <div className="contact-page fade-in">
      {/* Green Collage Component Background */}
     
      <div className="editor-container">
        
        {/* 1. Left side file explorer section */}
        <div className="panel explorer-panel">
          <div className="panel-title">EXPLORER</div>
          <div className="explorer-tree">
            <div className="folder">
              <span className="arrow">▼</span> PORTFOLIO
            </div>
            <div className="folder-contents">
              <div className="file active">
                <span className="icon-js">JS</span> contact.js
              </div>
              <div className="file">
                <span className="icon-css">#</span> style.css
              </div>
              <div className="file">
                <span className="icon-html">&lt;&gt;</span> index.html
              </div>
            </div>
          </div>
        </div>

        {/* 2. Middle actual code editor */}
        <div className="panel code-panel">

          <div className="editor-tab">
            <span className="icon-js">JS</span> contact.js
          <div className="exp-right-bg"> <AnimatedGreenCollage /></div> 
          </div>
          <div className="code-editor-area">
            <div className="line-numbers">
              {[...Array(14)].map((_, i) => <div key={i}>{i + 1}</div>)}
            </div>
            <div className="code-lines">
              <div className="line"><span className="kw">const  </span> <span className="var"> social Links</span> <span className="op">=</span> <span className="punct">{'{'}</span></div>
              
              <div className="line indent-1">
                <span className="key">linkedin</span><span className="punct">:</span> <a href="https://www.linkedin.com/in/tushar-gadhari-cmd/" target="_blank" rel="noreferrer" className="str">"tusharr-gadhari-cmd"</a><span className="punct">,</span>
              </div>
              
              <div className="line indent-1">
                <span className="key">github</span><span className="punct">:</span> <a href="https://github.com/TUSHAR-CMD27" target="_blank" rel="noreferrer" className="str">"github.com/TUSHAR-CMD27"</a><span className="punct">,</span>
              </div>
              
              <div className="line indent-1">
                <span className="key">email</span><span className="punct">:</span> <a href="mailto:tushargadhari3@gmail.com" className="str">"tushargadhari3@gmail.com"</a><span className="punct">,</span>
              </div>

              <div className="line indent-1">
                <span className="key">instagram</span><span className="punct">:</span> <a href="https://instagram.com/_.2shar.__" target="_blank" rel="noreferrer" className="str">"@_.2shar.__"</a>
              </div>
              
              <div className="line"><span className="punct">{'}'}</span><span className="op">;</span></div>
              <div className="line"><br/></div>
              <div className="line comment">// Drop a message to connect!</div>
              <div className="line"><span className="kw">export default </span> <span className="var">social Links</span><span className="op">;</span></div>
            </div>
          </div>
        </div>

        {/* 3. Right side chat agent */}
        <div className="panel chat-panel">
          <div className="panel-title">AGENT CHAT</div>
          <div className="chat-interface">
            <div className="chat-profile-section">
              <img 
                src="/motifs/tushar.png"
                alt="Profile" 
                className="agent-photo" 
              />
              <div className="agent-status">Online</div>
            </div>
            
            <div className="chat-history">
              <div className="chat-msg system">
                System: Connected to Tushar's Agent
              </div>
              <div className="chat-msg agent">
                Hi there! I'm Tushar's virtual assistant. Would you like to leave a message?
              </div>
            </div>

            <form className="chat-input-box" >
              <span className="prompt-arrow">&gt;</span>
              
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
