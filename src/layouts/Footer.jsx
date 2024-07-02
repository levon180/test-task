import Input from "../components/ui/Input.jsx";
import {useMemo} from "react";
import IconButton from "../components/ui/IconButton.jsx";

const Footer = () => {

  const messagePrefix = useMemo(() => {

    return (
      <IconButton icon="emoji" onClick={console.log} />
    )
  }, [])

  const messageSuffix = useMemo(() => {

    return (
      <div className="flex gap-4">
        <IconButton icon="mail" onClick={console.log}/>
        <IconButton icon="send hover:text-primary" onClick={console.log} />
      </div>
    )
  }, [])

  return (
    <footer >
      <Input prefix={messagePrefix} suffix={messageSuffix} placeholder="Start typing..."  />
    </footer>
  )
}

export default Footer