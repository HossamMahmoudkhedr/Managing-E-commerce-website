import React from 'react'
import './Page.css'
import data from '../../data/PageData'
const Page = () => {
    return (
        <div className="page">
            <div className="heading">
                <span>مدونتنا:</span>
                <h2 className="special">أكثر من مجرد مقالات علمية تختص</h2>
                <h2>بمجال المحاسبة والادارة المالية</h2>
            </div>
            <div className="pages">
                {
                    data.map((el) => {
                        const { id, title, desc, image } = el
                        return (
                            <div className="item" key={id}>
                                <div className="image">
                                <img src={image} alt="" />
                                </div>
                                <div className="text-p">
                                    <h4>{title}</h4>
                                    <p>{desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
    </div>
    )
}

export default Page