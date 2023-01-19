// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  const renderSuccessNotifications = () => (
    <Notification>
      <AiFillCheckCircle className="success icon" />
      <div className="msg_container">
        <h1 className="msg_heading success">Success</h1>
        <p className="msg_description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )

  const renderErrorNotifications = () => (
    <Notification>
      <RiErrorWarningFill className="error icon" />
      <div className="msg_container">
        <h1 className="msg_heading error">Error</h1>
        <p className="msg_description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const renderWarningNotifications = () => (
    <Notification>
      <MdWarning className="warning icon" />
      <div className="msg_container">
        <h1 className="msg_heading warning">Warning</h1>
        <p className="msg_description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const renderInfoNotifications = () => (
    <Notification>
      <MdInfo className="info icon" />
      <div className="msg_container">
        <h1 className="msg_heading info">Info</h1>
        <p className="msg_description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  )

  return (
    <div className="app_container">
      <div className="responsive_container">
        <h1 className="app_heading">Alert Notifications</h1>
        {renderSuccessNotifications()}
        {renderErrorNotifications()}
        {renderWarningNotifications()}
        {renderInfoNotifications()}
      </div>
    </div>
  )
}

export default AlertNotifications
