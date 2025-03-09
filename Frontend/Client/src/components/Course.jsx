import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Cards from './Cards'
// import list from '../../public/list.json'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Course() {
    const [book, setBook] = useState([])
    useEffect(()=>{
        const getBook = async()=>{
            try {
                const response = axios.get('http://localhost:8000/book')
                console.log(response.data);
                setBook((await response).data)
                
            } catch (error) {
                console.log(error);
                
            }
        }
        getBook()
    },[])
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
            <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusamus aperiam, quo voluptate, illum ipsum veniam aliquam sapiente excepturi impedit a animi assumenda ex dignissimos voluptatum consectetur molestiae repudiandae! Reprehenderit, quos earum ab dicta veritatis doloremque quo praesentium molestias. Corrupti explicabo accusantium, laborum illo amet quia ex? Est, autem alias.?</p>
            <Link to='/'>
                <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
               book.map((item) => (
                <Cards item={item} key={item.id}/>
               ))
            }
        </div>
    </div>
  )
}

export default Course