import React from 'react';
import Graph from './Graph';

export default {
  title: 'Components/Graph Component',
  tags: ['autodocs'],
  component: Graph,
};

const Template = (args) => <Graph {...args} />;

export const BarChart = Template.bind({});
BarChart.args = {
  graphType: 'bar',
};
BarChart.parameters = {
  docs: {
    source: {
      code: `import React from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadialBarChart, RadialBar, LabelList
} from 'recharts';
const sampleData = [
  { name: 'Jan', value: 30, value2: 50 },
  { name: 'Feb', value: 45, value2: 60 },
  { name: 'Mar', value: 50, value2: 70 },
  { name: 'Apr', value: 75, value2: 100 },
  { name: 'May', value: 90, value2: 120 },
  { name: 'Jun', value: 60, value2: 80 },
];

          <LineChart data={sampleData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
      `
      ,
    },
  },
};

export const LineChart = Template.bind({});
LineChart.args = {
  graphType: 'line',
};
LineChart.parameters = {
  docs: {
    source: {
      code: `import React from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadialBarChart, RadialBar, LabelList
} from 'recharts';
const sampleData = [
  { name: 'Jan', value: 30, value2: 50 },
  { name: 'Feb', value: 45, value2: 60 },
  { name: 'Mar', value: 50, value2: 70 },
  { name: 'Apr', value: 75, value2: 100 },
  { name: 'May', value: 90, value2: 120 },
  { name: 'Jun', value: 60, value2: 80 },
];
<PieChart>
            <Pie data={sampleData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
              {sampleData.map((entry, index) => (
                <Cell key={'cell-{index}'} fill={colors[index % colors.length]} />
              ))}
            </Pie>
          </PieChart>`
      ,
    },
  },
};

export const PieChart = Template.bind({});
PieChart.args = {
  graphType: 'pie',
};
PieChart.parameters = {
  docs: {
    source: {
      code: `import React from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadialBarChart, RadialBar, LabelList
} from 'recharts';
const sampleData = [
  { name: 'Jan', value: 30, value2: 50 },
  { name: 'Feb', value: 45, value2: 60 },
  { name: 'Mar', value: 50, value2: 70 },
  { name: 'Apr', value: 75, value2: 100 },
  { name: 'May', value: 90, value2: 120 },
  { name: 'Jun', value: 60, value2: 80 },
];<PieChart>
            <Pie
              data={sampleData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {sampleData.map((entry, index) => (
                <Cell key={'cell-{index}'} fill={colors[index % colors.length]} />
              ))}
            </Pie>
          </PieChart>`
      ,
    },
  },
};

export const DonutChart = Template.bind({});
DonutChart.args = {
  graphType: 'donut',
};
DonutChart.parameters = {
  docs: {
    source: {
      code: `import React from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadialBarChart, RadialBar, LabelList
} from 'recharts';
const sampleData = [
  { name: 'Jan', value: 30, value2: 50 },
  { name: 'Feb', value: 45, value2: 60 },
  { name: 'Mar', value: 50, value2: 70 },
  { name: 'Apr', value: 75, value2: 100 },
  { name: 'May', value: 90, value2: 120 },
  { name: 'Jun', value: 60, value2: 80 },
];
 <AreaChart data={sampleData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorValue)" />
          </AreaChart>`
      ,
    },
  },
};

export const AreaChart = Template.bind({});
AreaChart.args = {
  graphType: 'area',
};
AreaChart.parameters = {
  docs: {
    source: {
      code: `import React from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadialBarChart, RadialBar, LabelList
} from 'recharts';
const sampleData = [
  { name: 'Jan', value: 30, value2: 50 },
  { name: 'Feb', value: 45, value2: 60 },
  { name: 'Mar', value: 50, value2: 70 },
  { name: 'Apr', value: 75, value2: 100 },
  { name: 'May', value: 90, value2: 120 },
  { name: 'Jun', value: 60, value2: 80 },
];<BarChart data={sampleData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" stackId="a" fill="#8884d8" />
            <Bar dataKey="value2" stackId="a" fill="#82ca9d" />
          </BarChart>`
      ,
    },
  },
};

export const StackedBarChart = Template.bind({});
StackedBarChart.args = {
  graphType: 'stackedBar',
};
StackedBarChart.parameters = {
  docs: {
    source: {
      code: `import React from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadialBarChart, RadialBar, LabelList
} from 'recharts';
const sampleData = [
  { name: 'Jan', value: 30, value2: 50 },
  { name: 'Feb', value: 45, value2: 60 },
  { name: 'Mar', value: 50, value2: 70 },
  { name: 'Apr', value: 75, value2: 100 },
  { name: 'May', value: 90, value2: 120 },
  { name: 'Jun', value: 60, value2: 80 },
];<BarChart layout="vertical" data={sampleData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>`
      ,
    },
  },
};

export const VerticalBarChart = Template.bind({});
VerticalBarChart.args = {
  graphType: 'verticalBar',
};
VerticalBarChart.parameters = {
  docs: {
    source: {
      code: `import React from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadialBarChart, RadialBar, LabelList
} from 'recharts';
const sampleData = [
  { name: 'Jan', value: 30, value2: 50 },
  { name: 'Feb', value: 45, value2: 60 },
  { name: 'Mar', value: 50, value2: 70 },
  { name: 'Apr', value: 75, value2: 100 },
  { name: 'May', value: 90, value2: 120 },
  { name: 'Jun', value: 60, value2: 80 },
];
<BarChart data={sampleData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>`
      ,
    },
  },
};
