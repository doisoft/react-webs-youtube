import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { useParams } from 'react-router-dom'
import VideoSearch from '../components/videos/VideoSearch'
import { fetchFromAPI } from '../utils/api'

const Search = () => {
    const { searchId } = useParams();
    const [videos, setVideos] = useState([]);
    const [nextPageToken, setNextPageToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setVideos([]);
      fetchVideos(searchId);
      setLoading(true);
    },[searchId])

    const fetchVideos = (query, pageToken = '') => {
        fetchFromAPI(`search?q=${query}&part=snippet&type=video&pageToken=${pageToken}`)
            .then((data) => {
                setNextPageToken(data.nextPageToken);
                setVideos((prevVideos) => [...prevVideos, ...data.items]);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error)
                setLoading(false);
            })
    }

    const handleLoadMore = () => {
      if (nextPageToken) {
        fetchVideos(searchId, nextPageToken);
      }
    }

    const searchPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main title='유튜브 검색' description='유튜브 검색 결과 페이지입니다.'>
            <section id='searchPage' className={searchPageClass}>
                <div className='video__inner search'>
                    <VideoSearch videos={videos} />
                </div>
                <div className='video__more'>
                    <button onClick={handleLoadMore}>더보기</button>
                </div>
            </section>
        </Main>
    )
}

export default Search
