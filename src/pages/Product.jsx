import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card';

const Product = () => {
    // const params = useParams()
    // console.log(params);


    const [data, setData] = useState([])

    useEffect(() => {

        axios.get('https://fakestoreapi.com/products').then((res) => {
            console.log(res.data);
            setData(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])


    return (


        <>
            <div className='flex flex-wrap justify-center gap-5 m-5'>
                
                {data ?
                    data.map((item) => {
                        return <Card
                            key={item.id}
                            title={item.title}
                            desc={item.desc}
                            src={item.image}
                            price={item.price} />
                    })
                    : <h1>Loading ...</h1>}


                
            </div>

        </>
    )
}

export default Product