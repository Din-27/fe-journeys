import React, { useEffect, useState, useContext } from 'react'
import NavbarLogin from '../../navbar/NavbarLogin'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { API } from '../../config/api'
import Swal from 'sweetalert2'
import CardContentUser from '../../component/CardContentUser'
import { UserContext } from '../../context/UserContext'






function Landing() {

    const [journeys, setJourneys] = useState([])
    const [query, setQuery] = useState('')
    const [state] = useContext(UserContext)
    

    console.log(state)
    
    
    const getListJourneys = async () => {
        const res = await API.get('/journeys')
        // console.log(res.data.data)
          setJourneys(res.data.data.map((x)=>({
            ...x,
            replace: false
          })))
          console.log(res)
      }
      
      // const selectMark = async (x) => {
      //   const res = await API.get('/my-bookmarks')       
      // }

      const handleSave = async (x) => {
            const res = await API.post('/bookmark', {idJourney : x})
            console.log(res)
            Swal.fire({
              icon: 'success',
              text: 'Save success!',
            })
          }
          
      useEffect(()=>{
        getListJourneys()
      }, [])


  return (
    <div className='mb-5 container'>
        <NavbarLogin/>
        <div className="content"
        style={{fontWeight: "bold", marginTop: '100px', marginLeft: '100px'}}>
            <h1 className="text-black ms-5"
            >Journey</h1>  
        </div>
        <div className="container search-content d-flex mt-5 form" method='get'>
            <Form.Control type="text" name='s' placeholder="Search" onChange={e => setQuery(e.target.value)} />
            <Button className='ms-2' variant="primary">Search</Button>
        </div>
        <div className='d-flex flex-wrap'>
                {journeys && journeys.filter(x => {
                  if(query === ""){
                    return x
                  }else if(x.title.toLowerCase().includes(query.toLowerCase())){
                    return x
                  }else if(x.body.toLowerCase().includes(query.toLowerCase())){
                    return x
                  }
                }).map((x, index)=>(
                  <CardContentUser 
                  image={x.image}
                  title={x.title}
                  body={x.body}
                  id={x.id}
                  handleSave={()=>handleSave(x.id)}/>
                  )
               )}
        </div>
    </div>
  )
}

export default Landing