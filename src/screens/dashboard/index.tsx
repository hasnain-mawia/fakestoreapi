import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import CLoader from '../../components/CLoader';
function Index() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<any>([]);
  useEffect(() => {
  axios.get('https://fakestoreapi.com/products').then((res)=>{
    setProducts(res.data)
  }).catch((err)=>{
    console.log(err)
  })

  },[])
  
  return (
    <div className='max-w-[1400px] mx-auto my-10 px-4'>
      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3'>
        {
          products.length === 0 ? <CLoader /> : 
          products.map((product:any, i:number) => {
          return(
            <div onClick={()=> navigate(`/detail/${product.id}`)} key={i} className='shadow-2xl rounded-[10px] p-5 border-2 border-[#c9c9c9] flex flex-col items-center justify-center text-center'>
            <img src={product.image} alt={product.title} className='w-[150px] h-[200px]' />
            <h2 className='font-bold'>{product.title.slice(0,25)}</h2>
            <p className='text-[green]'>${product.price}</p>
          </div>
          )
        }
        )}  
      </div>

    </div>
  )
}

export default Index