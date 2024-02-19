// FormComponent.jsx
import React, { useState } from 'react';

const FormComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create an object with form data
    const formData = {
      name: name,
      email: email
    };

    // Save data to local storage
    saveDataToLocal(formData);

    // Optionally, you can also display a success message or reset the form
    setName('');
    setEmail('');
  };

  const saveDataToLocal = (data) => {
    // Check if local storage is available
    if (typeof Storage !== "undefined") {
      // Get existing data or initialize as an empty array
      const existingData = JSON.parse(localStorage.getItem('formData')) || [];

      // Add new data to existing data
      existingData.push(data);

      // Save updated data back to local storage
      localStorage.setItem('formData', JSON.stringify(existingData));
    } else {
      console.error("Local storage is not supported in this browser");
      // Handle error - Local storage is not supported
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
