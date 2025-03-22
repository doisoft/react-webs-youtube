import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// 페이지 바뀔 때 마다 상위에서 보도록 추가
const ScrollTo = () => {
    const { pathname} = useLocation();

    useEffect(() => {
        window.scroll(0, 0);
    }, [pathname])

  return null;
};

export default ScrollTo