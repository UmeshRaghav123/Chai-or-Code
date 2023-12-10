import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData]  = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/UmeshRaghav123')
        // fetch('https://www.instagram.com/omthakur07/')
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        })
    },[])

  return (
    <div className='text-center p-4 m-4 bg-gray-500 text-white text-3xl'>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github
