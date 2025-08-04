import { useSelector } from "react-redux";
function Stats() {
  const counters = useSelector((state) => state.counters);
  const totalValue = counters.reduce((sum, curr) => sum + curr.value, 0);
  return (
    <div className="flex item-center justify-center min-h-48 bg-gray-100 ">
      <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center space-y-4  ">
        <h2 className="text-2xl font-bold text-gray-800">Total Value: </h2>
        <p className="text-4xl font-semibold text-indigo-600">{totalValue}</p>
      </div>
    </div>
  );
}

export default Stats;
