import React, { useEffect, useState } from 'react'
import NavbarLogin from '../../navbar/NavbarLogin'
import { API } from '../../config/api'
import { Card, Button } from 'react-bootstrap'
import BookmarkIcon from '../../assets/Vector (6).png'
import BookmarkIconActive from '../../assets/active.png'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import CardContentLogin from '../../component/CardContentLogin'



function Bookmark() {

    const [MyBookmark, setMyBookmark] = useState([])
    const [replace, setReplace] = useState(true)
    const path = 'http://localhost:5000/uploads/'

    const getMyBookmark = async () => {
        const res = await API.get('/my-bookmarks')
        setMyBookmark(res.data.data)
        // setReplace(res.data.data)
        console.log(res.data.data);
    }

    const handleUndoBookmark = async (x) => {
      try {
        const res = await API.delete(`/bookmark/${x}`)
      getMyBookmark()
      Swal.fire({
        icon: 'success',
        text: 'Sign Up success!',
      })
      console.log(res)
      console.log(x)
      } catch (e) {
        console.log(e)
      }
      
    }

    useEffect(()=>{
        getMyBookmark()
    }, [])

  return (
    <div className='container mb-5'>
        <NavbarLogin/>
        <div className="content"
        style={{fontWeight: "bold", marginTop: '100px', marginLeft: '100px'}}>
            <h1 className="text-black"
            >Bookmark</h1>  
        </div>
        <div className='d-flex flex-wrap'>
                {MyBookmark.map((x, index)=>
                <CardContentLogin 
                key={x.id}
                image={x.journey.image} 
                title={x.journey.title} 
                body={x.journey.body} 
                id={x.id} index={index}
                handleUndoBookmark={()=>handleUndoBookmark(x.id)}
                replace={replace} path={path}
                />
               )}
        </div>
    </div>
  )
}

export default Bookmark

