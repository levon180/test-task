import PropTypes from "prop-types";

const IconButton = ({ icon, onClick }) => {
  return (
    <button onClick={onClick} className="opacity-100 hover:opacity-70 transition-all">
      <span className={`text-brand-gray icon-${icon}`}/>
    </button>
  )
}

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.string.isRequired,
}

export default IconButton