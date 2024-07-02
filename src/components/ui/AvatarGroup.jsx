import PropTypes from "prop-types";
import Avatar from "./Avatar.jsx";

const AvatarGroup = (
  {
    avatars = [],
    avatarDefaultProps = {}
  }
) => {


  return (
    <div className="flex">
      { avatars.map((avatar) => (
        <div key={avatar.id} className="-m-1" >
          <Avatar {...avatar} {...avatarDefaultProps} />
        </div>
      )) }
    </div>
  )
}

AvatarGroup.propTypes = {
  avatars: PropTypes.array.isRequired,
  avatarDefaultProps: PropTypes.object,
}

export default AvatarGroup