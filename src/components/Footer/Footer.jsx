import React from 'react'
import './Footer.css'
import {ImMobile} from 'react-icons/im'
import { FiMail } from 'react-icons/fi'
import { GrFacebookOption } from 'react-icons/gr'
import {BsInstagram, BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
      <footer>
          <div className="footer">
          
              <div className="logo">Logo
          <div className="location">
              <span>السعودية - جدة</span>
              <span>جميع الحقوق محفوظة - 2022</span>
          </div>
              </div>
          <div className="firstGroup">
            <h3 className='special'>المجموعة الاولى</h3>
              <ul>
                  <li>المتاجر الالكترونية</li>
                  <li>أنظمة المحاسبة</li>
                  <li>إدارة المبيعات</li>
              </ul>
          </div>
          <div className="secondGroup">
              <h3 className='special'>المجموعة الثانية</h3>
              <ul>
                  <li>إدارة المبيعات</li>
                  <li>إدارة المشتريات</li>
                  <li>إدرة المخازن</li>
              </ul>
          </div>
          <div className="contact">
              <h3 className='special'>تواصل معنا</h3>
              <span>+996 56 688 2682 <ImMobile /></span>
              <span>enno123@gmail.com <FiMail /></span>
                  <div className="social">
                      <div className="twitter">
                          
                  <BsTwitter />
                      </div>
                      <div className="insta">
                          
                  <BsInstagram />
                      </div>
                      <div className="face">
                          
                  <GrFacebookOption />
                      </div>
              </div>
          </div>
          </div>
    </footer>
  )
}

export default Footer