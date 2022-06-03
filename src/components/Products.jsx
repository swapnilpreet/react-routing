import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const Products = () => {
  const [product, setproduct] = useState([])
  
  useEffect(() => {
    axios.get("http://localhost:8080/products/").then((r)=>{
      //console.log(r)
  setproduct(r.data)})
  }, [])
  
  return (
    <div>
      <h1>All Products</h1>
      <table className="w-75 mx-auto table table-danger table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Prices</th>
      <th scope="col">Link</th>
    </tr>
  </thead>
  <tbody>
      {product.map((item)=>{return(
        <tr key={item.id}>
          <td>{item.id+1}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>
        <Link to={"/products/"+item.id}>More Details</Link>
          </td>
        </tr>
      )})}
  </tbody>
</table>
    </div>
  )
}
