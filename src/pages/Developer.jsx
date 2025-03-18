import React from 'react'
import Main from '../components/section/Main'
import { developerText } from '../data/developer'
import { Link } from 'react-router-dom'

const Developer = () => {
    return (
        <Main title='추천 개발자' description='추천 개발자 페이지입니다.'>
            <section id='developerPage'>
                <div className='developer__inner'>
                    {developerText.map((dev, key) => {
                        return (
                            <div className='developer' key={key}>
                                <div className='developer__img play__icon'>
                                    <Link to={`/channel/${dev.channelAddress}`}>
                                        <img src={dev.img} alt={dev.name} />
                                    </Link>
                                </div>
                                <div className='developer__info'>
                                    <Link to={`/channel/${dev.channelAddress}`}>
                                        {dev.name}
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </Main>
    )
}

export default Developer
