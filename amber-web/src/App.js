import Headerperso from "./components/headerperso.js";
import Footer from "./components/footer.js";
import logo from "./logo.svg";
import "./App.css";
import TableObjet from "./components/tableObject.js";
import ColorPickerMenu from "./components/color-picker-menu.js";
// import ProductList from "./components/productslist.js";
// import Cart from "./components/cart.js";

function App() {
  return (
    <div className="App">
      <Headerperso />
      <ColorPickerMenu />
      <TableObjet />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <ProductList />
        <Cart /> */}
      </header>
      <Footer />
    </div>
  );
}

export default App;
