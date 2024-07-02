import PropTypes from "prop-types";
import MyMessage from "./MyMessage.jsx";
import TeamMessage from "./TeamMessage.jsx";

const MessageList = ({ messages }) => {

  return (
    <div className="flex justify-center flex-col gap-1">
      { messages.map((messageDate) => (
        <div key={messageDate.id}>
          <p className="text-center brand-gray text-xs">
            { messageDate.date }
          </p>
          <div className="flex flex-col">
            { messageDate.messages.map((message, index) => (
              message.user.id === 5 ? <MyMessage {...message} key={index} /> : <TeamMessage {...message} key={index}  />
            )) }
          </div>
        </div>
      )) }
    </div>
  )
}

MessageList.propTypes = {
  messages: PropTypes.array
}

export default MessageList