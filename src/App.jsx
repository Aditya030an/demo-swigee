import Body from "./component/Body";
import Footer from "./component/Footer";
import Header from "./component/Header";
import { Provider } from "react-redux";
import store from "./utils/store";
import SideLocation from "./component/SideLocation";
import { Outlet } from "react-router";
import Login from "./component/Login";
function App() {

  return (
   <Provider store={store}>
    <SideLocation />
    <Login/>
    <Header/>
    <Outlet/>
    <Footer/>

   </Provider>
  );
}

export default App;
