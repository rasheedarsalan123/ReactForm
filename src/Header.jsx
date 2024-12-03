import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
<ul className=' flex justify-center items-center gap-5'>
    <li className=' line-none'> <Link to={'/form'}>React Form</Link> </li>
    <li><Link to={'/todo'}>Todo</Link></li> </ul>
    </div>
  )
}

export default Header