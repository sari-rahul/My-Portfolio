import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell, ResponsiveContainer,
} from 'recharts';
import styles from '../styles/Skills.module.css';

const data = [
  { name: 'HTML', level: 90, color: '#F09EA7' },
  { name: 'CSS', level: 90, color: '#F6CA94' },
  { name: 'Javascript', level: 70, color: '#FAFABE' },
  { name: 'ReactJS', level: 70, color: '#C1EBC0' },
  { name: 'Python', level: 60, color: '#DBCDF0' },
  { name: 'Django', level: 60, color: '#A0C4FF' },
  { name: 'MongoDB', level: 60, color: '#BDB2FF' },
  { name: 'WordPress', level: 40, color: '#FFB3C6' },
  { name: 'Drupal', level: 40, color: '#84DCC6' },
  { name: 'NodeJs', level: 30, color: '#F6C2F3' },
  { name: 'PHP', level: 30, color: '#FFAC81' },
];

const levelLabels = [
  { range: [0, 20], label: 'Noob' },
  { range: [21, 40], label: 'Rookie' },
  { range: [41, 60], label: 'Ace' },
  { range: [61, 80], label: 'Wizard' },
  { range: [91, 100], label: 'Legend' },
];

const getLevelLabel = (level) => {
  const labelObj = levelLabels.find(label => level >= label.range[0] && level <= label.range[1]);
  return labelObj ? labelObj.label : '';
};


const SkillsChart = () => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" className={styles.Label}/>
        <YAxis tickFormatter={getLevelLabel} className={styles.Label}/>
        <Bar dataKey="level" radius={[5, 5, 0, 0]} animationDuration={1000}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SkillsChart;
