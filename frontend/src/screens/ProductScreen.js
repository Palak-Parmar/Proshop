import React,{useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import {Row,Col, ListGroup,Card,Button,Image, ListGroupItem} from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'
const ProductScreen = ({match}) => {

//   fetching it(products) from backend // 
   const[product,setProduct]=useState({})

    // whatever we put inside this runs as soon as the component loads 
    useEffect(() => {
      const fetchProduct = async() => {
       const {data}=await axios.get(`/api/products/${match.params.id}`)
      // change from empty array of useStaate 
      setProduct(data)
      }
      fetchProduct()
      // use array of dependencies i.e anthing that you want to fire use effect off when it changes 
  }, [match])

   
    return (
        <>
        {/* for go back button to the main page */}
       <Link className="btn btn-light my-3" to='/'>
           Go Back
       </Link>
       <Row>
       <Col md={4}>
       {/* adding name and image of the product to be sold */}
          <Image src={product.image} alt ={product.name} fluid/>
       </Col>

       <Col md={4}>
       {/* to write name of product */}
       {/* flush used to stop img to stop going out of container */}
         <ListGroup variant='flush'>
         <ListGroup.Item>
         <h3>{product.name}</h3>
         </ListGroup.Item>
           
           {/* to give the rating of the pro */}
         <ListGroup.Item>
         <Rating value={product.rating} text={`${product.numReviews } reviews`}/>
         </ListGroup.Item>

         {/* give price of pro */}
         <ListGroup.Item>
         Price: ${product.price}
         </ListGroup.Item> 
           
         {/* to give desciption of the product */}
         <ListGroup.Item>
         Desciption: {product.description}
         </ListGroup.Item> 


         </ListGroup>
       </Col>
       <Col md={4}>
       
       {/* making a new card of the right of the other card with list groups :1.price,status and add to cart button*/}
       <Card>
         <ListGroup variants ="flush">
           <Row>
            <Col>
               Price: 
            </Col>
            <Col>
               <strong> ${product.price} </strong>
            </Col>
           </Row>
         </ListGroup>

         <ListGroup variants ="flush">
           <Row>
            <Col>
               Status: 
            </Col>
            <Col>
               {product.countInStock>0?'In stock':'Out od stock'}
            </Col>
           </Row>
         </ListGroup>

         <ListGroupItem>
             <Button className="btn-block" type="button" 
             disabled={product.countInStock === 0}>
             Add To Cart
             </Button>
         </ListGroupItem>
       </Card>
       </Col>
       </Row>
       </>
    )
}

export default ProductScreen
