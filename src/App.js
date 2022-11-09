import { Routes, Route } from "react-router";
import { Provider } from "react-redux";
import { store } from "./store";
import "./App.css";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Provider>
  );
}

export default App;
