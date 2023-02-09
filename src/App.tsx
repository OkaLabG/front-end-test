import Content from "./components/Content";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import { Table } from "./components/Table";
import "./styles/components/app.sass";

function App() {
  return (
    <div id="app">
      <Header />
      <Content />
    </div>
  );
}

export default App;
