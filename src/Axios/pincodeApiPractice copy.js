import React, { useState } from "react";
import axios from "axios";

const PincodeApiPractice = () => {
    const [pincode, setPincode] = useState(605001);
    const [pincodeData, setPincodeData] = useState([]);
    const [loading, setLoading] = useState(true);

    axios.get('https://api.postalpincode.in/pincode/600001')
        .then((response) => {
            console.log("Pincode Api - response", response.data[0].PostOffice);
            setPincodeData(response.data[0].PostOffice);
            console.log("Pincode Data", pincodeData);

        })
        .finally(() => {
            setLoading(false);

        })
    return (

        <>

        {loading ? <> <div> Loading </div> </> : <>  <table>


<thead>
    <tr  >

        <th style={{ border: "1px solid black", width: "300px" }}>
            Name

        </th>
        <th style={{ border: "1px solid black", width: "300px" }}>
            Branch Type

        </th>
    </tr>
</thead>

{pincodeData && pincodeData.map((data) => {

    return (
        <div>
            <table style={{ border: "1px solid black" }}  >

                <tbody>

                    <tr  >

                        <th style={{ border: "1px solid black", width: "300px" }}>
                            {data.Name}

                        </th>
                        <th style={{ border: "1px solid black", width: "300px" }}>
                            {data.BranchType}

                        </th>
                    </tr>
                </tbody>



            </table> </div>
    );
})}

</table></>}
            {/* <div> {pincodeData} </div> */}
           
        </>
    );
};


export default PincodeApiPractice;
