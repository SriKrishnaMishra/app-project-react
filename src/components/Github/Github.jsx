import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    // const [data, setData] = useState([])
    // useEffect(() => {
    // fetch('https://api.github.com/users/https://github.com/SriKrishnaMishra')
      
    //   .then(response => response.json())
    //   .then(data => {console.log(data); setData(data)})
    // }, [])

    const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-slate-500 text-white px-4 text-3xl'>Github Followers:{data.followers}</div>
  );
}

export default Github;

export const githubInLoader = async () => {

    const response =  await fetch('https://github.com/SriKrishnaMishra');
    if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
}