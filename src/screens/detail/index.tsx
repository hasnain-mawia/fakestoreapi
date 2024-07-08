import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CLoader from '../../components/CLoader'
function Index() {
   const params = useParams()
   const navigate = useNavigate()
   const [detailview, setDetailview] = useState<any>(null);
   useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${params.id}`).then((res)=>{
      setDetailview(res.data)
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  
    },[])
  return detailview === null ? <CLoader/> : (
    <div className='max-w-[1200px] mx-auto my-10'>
       <button onClick={()=> navigate(-1)} className='bg-[#0088ff] p-2 rounded-[30px] text-white' >BACK</button>
       <div className='grid grid-cols-1 sm:grid-cols-2 p-10 sm:p-10'>
            <div>
                <img className='w-[300px] mx-auto' src={detailview.image} alt="" />
            </div>
            <div>
                <h2 className='font-bold text-[18px]'>{detailview.title}</h2>
                <p >{detailview.description}</p>
                <p className='text-[red] font-bold'>Category: {detailview.category}</p>
                <p className='text-[green] font-bold'>${detailview.price}</p>
                <button onClick={()=>alert(detailview.title)} className='bg-[#0088ff] px-4 py-2 rounded-[30px] text-white mt-10'>Add to Cart</button>
            </div>
        </div>
  
    </div>
  )
}

export default Index
