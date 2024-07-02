import AvatarGroup from "../components/ui/AvatarGroup.jsx";
import {users} from "../utility/utils.js";
import IconButton from "../components/ui/IconButton.jsx";

const Header = () => {

  return (
    <header className="h-18 flex justify-between pr-6 pl-3.5 items-center">
      <div>
        <AvatarGroup avatars={users} avatarDefaultProps={{
          size: "6.5"
        }} />
      </div>
      <div>
        <p className="text-sm text-center text-brand-black font-semibold">
          🦄 Team Unicorns
        </p>
        <p className="text-xs text-brand-gray">
          last seen 45 minutes ago
        </p>
      </div>
      <div>
        <IconButton icon="more" onClick={console.log} />
      </div>
    </header>
  )
}

export default Header