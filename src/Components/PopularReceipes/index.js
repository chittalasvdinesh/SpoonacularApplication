import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './index.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { BsFillPlayFill, BsFillStarFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PopularReceipe() {
  const [receipeData, setReceipeData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let url = "https://api.spoonacular.com/recipes/random?apiKey=638729227e8c465faddf3b3ed364c082&number=1"
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


  const createOrder=()=>toast("order created Successfully")


  return (
    <>
      <section className="banner-section mt-5">
        <div className='empty-container'>

        </div>
        <Container fluid className='mt-5'>
          <Row>
            <Col sm={12} md={6} lg={5}>
              <div className='d-flex align-items-center'>
                <h1 className='fast-heading'>Fast</h1>
                <h1 className='food-delivery-heading'>Food Delivery</h1>
              </div>
              <p className='food-description mb-4'>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium</p>
              <div className='d-flex banner-button-section mb-5'>
                <Button className='order-now-btn me-3' onClick={createOrder}>Order now</Button>
                <div className='d-flex'>
                  
                  <BsFillPlayFill size={24} className="border mt-2 rounded play-icon" />
                  
                  <Button className='watch-btn border-0 bg-transparent'>
                    Watch video
                  </Button>
                </div>
              </div>
              <div className='mt-5'>
                <BsFillStarFill className='star-img' />
                <BsFillStarFill className='star-img' />
                <BsFillStarFill className='star-img' />
                <BsFillStarFill className='star-img' />
                <BsFillStarFill className='star-img' />
              </div>
              <p className='rating-text'>5 star rating <br /><span>based on 1788 reviews</span></p>

            </Col>
            <Col sm={12} md={6} lg={6}>
              <img src='./Images/BannerImage.png' className='banner-img' />
            </Col>
            <Col lg={12}>
              <section className='todays-section'>
                <h2>Todays Trending Food</h2>
                <p>Peoples loves it most the past week...</p>
                {/* <ul>
                  {loading ?
                    (<Spinner animation="border" variant="primary" />) :
                    (receipeData.recipes.map((recipe) =>
                      <li className='d-flex flex-lg-column'>
                        <div>
                          <img src={recipe.image} className="receipe-img" />
                          <div className='small-img ps-3'>
                            <img src={recipe.image} className="w-25" />
                            <img src={recipe.image} className="w-25" />
                            <img src={recipe.image} className="w-25" />
                          </div>
                        </div>
                        <div>
                          hello
                        </div>
                      </li>
                    ))
                  }
                </ul> */}
              </section>
              <ToastContainer position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover/>
            </Col>
          </Row>
        </Container>

      </section>
    </>
  )
}
