import './index.scss'
import { useEffect, useRef } from 'react'
// import LogoS from '../../../assets/images/logo-s.png'
// import gsap from 'gsap-trial'
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import RocketDrawing from './drawing'
// import Loader from 'react-loaders'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const outlineLogoRef1 = useRef()
  const solidLogoRef = useRef()
  const tl = useRef(gsap.timeline())

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    tl.current
      .to(bgRef.current, {
        duration: 2,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 30,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div>
      <div className="logo-container" ref={bgRef}>
        <RocketDrawing />
      </div>
      {/* <Loader type="pacman" /> */}
    </div>
  )
}
export default Logo
