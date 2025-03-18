import React from 'react'
import { gsapText } from '../../data/gsap'
import { Link } from 'react-router-dom'

const Gsap = () => {
    return (
        <section id='gsap'>
            <div className='video__inner'>
                {gsapText.map((video, key) => {
                    return (
                        <div className='video__thumb play__icon' key={key}>
                            <Link to={`/video/${video.videoId}`}>
                                <img src={video.img} alt={video.title} />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Gsap
