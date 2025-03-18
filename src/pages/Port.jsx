import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { portfolioText } from '../data/portfolio'
import VideoCard from '../components/videos/VideoCard'

const Port = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 100)
    }, [])

    const portPageClass = loading ? 'isLoading' : 'isLoaded'

    return (
        <Main title='포트폴리오' description='포트폴리오 페이지입니다..'>
            <section id='portPage' className={portPageClass}>
                <h2>🫣 나만의 포트폴리오 사이를 만들고 싶다면.</h2>
                <div className='video__inner'>
                  <VideoCard videos={portfolioText}/>
                </div>
            </section>
        </Main>
    )
}

export default Port
