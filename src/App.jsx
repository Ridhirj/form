import React from "react";
import Form from "./pages/Form";
import PlanProvider from "./context/PlanProvider";
import "./styles/app.css"

const App = () => {
  return (
    <PlanProvider>
      <main>
        <Form />
      </main>
    </PlanProvider>
  );
};

export default App;