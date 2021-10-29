import './assests/App.css';
import Footer from './components/footer'
import Header from './components/header'
import Menubar from './components/menubar';
import Section from './components/section';
function App() {
  return (
    <div class="container">
      <Header/>
      <Menubar/>
      <Section/>
      <Footer />
    </div>
  );
}

export default App;
