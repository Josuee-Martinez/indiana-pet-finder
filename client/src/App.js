import "./App.css";
import FormSearch from "./components/forms/Form";
import Layout from "./hoc/Layout";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
   return <Layout>
      <FormSearch />
   </Layout>;
}

export default App;
