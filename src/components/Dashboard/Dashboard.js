import React from 'react';



import { AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        },
    ];
    return (

        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-10 '>
            <div >
                <p className='text-center text-3xl font-bold text-cyan-400'>
                    Month Wise Sell
                </p>
                <LineChart
                    width={600}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >

                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />

                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                </LineChart>
            </div>

            <div>
                <p className='text-center text-3xl font-bold text-cyan-400'>
                    Investment vs Revenue
                </p>
                <AreaChart
                    width={600}
                    height={300}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />

                </AreaChart>
            </div>
        </div>


    );


};

export default Dashboard;