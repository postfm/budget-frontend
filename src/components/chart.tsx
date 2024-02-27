import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';

interface ChartProps {
  totalIncome: number;
  totalExpense: number;
}

interface DataInterface {
  value: number;
  name: string;
}

const COLORS = ['#FF8042', '#00C49F'];

const Chart = ({ totalIncome, totalExpense }: ChartProps): JSX.Element => {
  const data = new Array<DataInterface>(
    { value: totalExpense, name: 'Expense' },
    { value: totalIncome, name: 'Income' }
  );

  return (
    <PieChart
      width={240}
      height={240}
    >
      <Pie
        data={data}
        cx={'50%'}
        cy={'50%'}
        innerRadius={60}
        outerRadius={80}
        fill='#8884d8'
        paddingAngle={2}
        dataKey='value'
      >
        {data.map((_, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>
      <Legend />
      <Tooltip />
    </PieChart>
  );
};

export default Chart;
