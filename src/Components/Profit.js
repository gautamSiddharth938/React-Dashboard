import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './Profit.css';

const data = [
    { name: 'Completed', value: 70 },
    { name: 'Remaining', value: 30 },
];

const COLORS = ['#36A2EB', '#E0E0E0'];

const renderCustomLabel = ({ cx, cy }) => {
    return (
        <>
            <text x={cx} y={cy - 10} textAnchor="middle" dominantBaseline="central" style={{ fontSize: '12px', fontWeight: 'bold', fill: 'white'}}>
                70%
            </text>
            <text x={cx} y={cy + 10} textAnchor="middle" dominantBaseline="central" style={{ fontSize: '5px', textAlign: 'center', fill: 'white'}}>
                goal completed
            </text>
        </>
    );
};

export default function Profit() {
    return (
        <div className="profit-container">

            <div className="Currency">
                <span style={{ fontSize: '10px' }}>Net Profit</span>
                <span style={{ fontSize: '20px', margin: '5px 0px', fontWeight: 'bolder' }}>$ 6759.25</span>
                <span style={{ color: '#84cc16' }}>▲ 3%</span>
            </div>
            <div className="chart-container">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius="80%"
                            outerRadius="100%"
                            fill="#8884d8"
                            paddingAngle={8}
                            dataKey="value"
                            labelLine={false}
                            label={renderCustomLabel}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <span style={{fontSize: '10px', textAlign: 'center'}}>* The values here has been rounded off.</span>
            </div>

        </div>
    );
}