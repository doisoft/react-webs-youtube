import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/videos/VideoCard'
import { webdText } from '../data/webd'

const Webd = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 100)
    }, [])

    const webdPageClass = loading ? 'isLoading' : 'isLoaded'

    return (
        <Main title='웹디자인' description='웹디자인 페이지입니다.'>
            <section id='webdPage' className={webdPageClass}>
                <h2>😄 웹디자인기능사 한번에 따자!</h2>
                <div className='video__inner'>
                  <VideoCard videos={webdText}/>
                </div>
            </section>
        </Main>
    )
}

export default Webd
