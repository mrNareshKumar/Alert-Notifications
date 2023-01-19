// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="notification_container">
      <div className="notification_content">{children}</div>
      <GrFormClose className="close_icon" />
    </div>
  )
}

export default Notification
