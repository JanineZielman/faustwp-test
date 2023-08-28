import { useQuery, gql } from '@apollo/client';
import {
  Loader
} from '../components';
import React, {useEffect, useState, useRef} from 'react';
import Slider from "react-slick";
import { useRouter } from 'next/router';

export default function Component() {

  const { data } = useQuery(Component.query);
  
  const router = useRouter();
  const [activeSlide, setActiveSlide] = useState(0)
  const sliderRef = useRef(null)
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlide(next)
  };

  const { asPath } = useRouter();
  const [hash, setHash] = useState();
  useEffect(()=>{
    setHash(asPath.split('#')[1]);
   }, [ asPath ]);

  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (data){
      setLoading(false);
    }
  },[data])


  function interceptClickEvent(e) {
    if (e.target.tagName === 'A') {
      // e.preventDefault
      sliderRef.current.slickGoTo(e.target.href?.charAt(e.target.href.length - 1));
    }
}

  
  useEffect(() => {
    document.addEventListener('click', interceptClickEvent);
    if (sliderRef.current){
      sliderRef.current.slickGoTo(hash)
    }
  })


  return (
    <>
      {loading ?
        <Loader/>
      :
        <>
        <main className="article flowchart-wrapper">
          <div className='bg-pink'></div>
          <div className='background-animation'>
            <div className="bg-blob1"></div>
            <div className="bg-blob2"></div>
            <div className="bg-blob3"></div>
          </div>
          <center>
            <div className='flowchart'>
              <Slider {...settings} ref={sliderRef}>
                {data.page.flowchart.flowchart.map((item, i) => {
                  return(
                    <div className='slider-wrapper'>
                      <div className={`slider${i}`} dangerouslySetInnerHTML={{ __html: item.content ?? '' }}/>
                    </div>
                  )
                })}
              </Slider>
            </div>
          </center>
        </main>
        </>
      }
    </>
  );
}

export async function getServerSideProps(){
  return {
    props: {
      paths: [],
      fallback: 'blocking',
    }
  };

}

Component.query = gql`
  query GetPageData {
    page(id: "flowchart", idType: URI) {
      flowchart{
        flowchart{
          content
        }
      }
    }
  }
`;