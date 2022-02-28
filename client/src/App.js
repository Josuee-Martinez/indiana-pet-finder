import "./App.css";
import FormSearch from "./components/forms/Form";
import Layout from "./hoc/Layout";
import AnimalContainer from "./components/Animals/AnimalContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./utility/GlobalState";
import {AnimalProvider} from "./utility/AnimalData"

function App() {

  return (
    <AuthProvider>
      <AnimalProvider>
        <Layout>
          <FormSearch />
          <AnimalContainer />
        </Layout>
      </AnimalProvider>
    </AuthProvider>
  );
}

export default App;
