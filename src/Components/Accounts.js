import React from 'react';
import Data from './Data.json';
import Details from './Details';
import './Accounts.css';

export default function Accounts() {
    const data = Data.accounts;
    return (
        <div className="accounts-container">
            <span className='accounts-heading'>Recent Orders</span>
            <table className="table">
                <thead >
                    <tr>
                        <th className='table-heads text-white' scope="col">Customer</th>
                        <th className='table-heads text-white' scope="col">Order no.</th>
                        <th className='table-heads text-white' scope="col">Amount</th>
                        <th className='table-heads text-white' scope="col">Status</th>
                    </tr>
                </thead>
                <tbody className='text-white' >
                    {data.map((element) => {
                        const ImageUrl = process.env.PUBLIC_URL + '/img/' + element.imageURL;
                        return (
                            <tr className='rgba(var(--bs-success))' key={element.id}>
                                <Details
                                    imageURL={ImageUrl}
                                    name={element.name}
                                    Order_no={element.Order_no}
                                    Amount={element.Amount}
                                    Status={element.Status}
                                />
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}