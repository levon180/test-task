import PropTypes from "prop-types";
import Avatar from "./Avatar.jsx";

const TeamMessage = ({ message, user = {}, isFirst = false }) => {

  return (
    <div className="relative flex gap-1 mt-2">
      <Avatar size={8} {...user}></Avatar>
      <div
        className={`text-brand-black p-4 bg-secondary max-w-[366px] rounded-md ${isFirst ? 'rounded-tr-none' : ''}`}>
        {message}
      </div>
    </div>
  )
}

TeamMessage.propTypes = {
  message: PropTypes.string,
  isFirst: PropTypes.bool,
  user: PropTypes.object,
}

export default TeamMessage