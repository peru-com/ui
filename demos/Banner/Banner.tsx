import React, { useRef, useState, useEffect } from 'react';
import { Banner, BannerItem } from './../../src/components/Banner';

export const items = [
  {
    title: 'Conoce los lugares donde nacieron 4 futbolistas de la selección uruguaya',
    link: 'https://peru.com/viajes/conozca-peru/arequipa-conoce-cual-mejor-epoca-visitarla-noticia-289406',
    date: '15 de Feb. 2020',
    category: 'CONOZCA PERU',
    image: {
      description: 'descripcion de la imagen',
      sizes: {
        desktop: 'https://cde.peru.com/ima/0/1/9/4/2/1942177/924x530/uruguay.jpg',
        laptop: 'https://cde.peru.com/ima/0/1/9/4/2/1942177/624x468/uruguay.jpg',
        tablet: 'https://cde.peru.com/ima/0/1/9/4/2/1942177/513x287/uruguay.jpg',
        mobile: 'https://cde.peru.com/ima/0/1/9/4/2/1942177/246x138/uruguay.jpg'
      }
    }
  },
  {
    title: 'Vacaciones en Uruguay: 4 lugares imperdibles que debes visitar en Salto',
    link: 'https://peru.com/ejemplo-de-una-uri-123',
    date: '15 de Feb. 2020',
    category: 'CONOZCA PERU',
    image: {
      description: 'descripcion de la imagen',
      sizes: {
        desktop: 'https://cde.peru.com/ima/0/1/9/4/0/1940431/924x530/viajes.jpg',
        laptop: 'https://cde.peru.com/ima/0/1/9/4/0/1940431/624x468/viajes.jpg',
        tablet: 'https://cde.peru.com/ima/0/1/9/4/0/1940431/513x287/viajes.jpg',
        mobile: 'https://cde.peru.com/ima/0/1/9/4/0/1940431/246x138/viajes.jpg'
      }
    }
  }
];

export const BannerDemo: React.FC = () => {
  const wrapperRef = useRef();
  const [ width, setWidth ] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return() => window.removeEventListener('resize', handleResize);
  })

  const handleResize = () => {
    wrapperRef.current && setWidth(wrapperRef.current.clientWidth);
  };

  useEffect(() => {
    wrapperRef.current && setWidth(wrapperRef.current.clientWidth);
  }, [wrapperRef]);

  return(
    <div style={{width: '100%'}} ref={wrapperRef}>
      {wrapperRef.current && (
        <Banner width={`${width}px`}>
          {items.map((item, index) => 
            <BannerItem key={index} item={item} />)}
        </Banner>)}
    </div>
  );
};
