import MainMenu from "./component/MainMenu";
import Header from "./component/Header";
import Article from "./component/Article";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Header></Header>            
      <section> 
        <MainMenu></MainMenu>
        <Article></Article>      
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
