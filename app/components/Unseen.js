import React from 'react'
import Image from 'next/image'
export default function Unseen() {
  return (
    <div className='unseen'>
        <div className='container'>
           <div className='row'>
            <div className='col-md-5'>
                <Image className='unseen-img' src='/unseen.png' width={ 441} height={ 400} alt='Unseen image'/>

            </div>
            <div className='col-md-7'>
                <p className='unseen-title'>The unseen of spending three years at Pixelgrade</p>
                <p className='unseen-title1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <button className='unseen-btn'>Learn More</button>
            </div>
           </div>
        </div>
      
    </div>
  )
}
