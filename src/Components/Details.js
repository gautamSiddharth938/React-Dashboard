import React from 'react'

const Details = ({ imageURL, name, Order_no, Amount, Status }) => {
    return (
        <>
            <td style={{width: 'auto', height: '100%', color: 'white', fontSize: '10px'}} className='d-flex align-items-center justify-content-start'>
                {/* <div className="" style={{ border: "1px solid white", borderRadius: "10px" }}>
                </div> */}
                <img src={imageURL} alt={name} style={{ width: '10%', height: '50%', borderRadius: "20px", paddingRight: "5px"}} />
                {name}
            </td>
            <td  style={{width: 'auto', height: '100%', color: 'white', fontSize: '10px'}}>{Order_no}</td>
            <td style={{width: 'auto', height: '100%', color: 'white', fontSize: '10px'}}>
                {Amount}
            </td>
            <td style={{width: 'auto', height: '100%', color: 'white', fontSize: '10px'}}>
                <button className={`bg-${Status === 'Pending' || Status === 'Cancelled' ? 'danger-emphasis' : 'success-emphasis'} text-${Status === 'Pending' || Status === 'Cancelled' ? 'danger' : 'success'}`} style={{ border: "1px solid white", borderRadius: "10px" }}>
                    {Status}
                </button>
            </td>
        </>
    )
}


// const Details = ({ imageURL, name, Order_no, Amount, Status }) => {
//     return (
//         <td>
//             <img src={imageURL} alt={name} style={{ width: '50px', height: '50px' }} />
//             <div>{name}</div>
//             <div>{Order_no}</div>
//             <div>{Amount}</div>
//             <div>{Status}</div>
//         </td>
//     );
// };

export default Details;