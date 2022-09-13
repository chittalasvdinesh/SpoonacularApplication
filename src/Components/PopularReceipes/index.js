import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './index.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function PopularReceipe() {
  const [receipeData, setReceipeData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let url = "https://api.spoonacular.com/recipes/random?apiKey=638729227e8c465faddf3b3ed364c082&number=10"
    axios.get(url)
      .then((res) => {
        if (res) {
          setLoading(false)
          setReceipeData(res.data)
          console.log(res.data)
        }
      })
      .catch((err) => console.log(err))
  }, [])


  return (
    <section className="home-section">
     <Container fluid>
      <Row>
        <Col  sm={12} md={6} lg={5}>
          <div className='d-flex align-items-center'>
          <h1 className='fast-heading'>Fast</h1>
          <h1 className='food-delivery-heading'>Food Delivery</h1>
          </div>
          <p className='food-description'>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium</p>
          <div>
           <Button className='order-now-btn'>Order now</Button>
          </div>
        </Col>
        <Col  sm={12} md={6} lg={7}>
          <img src='./Images/BannerImage.png' className='w-100'/>
        </Col>
      </Row>
     </Container>
    </section>
  )
}
