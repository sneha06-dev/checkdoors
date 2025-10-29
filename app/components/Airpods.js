import React from 'react'
import Image from 'next/image'
export default function Airpods() {
  return (
    <div className='airpods mt-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <Image className='airpod-img' src='/airpod.png' width={326} height={326} alt='airpod image'/>

                </div>
               <div className='col-md-8'>
                 <p className='airpod-title mt-4'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                <p className='airpod-title2'>Tim Smith</p>
                <p className='airpod-sub'>British Dragon Boat Racing Association</p>

                <div className='row mt-3'>
                <div className='col-md-3'>
                        <Image src='/Logo1.png' width={40} height={40} alt='airpod image'/>
                         <Image className='ms-5' src='/Logo2.png' width={40} height={40} alt='airpod image'/>

                    </div>
                    <div className='col-md-3'>
                        <Image src='/Logo3.png' width={40} height={40} alt='airpod image'/>
                         <Image  className='ms-5' src='/Logo4.png' width={40} height={40} alt='airpod image'/>

                    </div>
                    <div className='col-md-3'>
                        <Image src='/Logo5.png' width={40} height={40} alt='airpod image'/>
                         <Image  className='ms-5' src='/Logo6.png' width={40} height={40} alt='airpod image'/>
                    </div>
                
                      <div className='col-md-3'>
                       <p className='airpod-sub2 mt-1'>Meet all customers</p>
</div>
                    </div>
                </div> 
                
                    
                </div>

            </div>

        </div>
      
    
  )
}
