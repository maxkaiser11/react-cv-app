import { useState } from "react";
import Form from "./Form";

const App = () => {
  const [information, setInformation] = useState(null);

  return (
    <div>
      <h1>Hello World</h1>
      <Form onSubmit={setInformation} />
      {information && (
        <div>
          <p>Name: {information.name}</p>
          <p>Email: {information.email}</p>
          <p>Profession: {information.profession}</p>
          <p>Name: {information.location}</p>
        </div>
      )}
    </div>
  );
};

export default App;
