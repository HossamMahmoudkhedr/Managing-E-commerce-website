import React, { useEffect, useState } from 'react'
import './Navbar.css'
import Logo from '../../assets/Annotation 2022-10-04 163118.png'
const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  const [classi, setClassi] = useState('')
  const handleClick = () => {
    setMenuOpened(!menuOpened)
  }
  useEffect(() => {
    if (menuOpened) {
        setClassi('active')
      } else {
        setClassi('')
      }
  }, [menuOpened])
  return (
      <nav>
          <div className="right">
              {/* <div className="logo"><img src={Logo} alt="" /></div> */}
              <div className="logo">Logo</div>
          </div>
      <div onClick={handleClick} className={`menu ${classi}`}>
        <div className="first"></div>
        <div className="middle"></div>
        <div className="last"></div>
         </div>
        <div className={`left ${classi}`}>
              <ul className="links">
                  <li><a href="#" className='active'>الصفحة الرئيسية</a></li>
                  <li><a href="#">عن سمة</a></li>
                  <li><a href="#">الأسعار</a></li>
                  <li><a href="#">المدونة</a></li>
              </ul>
              <div className="reg">
                <a href="#">اتصل بنا</a>
                <a href="#" className='btn'>اشترك الان</a>
              </div>
          </div>
    </nav>
  )
}

export default Navbar