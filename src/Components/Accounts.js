import React from 'react';
import Data from './Data.json';
import Details from './Details';
import './Accounts.css';

export default function Accounts() {
    const data = Data.accounts;
    return (
        <div className="accounts-container">
            <span style={{fontSize: '15px', fontWeight: 'bolder'}}>Recent Orders</span>
            <table className="table">
                <thead >
                    <tr>
                        <th style={{width: '40%',color: 'white', fontSize: '10px'}} scope="col">Customer</th>
                        <th style={{width: '20%',color: 'white', fontSize: '10px'}} scope="col">Order no.</th>
                        <th style={{width: '20%',color: 'white', fontSize: '10px'}} scope="col">Amount</th>
                        <th style={{width: '20%',color: 'white', fontSize: '10px'}} scope="col">Status</th>
                    </tr>
                </thead>
                <tbody >
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