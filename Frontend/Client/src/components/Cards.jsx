import React from 'react'

function Cards({ item }) {
    // console.log(item);
    
  return (
    <>
        <div className='mt-4 my-3 p-3'>
        <div className="card bg-gray-800 w-92 shadow-xl hover:scale-105 duration-200 transition ease-in-out">
            <figure>
                <img
                src={item.image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                {item.name}
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{item.title}</p>
                <div className="card-actions justify-between">
                <div className="badge badge-outline">${item.price}</div>
                <div className="badge badge-outline hover:text-white hover:bg-pink-500 duration-200 hover:p-2 cursor-pointer">Buy Now</div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Cards