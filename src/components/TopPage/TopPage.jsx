import React from 'react'
import './TopPage.css'
import TopImage from '../../assets/5100169-1536x1536.jpg'
import { BsFillPlayFill } from 'react-icons/bs'
import {IoIosArrowBack} from 'react-icons/io'
const TopPage = () => {
    return (
        <div className="topPage">
            <div className="top">
                <div className="right">
                    <h2>حلول <span>سمة</span></h2>
                    <h2>ضمان لكل معاملاتك المالية</h2>
                    <p>
                        تجربة لا مثيل لها في ادارة معاملاتك لنشاطك التجاري، بخدمات متنوعة وبأنظمة أمان تحفظ لك سلامة بياناتك
                        <div>
                        نقدم خدمات متكاملة للعميل لتسهيل جميع معاملته المحاسبية.
                            نحن في شركة <span>سمة</span> نأخذ بيد المشترك للوصول بشكل مرن لإدارة مختلف العمليات المحاسبية
                        </div>
                    </p>
                    <div className="moreInfo">
                        <span><div><BsFillPlayFill /></div>كيف نعمل</span>
                        <IoIosArrowBack />
                        <a href="/">لمعرفة المزيد</a>
                    </div>
                </div>
                <div className="left">
                    <div className="image">
                        <img src={TopImage} alt="" />
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div><span>37</span> عميل سنوياً</div>
                <div><span>789</span>زائر لمدونتنا يومياً</div>
                <div><span>13</span>عملية دعم فني يومياً</div>
            </div>
        </div>
  )
}

export default TopPage