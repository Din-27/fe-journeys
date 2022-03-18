import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BookmarkIcon from '../assets/Vector (6).png'
import BookmarkIconActive from '../assets/active.png'
import { API } from '../config/api'








function CardContentUser({body, title, handleSave, image, id}) {

  const [replace, setReplace] = useState(false)

  const handleAdd = async() => {
    setReplace(!replace)
           await API.get(`/journey/${id}`)
    }

  return  <div className="flex-wrap m-3" onClick={handleAdd}>
  <Card style={{ width: '18rem' }}>
    <div className='d-flex justify-content-end m-2'>
    {replace ? <img src={BookmarkIconActive} style={{ width: '15px'}}alt=""/>
      : <img src={BookmarkIcon} style={{ width: '15px'}} onClick={handleSave} alt=""/>}
    </div>
  <Card.Img variant="top" src={image} />
      <Card.Body>
          <Card.Title>{title.slice(0,5)}</Card.Title>
          <Card.Text>
            <Card.Text 
            className="post__description" 
            dangerouslySetInnerHTML={{ __html: body.slice(0, 15)}}  />
          </Card.Text>
          <Link to={`/detail-U/${id}`} style={{ textDecoration: "none" }}>
           <Button variant="primary">Go Reading</Button>
          </Link>
      </Card.Body>
  </Card>
</div>
}


export default CardContentUser