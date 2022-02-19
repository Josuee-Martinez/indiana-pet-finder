import React, {useState} from 'react'
import Form from "react-bootstrap/Form";



const FormSearch = (e) =>{
  const [formValue, setFormValue] = useState({
    type:'',
    zipcode:''
  })


  const handleSubmit = (e,data) =>{
    e.preventDefault();
    console.log(data)

  }

  const handleChange = (e) =>{
    
    const {name, value} = e.target;
    setFormValue({...formValue, [name]:value})
      
  }

  return (
      <Form onSubmit={(e)=>handleSubmit(e, formValue)} className=" mx-auto my-5 mb-3" style={{ width: "35%" }}>
        <Form.Group className="mb-2 p-4">
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
            type="number"
            placeholder="Enter Zipcode"
            value={formValue.zipcode}
            name="zipcode"
            required
          />
        </Form.Group>
      <button onSubmit={(e)=>handleSubmit(e, formValue)}>submit</button>
      </Form>
     
  );
}

export default FormSearch