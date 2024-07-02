import PropTypes from "prop-types";

const Input = ({
  prefix,
  suffix,
  ...inputProps
               }) => {

  return (
    <div className="flex items-center">
      <div className={prefix ? 'px-3' : ''}>
        {prefix}
      </div>
      <div className="flex-1">
        <input {...inputProps} className="h-12 w-full text-brand-gray border-none outline-none"/>
      </div>
      <div className={suffix ? 'px-3' : ''}>
        {suffix}
      </div>
    </div>
  )
}

Input.propTypes = {
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  inputProps: PropTypes.object,
}

export default Input