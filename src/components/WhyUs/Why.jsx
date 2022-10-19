import React from 'react'
import './Why.css'
import reasons from '../../data/whyData'
import {FaMedal} from 'react-icons/fa'
import {BsHandThumbsUp} from 'react-icons/bs'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {AiOutlineDollar} from 'react-icons/ai'
const Why = () => {
  const icons = [<FaMedal />, <BsHandThumbsUp />, <AiOutlineClockCircle />, <AiOutlineDollar />]
  return (
    <div className="why">
      <div className="top">
      <div className="right">
        <div className="text">لماذا ستختارنا؟</div>
        <h2><span className='special'>سمة</span> سوف تقدم أكثر ما<br /> يقدم غيرها</h2>
      </div>
      <div className="left">
        {reasons.map((reason, index) => {
          const { id, title, describtion } = reason;
          return (
            <div className="reason" key={id}>
              <div className="icon">{icons.filter((icon, icIndex) => icIndex === index ? icon : "")} </div>
              <div className="text-top">
            <div className="title"><h3>{title}</h3></div>
              <p className="desc">{describtion}</p>
              </div>
          </div>
        )})}
      </div>
      </div>
      <div className="info">
        <div className="text">
          <div>
            سوف تجد جميع المميزات التي تبحث عنها في ادارة اعمالك المالية المتنوعة
          </div>
          <div>
            كل ما عليك هو الاشتراك في حلول سمة للانظمة المالية والادارية
          </div>
        </div>
        <a href="#" className='btn'>أشترك الان مجانا</a>
      </div>
    </div>
  )
}

export default Why