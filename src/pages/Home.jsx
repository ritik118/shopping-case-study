import React from 'react';
import { useEffect } from 'react';


const Home = () => {

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + '/banners').then((res) => res.json()).then((result) => {
            console.log(result);
        })
    },[])

    return (
        <main>
            <h1>Home</h1>
        </main>
    )

}

export default Home;