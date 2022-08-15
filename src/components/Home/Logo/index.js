import './index.scss'
import { useEffect, useRef } from 'react'
import Drawing from './drawing'

const Logo = () => {
  return (
    <div>
      <div className="logo-container">
        <Drawing />
      </div>
    </div>
  )
}
export default Logo
