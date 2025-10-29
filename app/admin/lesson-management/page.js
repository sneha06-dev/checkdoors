'use client'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

export default function page() {
  const [lesson, setlesson]=useState([]);
  const [editId, setEditId] = useState(null);

const banner_title=useRef();
const banner_main_title=useRef();
const banner_sub_title=useRef();
const banner_btn=useRef();



  useEffect(()=>{
    fetchLesson();
  },[]);

  async function fetchLesson() {
    const result=await axios.get('/api/lesson');
    setlesson(result.data);
    
  }
    function resetForm() {
    banner_title.current.value = '';
    banner_main_title.current.value = '';
    banner_sub_title.current.value = '';
    banner_btn.current.value = '';
    }

async function handleSubmit(e) {
  e.preventDefault();
  const data={
    banner_title:banner_title.current.value,
    banner_main_title:banner_main_title.current.value,
    banner_subtitle:banner_sub_title.current.value,
    banner_btn:banner_btn.current.value,
  };
  if(editId){
    await axios.put(`/api/lesson/${editId}`,data)
  }else{
  await axios.post('/api/lesson',data);
  }
  fetchLesson();
  resetForm();
}

 async function handleEdit(item) {
    setEditId(item.id);
    banner_title.current.value =  item.banner_title
    banner_main_title.current.value = item.banner_main_title;
    banner_sub_title.current.value = item.banner_subtitle;
    banner_btn.current.value = item.banner_btn;
  }
  

async function handleDelete(id) {
  await axios.delete(`/api/lesson/${id}`);
  fetchLesson();
  
}

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" ref={banner_title} placeholder="Title_1" className='form-control' required />
      <input type="text" ref={banner_main_title} placeholder="Title_2" className='form-control' required />
      <input type="text" ref={banner_sub_title} placeholder="Sub_title_1" className='form-control' required />
      <input type="text" ref={banner_btn} placeholder="Banner-button" className='form-control' required />
      <button type='submit'> {editId ? 'Update' : 'Add'}</button>
    
     </form>





      <table>
        <thead>
            <tr>
                <th>Banner_title</th>
                  <th>Banner_Main_title</th>
                    <th>Banner_sub_title</th>
                      <th>Banner_btn</th>
            </tr>
        </thead>
        <tbody>
            {lesson.map((item)=>(
                <tr key={item.id}>
                    <td>{item.banner_title}</td>
                    <td>{item.banner_main_title}</td>
                    <td>{item.banner_subtitle}</td>
                    <td>{item.banner_btn}</td>
                    <td>
                      <button onClick={()=>handleEdit(item)}>Edit</button>
                      <button onClick={()=>handleDelete(item.id)}>Delete</button>
                    </td>
                </tr>
            )
            )}
        </tbody>
      </table>
    </div>
  )
}
