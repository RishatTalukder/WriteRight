import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Header = () => {
  let {user} = useContext(AuthContext)
  return (
    <div>

        <Link to="/">Home</Link>
        <span> | </span>
        {
          user ? (
            <Link to="#">Logout</Link>
          ) : (
            <Link to="/login">Login</Link>
          )
        }

        {
          user ? (
            <div>
              <span>welcome, {user.username}</span>
            </div>
          ) : null
          }
    </div>
  )
}

export default Header