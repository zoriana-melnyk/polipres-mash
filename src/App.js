import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.scss';
import { Header } from "./components/Header";
import { Footer } from './components/Footer';
import { Home } from "./pages/Home";

import { LitteraProvider } from "@assembless/react-littera";

// toasts
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// HOC
const Layout = ({ children, withFooter = true }) => {
  return <>
    <Header />
    {children}
    {withFooter ? <Footer /> : null}
  </>

}

function App() {
  return (
    <div className="App">
      <LitteraProvider locales={["en_US", 'uk_UA', "pl_PL", "de_DE"]} initialLocale="uk_UA">
       <Router>
          <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
          </Routes>
        </Router>
      </LitteraProvider>
      <ToastContainer
        position="bottom-right"
        theme="dark"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
