import PropTypes from "prop-types";

const Avatar = (
  {
    src = '',
    alt = '',
    size = 8
  }
) => {


  return (
    <div>
      <img src={src} className={`w-${size} h-${size} rounded-full`} alt={alt}/>
    </div>
  )
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.number.isRequired,
}

export default Avatar