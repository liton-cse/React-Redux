import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../features/counters/counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const counters = useSelector((state) => state.counters);
  const handleIncrement = (counterId) => {
    dispatch(increment(counterId));
  };
  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId));
  };

  return (
    <div>
      {counters.map((item) => (
        <div
          className="flex items-center justify-center min-h-64 bg-gray-100"
          key={item.id}
        >
          <div className="bg-white p-6 rounded-xl shadow-lg w-80 text-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Simple Counter {item.id}
            </h2>
            <p className="text-4xl font-semibold text-indigo-600">
              {item.value}
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => handleIncrement(item.id)}
                className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
              >
                Increment
              </button>
              <button
                onClick={() => handleDecrement(item.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Decrement
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Counter;
