import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Page/Home/HomePage";
import AboutPage from "./Page/About/AboutPage";
import BookMenuPage from "./Page/Category/BookMenupage";
import ServicePage from "./Page/Service/ServicePage";
import ContactPage from "./Page/Contact/ContactPage";
import Mainlayout from "./Components/Layout/Mainlayout";
// import BookLanCard from "./Page/Category/BCodeLan/BookLanCard";
import History from "./Page/Category/CatecgoryBook/History";
import Leadership from "./Page/Category/BookLeadership/Leadership";
import Business from "./Page/Category/BookBusiness/Business";
import Philosophy from "./Page/Category/BookPhilosophy/Philosophy";
import Programming from "./Page/Category/BookProgramming/Programming";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Mainlayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/category" element={<BookMenuPage />} />
          <Route path="/programmingBook" element={<Programming />} />
          <Route path="/ភាពជាអ្នកដឹកនាំ" element={<Leadership />} />
          <Route path="/ជំនួញនិងទុរកិច្ច" element={<Business />} />
          <Route path="/ទស្សនវិជ្ជា" element={<Philosophy />} />
          <Route path="/historybook" element={<History />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
