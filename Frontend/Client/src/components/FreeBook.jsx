import React, { useEffect, useState } from 'react'
// import list from '../../public/list.json'
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function FreeBook() {
    const [book,setBook] = useState([])
    useEffect(()=>{
        const getFilteredBook = async()=>{
            try {
                const result = axios.get('http://localhost:8000/book')
                // console.log((result.data));
                const data = (await result).data.filter((data) => data.category === "Free")
                setBook(data);
                
            } catch (error) {
                console.log(error);
                
            }
        }
        getFilteredBook()
        
    })
    // const filterData = list.filter((data)=>data.category === "Free")
    // console.log(filterData); 
    

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    }

    
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div>
                <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A nam dolore accusamus consequatur eius saepe deserunt fugiat corrupti. Laboriosam hic quidem repellendus labore explicabo, aut dolores eum iure id atque!</p>
            
        </div>
        <div>
        <div className="slider-container">
      <Slider {...settings}>
        {
            book.map((item)=>(
                <Cards item={item} key={item.id}/>
            ))
        }
      </Slider>
    </div>
    </div>
</div>
    </>
  )
}

export default FreeBook