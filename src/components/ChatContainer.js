import { useState } from "react";

const ChatContainer = () => {
    return (
        <div className="chat-container">
          <ChatHeader/>

            <div>
              <button className="option">Matches</button>
              <button className="option">Chat</button>
            </div>

          <MatchesDisplay/>

          
        </div>


    )
}
export default ChatContainer
