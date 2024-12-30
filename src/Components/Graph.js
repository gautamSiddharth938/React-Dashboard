import React from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts';
import './Graph.css';

const generateData = () => {
    const data = [];
    for (let i = 1; i <= 25; i++) {
        const y = Math.floor(Math.random() * 500) + 200; // Random value between 100 and 500
        data.push({ x: i, y });
    }
    return data;
};

const data = generateData();

const formatNumber = (number) => {
    return number.toLocaleString();
};

export default function Graph() {
    return (
        <div className="graph-container">
            <div className="graph-header">
                <span style={{fontSize: '15px'}}>Activity</span>
                <button className="graph-button">
                    Weekly
                    <span>▼</span>
                </button>
            </div>
            <div className="graph-content">
                <ResponsiveContainer width="100%" height="99%">
                    <BarChart data={data} margin={{ top: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis
                            tickMargin={10}
                            dataKey="x"
                            type="number" // Numeric x-axis
                            domain={[0, 25]} // Range for x-axis
                            tickCount={7} // Number of ticks (adjust as needed)
                        />
                        <YAxis axisLine={false} tickFormatter={formatNumber} />
                        <Bar dataKey="y" barSize={15} radius={10} fill="#22d3ee" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}