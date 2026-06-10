
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

const products=[
{id:1,name:'Laptop',price:799},
{id:2,name:'Phone',price:499},
{id:3,name:'Headphones',price:99}
];

function Home(){
 return <div><h1>E-Commerce Catalog</h1><p>Production-ready capstone project.</p></div>
}
function Products(){
 return <div><h2>Products</h2>{products.map(p=><div key={p.id}>{p.name} - ${p.price}</div>)}</div>
}
function About(){return <h2>About</h2>}

function App(){
 return (
 <div style={{padding:'20px',fontFamily:'Arial'}}>
 <nav>
 <Link to="/">Home</Link> | <Link to="/products">Products</Link> | <Link to="/about">About</Link>
 </nav>
 <Routes>
 <Route path="/" element={<Home/>}/>
 <Route path="/products" element={<Products/>}/>
 <Route path="/about" element={<About/>}/>
 </Routes>
 </div>
 )
}

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter><App/></BrowserRouter>
)
