import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Page/Home/HomePage";
import AboutPage from "./Page/About/AboutPage";
import BookMenuPage from "./Page/Category/BookMenupage";
import ContactPage from "./Page/Contact/ContactPage";
import SignUpPage from "./Page/Signup/SignUpPage";
import Mainlayout from "./Components/Layout/Mainlayout";
import BookLanCard from "./Page/Category/BookPsychology/Psychology";
import History from "./Page/Category/BookHistory/History";
import Leadership from "./Page/Category/BookLeadership/Leadership";
import Business from "./Page/Category/BookBusiness/Business";
import Philosophy from "./Page/Category/BookPhilosophy/Philosophy";
import Programming from "./Page/Category/BookProgramming/Programming";
import Novel from "./Page/Category/BookNovel/Novel";
import LoginPage from "./Page/Login/LoginPage";
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
          <Route path="/ប្រវត្តិសាស្រ្ត" element={<History />} />
          <Route path="/ប្រលោមលោក" element={<Novel />} />
          <Route path="/ចិត្តវិទ្យា" element={<BookLanCard />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/SignUp" element={<SignUpPage />}></Route>
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
