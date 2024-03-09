import React from 'react'

const Card = ({ src, title, price, desc }) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={src}  className='w-[200px] h-[250px]'  alt="Image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title.slice(0, 30)}</h2>
                    <h4>{price}</h4>
                    <div className="card-actions justify-end">
                        {/* <button className="btn btn-primary"><p>{desc.slice(0, 50)}</p></button> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card