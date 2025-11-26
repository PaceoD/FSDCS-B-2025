import React, { useEffect, useState } from 'react'

function Dashboard() {
  const[data,setData]=useState([]);
 
  useEffect(()=>{
           async function fetchData(){
                   const serverresponse=await fetch('https://fakestoreapi.com/products');
                   const jsonResponse=await serverresponse.json();
                   console.log(jsonResponse)
                   setData(jsonResponse);
           }
    
         fetchData();
  },[])
 
  return (
    <div>

      {
        data.length===0?(<h2>Data could not fetch</h2>):(
          <div>
          {
            data.map((ele)=>(
            <div style={{ height:'300px', width:'300px'}}>
              <img src={ele.image} height={100} width={100} />
              <h3>{ele.title}</h3>
              <button>Add to Cart</button>
            </div>
            ))
          }
          </div>
        )
      }
     {/* {
      JSON.stringify(data)
     } */}
    </div>
  )
}


export default Dashboard