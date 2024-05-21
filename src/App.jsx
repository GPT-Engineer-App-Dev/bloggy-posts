import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import NewPost from "./pages/NewPost.jsx";
import DeletePost from "./pages/DeletePost.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/delete-post" element={<DeletePost />} />
      </Routes>
    </Router>
  );
}

export default App;