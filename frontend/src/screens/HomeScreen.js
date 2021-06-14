// usestate is used to use state in functional components beacuse in class youll define it in a container and we dont have a contructor so we use use state hooks
// useEffect- used to make a request to the backend 
import React,{useState, useEffect} from 'react'
import{Row,Col} from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
    // [what we want to call this piece of state,what we want to call the function that will manipulate the state]=
    // = useState[whatever want to use as default i.e empty]
    
    const[products, setProducts]=useState([])

    // whatever we put inside this runs as soon as the component loads 
    useEffect(() => {
        const fetchProducts = async() => {
         const {data}=await axios.get('/api/products')
        // change from empty array of useStaate 
        setProducts(data)
        }
        fetchProducts()
        // use array of dependencies i.e anthing that you want to fire use effect off when it changes 
    },[])
    return (
        <>
            <h2 className="text-center ">Latest Products</h2>
            <Row>
            {products.map(product=>(
                <Col key={product._id} sm={6} md={6} lg={4} xl={3}>   
                   <Product product = {product}/>
                </Col>
            ))}
           </Row>
         </>
    )
}

export default HomeScreen
