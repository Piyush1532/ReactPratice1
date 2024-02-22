import React, { useState } from 'react'

const FormComp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email:'',
    password: '',
    address:'',
    city:''
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 

    fetch("http://localhost:3000/Form-Data", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      // Handle response
      console.log('Form data sent successfully');
    })
    .catch(error => {
      // Handle error
      console.error('Error sending form data:', error);
    });
  };
  return (
    <div>
      <div className="container my-5 ">
   
    <form className="col-md-5" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" name='name' value={formData.name} onChange={handleInputChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" name='email' placeholder="name@example.com" value={formData.email} onChange={handleInputChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" name='password' placeholder="Enter your password" value={formData.password} onChange={handleInputChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <input type="text" className="form-control" id="address" placeholder="Enter your address" name='address' value={formData.address} onChange={handleInputChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="city" className="form-label">City</label>
        <input type="text" className="form-control" id="city" placeholder="Enter your city"  name='city' value={formData.city} onChange={handleInputChange}/>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
 
    </div>
  )
}

export default FormComp


// <form onSubmit={handleSubmit}>
// <label htmlFor="username">Username:</label>
// <input
//   type="text"
//   id="username"
//   name="username"
//   value={formData.username}
//   onChange={handleInputChange}
// />
// <label htmlFor="password">Password:</label>
// <input
//   type="password"
//   id="password"
//   name="password"
//   value={formData.password}
//   onChange={handleInputChange}
// />
// <button type="submit">Submit</button>
// </form>