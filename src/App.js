import './App.css';
import Customers from './components/Customers/Customers';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Page from './components/Page Section/Page';
import Services from './components/Services Section/Services';
import TopPage from './components/TopPage/TopPage';
import Why from './components/WhyUs/Why';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TopPage />
        <Services />
        <Why />
        <Customers />
        <Page />
      </div>
        <Footer />
    </div>
  );
}

export default App;
