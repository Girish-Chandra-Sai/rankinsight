import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RankForm from "./components/RankForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RankForm />} />
      </Routes>
    </Router>
  );
}

export default App;
