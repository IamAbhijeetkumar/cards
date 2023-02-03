import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {


    const [data, setData] = useState([])
    useEffect(() => {
        axiosdata()
    }, [])

    function axiosdata() {
        axios.get('https://dummyjson.com/posts')
            .then(function (response) {
                console.log(response.data.posts, "response");
                setData(response.data.posts)
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
    }
    return (
        <>
            {data.map((posts) => (
                    <div className='Home'>
                        <div className='Card'>
                            <h2>{posts.title ? posts.title.slice(0, 35) : "..."}</h2>
                            <h5>{posts.body ? posts.body.slice(0, 260) : "..."}</h5>
                            <div className='Review'>
                                <h6> User :{posts.userId}</h6>
                                <h6> Reaction: {posts.reactions}</h6>
                            </div>
                        </div>
                    </div>
            ))
            }
        </>
    )
}

export default Home;
