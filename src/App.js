import './App.css';
import First from './Pages/First/First'
// import Second from './Pages/Second/Second'
// import Comment from './Elements/Auth/Comment';
// import Auth from './Elements/Auth/Auth';
import Header from './Elements/Header/Header'
import Footer from './Elements/Footer/Footer'



function App() {
  return (
    <div className="App">
      <Header/>
      <First/>
      {/* <Second/> */}
      {/* <Comment/> */}
      {/* <Auth/> */}
      <Footer/>
    </div>
  );
}



export default App;