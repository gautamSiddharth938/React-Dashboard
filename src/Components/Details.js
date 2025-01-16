import React from 'react'
import './Details.css'

const Details = ({ imageURL, name, Order_no, Amount, Status }) => {
    return (
        <>
            <td className='d-flex align-items-center justify-content-start table-rows text-white>'>
                {/* <div className="" style={{ border: "1px solid white", borderRadius: "10px" }}>
                </div> */}
                <img className='image-fix' src={imageURL} alt={name} />
                <span className='text-white'>{name}</span>
            </td>
            <td className='table-rows text-white'>{Order_no}</td>
            <td className='table-rows text-white'>
                {Amount}
            </td>
            <td className='table-rows text-white' >
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