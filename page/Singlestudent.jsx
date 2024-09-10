import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleStudent = () => {
    const [data, setData] = useState(null);

    const { id } = useParams();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then((res) => {
                console.log(res)
                setData(res)
            }).catch((err) => {
                console.log(err);

            })
    }, [])
    return (
        <>
            <div>SingleStudent {id}</div>
      
            <h1>Name:{data ? data.name  : "loading..."}</h1>
            <h1>Email:{data ? data.email  : "loading..."}</h1>
            <h1>Mobile num:{data ? data.phone  : "loading..."}</h1>
            <h1>Address:{data ? data.address.city  : "loading..."}</h1>
            
            
          
        </>
    )
}

export default SingleStudent


// {
//     data ? data.map((item)=>{
//       return <div key={item.id} >
//         <h3>{item.name}</h3>
//         <p>{item.username}</p>
//         <button onClick={()=> singleUser(item)}>show more</button>
//       </div>
//     }): <h1>Loading..</h1>
//   }