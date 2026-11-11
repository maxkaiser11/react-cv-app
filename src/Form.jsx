import { useState } from "react";

const Form = ({ onSubmit }) => {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    profession: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stop the page from reloading
    console.log(fields);
    onSubmit(fields);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={fields.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={fields.email}
          onChange={handleChange}
        />

        <label htmlFor="profession">Profession</label>
        <input
          id="profession"
          name="profession"
          type="text"
          value={fields.profession}
          onChange={handleChange}
        />

        <label htmlFor="location">Location</label>
        <input
          id="location"
          name="location"
          type="text"
          value={fields.location}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
