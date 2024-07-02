import PropTypes from "prop-types";

const MyMessage = ({ message, isFirst = false }) => {

  return (
    <div className="inline-block relative">
      <div
        className={`text-white p-4 bg-primary max-w-[366px] float-right rounded-md ${isFirst ? 'rounded-tr-none' : ''}`}>
        {message}
      </div>
    </div>
  )
}

MyMessage.propTypes = {
  message: PropTypes.string,
  isFirst: PropTypes.bool,
}

export default MyMessage