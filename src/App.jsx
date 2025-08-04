import "./App.css";

import Counter from "./components/counters/Button";
import Post from "./components/posts/Post";
import Stats from "./components/Stats";

function App() {
  return (
    <div>
      <Counter />
      <Stats />
      <div className="gap-top-4">
        <Post />
      </div>
    </div>
  );
}

export default App;
