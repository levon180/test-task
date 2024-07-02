import Divider from "../components/ui/Divider.jsx";
import MessageList from "../components/ui/MessageList.jsx";
import {messagesData} from "../utility/utils.js";

const Body = () => {

  return (
    <>
      <Divider />
      <div className="flex-1 p-4">
        <MessageList messages={messagesData}></MessageList>
      </div>
      <Divider />
    </>
  )
}

export default Body