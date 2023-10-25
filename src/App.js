import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Homepage } from "./components/Homepage";
import { JobForm } from "./components/JobForm";

import { ShowPost } from "./components/Pages/ShowPost";
import { DeletePost } from "./components/Pages/DeletePost";
import { EditPost } from "./components/Pages/EditPost";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/browse" element={<Homepage />} />
          <Route path="/addjob" element={<JobForm />} />
          <Route path="posts/details/:id" element={<ShowPost />} />
          <Route path="posts/edit/:id" element={<EditPost />} />
          <Route path="posts/delete/:id" element={<DeletePost />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
