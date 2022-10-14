import React, { useState} from 'react'
import './Customers.css'
import customers from '../../data/CustomersData'
import { BsStarFill } from 'react-icons/bs'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import comment from '../../assets/comment.svg'
import comma from '../../assets/quote-right.svg'
const Customers = () => {
    
    const [location, setLocation] = useState(0);
    const leftClick = () => {
    const right = document.getElementById('right')
    const left = document.getElementById('left')
    const circle = document.getElementById('circle')
        const reviews = document.querySelectorAll('.review')
        if (location > 0) {
            reviews[location].classList.add('hide')
            reviews[location].classList.remove('active')
            reviews[location - 1].classList.add('active')
            reviews[location - 1].classList.remove('hide')
            setLocation(location - 1)
        }
        circle.classList.remove('move')
        left.classList.remove('active')
        right.classList.add('active')
    }
    const rightClick = () => {
        const right = document.getElementById('right')
        const left = document.getElementById('left')
        const circle = document.getElementById('circle')
        const reviews = document.querySelectorAll('.review')
        if (location === 0) {
            reviews[location].classList.add('hide')
            reviews[location].classList.remove('active')
            reviews[location + 1].classList.add('active')
            reviews[location + 1].classList.remove('hide')
            setLocation(location + 1)
        }
        left.classList.add('active')
        right.classList.remove('active')
        circle.classList.add('move')
    }
  return (
      <div className="customers">
          <div className="heading">
              <h5>عملائنا</h5>
              <h2>ماذا يقول عنا <span className='special'>عملائنا</span></h2>
          </div>
          <div className="reviews">
              {customers.map((customer) => {
                  return (
                      <div className="review" key={customer.id}>
                          <div className="right-image">
                              <img className='customerImg' src={customer.image} alt="" />
                              <div>
                              <img src={comment} alt="" />
                              </div>
                          </div>
                          <div className="left-text">
                              <div>
                                <img src={comma} alt="" />
                                  <h3>رأي العميل</h3>
                                  <div className='opinion'>
                                <p>{customer.opinion} {customer.opinion}</p>
                                <p>{customer.opinion} {customer.opinion}</p>
                                <p>{customer.opinion} {customer.opinion}</p>
                                  </div>
                              </div>
                              <div>
                                  <div className="stars">
                                  <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill />
                                  </div>
                                  <div className="information">
                                      <h4>
                                          
                                  {customer.name}
                                    </h4>
                                  {customer.job}
                                  </div>
                              </div>

                          </div>
                    </div>
                )
            })}
          </div>
          <div className="arrows">
            <div id="circle" className=''></div>
              <HiOutlineArrowNarrowLeft id='right' className='active' onClick={rightClick}/>
              <HiOutlineArrowNarrowLeft id='left'  onClick={leftClick} />
          </div>
          <div className="info">
              <div className="text">
                  <div>
                  للاستفادة من جميع خدماتنا ولكي تبقى حلول سمة هي المرجع لجميع معملاتك المحاسبية
                  </div>
                  <div>
                  ولكي تصبح من ضمن عملائنا المميزون أنضم الينا وكن مثلهم
                  </div>
              </div>
              <a href="#" className="btn">اشترك الان مجانا</a>
          </div>
    </div>
  )
}

export default Customers