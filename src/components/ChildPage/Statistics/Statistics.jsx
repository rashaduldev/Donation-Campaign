/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#FF444A', '#00C49F'];

const Statistics = () => {
  
  const [favIteam, setFavIteam] = useState([]);

  useEffect(() => {
    const storedFavIteam = JSON.parse(localStorage.getItem('favorites'));
    if (storedFavIteam) {
      setFavIteam(storedFavIteam);
    }
  }, []);
  const data = [
    { name: 'Group A', value: 12 - favIteam.length },
    { name: 'Group B', value: favIteam.length },
  ];

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={200}
            fill="#8884d8"
            dataKey="value"
            label={({ cx, cy, midAngle, innerRadius, outerRadius, value }) => {
              const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
              const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
              const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
              return (
                <text
                  x={x}
                  y={y}
                  fill="white"
                  textAnchor={x > cx ? 'start' : 'end'}
                  dominantBaseline="central"
                >
                  {`${(value / data.reduce((a, b) => a + b.value, 0) * 100).toFixed(2)}%`}
                </text>
              );
            }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className='flex flex-col lg:flex-row items-center gap-9 text-center justify-center my-8'>
        <div className='flex items-center gap-2'>
          <h2>Your Donation</h2>
          <div className='h-[10px] w-[95px] bg-[#00C49F]'></div>
        </div>
        <div className='flex items-center gap-2'>
          <h2>Total Donation</h2>
          <div className='h-[10px] w-[95px] bg-[#FF444A]'></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
