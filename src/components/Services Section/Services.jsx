import React from 'react'
import './Services.css'
import services from '../../data/servicesData'
import {FaCalculator} from 'react-icons/fa'
import { FaStoreAlt } from 'react-icons/fa'
import { MdPointOfSale } from 'react-icons/md'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import {FaHome} from 'react-icons/fa'
import { GrLocation } from 'react-icons/gr'

const Services = () => {
    const icons = [<FaCalculator />, <FaStoreAlt />,  <MdPointOfSale />, <AiOutlineShoppingCart />, <FaHome />, <GrLocation />];
  return (
      <div className="services">
          <h3>الخدمات:</h3>
          <h2>أبرز الخدمات التي تقدمها <span className='special'>سمة</span></h2>
          <div className="serv-cont">
              {/* <img src={background} alt="" /> */}
              {services.map((serv, index) => {
                  return (
                    <div className="serv" key={serv.id}>
                        <div className="ic">
                              {icons.map((icon, icindex) => {
                                    if (icindex === index) {
                                        return icon;
                                  }
                                  return null
                            })}
                        </div>
                          <h4>{ serv.title}</h4>
                          <p>{serv.description}</p>
              </div>     
                  )
              })} 
          </div>
          <div className="info">
              <div className="text">
                  <div>
                  <span className='special'> الخدمات</span> التي نقدمها ستجعل العمل يجري بكل سهولة وانسيابية لتحقيق اهدفاك.
                  </div>
                  <div>
                         لرؤية جميع <span className="special">الخدمات</span> ومعرفة اسعارنا بشكل تفصيلي.
                  </div>
              </div>
              <a href="#" className="btn">اشترك الان مجانا</a>
          </div>
    </div>
  )
}

export default Services