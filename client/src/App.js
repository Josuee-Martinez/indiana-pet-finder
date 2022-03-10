import React from "react";
import "./App.css";
import FormSearch from "./components/forms/Form";
import Layout from "./hoc/Layout";
import AnimalContainer from "./components/Animals/AnimalContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./utility/GlobalState";
import { AnimalProvider } from "./utility/AnimalData";
import AnimalDetails from "./components/Animals/AnimalDetails";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  let routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="pets" element={<AnimalContainer />} />
      <Route path="pets/:id" element={<AnimalDetails />} />
    </Routes>
  );

  return (
    <BrowserRouter>
      <AuthProvider>
        <AnimalProvider>
          <Layout>
            <FormSearch />
            {routes}
          </Layout>
        </AnimalProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
