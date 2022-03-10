import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useAnimalStore} from "../../utility/AnimalData";
import axios from "axios";
// import Cookies from "js-cookie";
import {useNavigate} from 'react-router-dom'

const FormSearch = (e) => {
   const [state, setAnimalState] = useAnimalStore();
  const [formValue, setFormValue] = useState({
    type: "",
    location: "",
  });
  let navigate = useNavigate();

  useEffect(() => {

  },[state?.data?.animals])
  const handleSubmit = (e, data) => {
    const token = localStorage.getItem("token");
    const config = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    e.preventDefault();

    const testData = {
      type: data?.type,
      location: data?.location,
    };

    const body = JSON.stringify({
      type: data?.type,
      location: data?.location,
    });

    const res = axios
      .post("http://localhost:5000/api/petdata", body, config)
      .then((res) => {

        try{
          setAnimalState(res)
          if(res){
            navigate("/pets")
          }
        }catch(err){
          console.log(err)
        }
         
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };


  
return (
  <Form
    onSubmit={(e) => handleSubmit(e, formValue)}
    className=" mx-auto my-5 mb-3 col-25"
  >
    <Form.Group className=" mb-2 p-4">
      <Form.Label>Cat or Dog</Form.Label>
      <Form.Control
        onChange={handleChange}
        type="text"
        placeholder="type Cat or Dog"
        value={formValue.type}
        name="type"
        required
      />
    </Form.Group>
    <Form.Group className="mb-2 p-4">
      <Form.Label>Zipcode</Form.Label>
      <Form.Control
        onChange={handleChange}
        type="text"
        placeholder="Enter City"
        value={formValue.location}
        name="location"
        required
      />
      <button className="m-5" onSubmit={(e) => handleSubmit(e, formValue)}>
        submit
      </button>
    </Form.Group>
  </Form>
);
  

  
};

export default FormSearch;

