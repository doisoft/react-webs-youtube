import React from 'react'
import { websiteText } from '../../data/website'
import { Link } from 'react-router-dom'

const Website = () => {
    return (
        <section id='website'>
            <h2>🫠 웹표준 사이트 만들기 기초 다지기</h2>
            <div className='video__inner'>
                {websiteText.map((web, key) => {
                    return (
                        <div className='video' key={key}>
                            <div className='video__thumb play__icon'>
                                <Link to={`/video/${web.videoId}`}>
                                    <img src={web.img} alt={web.title} />
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Website
