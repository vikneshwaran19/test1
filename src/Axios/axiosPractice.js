// https://jsonplaceholder.typicode.com/users
//https://jsonplaceholder.typicode.com/photos

import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";

const AxiosPractice = () => {

    const [userData, setUserData] = useState([])
    useEffect(() => {


        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then((response) => {
                //  console.log("Response from API", response);
                setUserData(response.data);
                
            })

    }, [])

    // const oddData = userData.filter(userData.id /2 === 0)
    return (
        <>

            <div className="text-center mt-9" >
                {
                    (userData.map((data) => {

                        return (
                            <>
                            {`${data.id}.  Title: ${data.title}  `}
                            <img src={data.url}>
                            
                            </img>
                            </>
                        );
                    })
                    )
                }
            </div>

        </>



    );
};



export default AxiosPractice;