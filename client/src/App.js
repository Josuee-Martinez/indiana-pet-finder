import "./App.css";
import FormSearch from "./components/forms/Form";
import Layout from "./hoc/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./utility/GlobalState";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <FormSearch />
      </Layout>
    </AuthProvider>
  );
}

export default App;
