import React, { useEffect } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import CardSlider from '../../../components/cardSlider/CardSlider'
import useFetch from '../../../hooks/useFetch'



const MostPopular = () => {
    const {data,loading,error}=useFetch(`/getdata/popular/`)
   
    
  return (
    <div className=' relative    text-white'>
        <ContentWrapper classname="flex mx-auto">
            <span className='text-[24px]  font-normal'>MostPopular</span>
        </ContentWrapper>
        <CardSlider  data={data} loading={loading}/>

    </div>
  )
}

export default MostPopular