
'use client'
import axios from 'axios';
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'  
export default function Lesson() {
   const [lesson, setlesson]=useState([]);

   useEffect(()=>{
       fetchLesson();
     },[]);
   
    async function fetchLesson() {
    const result=await axios.get('/api/lesson');
    setlesson(result.data);
    
  }
  return (
    <div className='lesson mt-5'>
        <div className='container'>
            <div className='row'>
            
              <div className='col-md-6'>
  {lesson.map((item) => (
    <div key={item.id} className='mb-3'>
      <p className='lesson-title-1'>{item.banner_title}</p>
      <p className='lesson-title-2'>{item.banner_main_title}</p>
      <p className='lesson-title-3'>{item.banner_subtitle}</p>
      <button className='lesson-btn'>{item.banner_btn}</button>
    </div>
  ))}
</div>
          <div className='col-md-6'>
                <Image className='lesson-img' src='/lesson.png' width={272} height={283} alt='lesson image'/>
          </div>
            </div>

        </div>
      </div>
    
  )
}
