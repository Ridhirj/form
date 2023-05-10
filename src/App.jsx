import React from "react";
import Form from "./pages/Form";
import PlanProvider from "./context/PlanProvider";

const App = () => {
  return (
    <PlanProvider>
      <div>
        <Form />
      </div>
    </PlanProvider>
  );
};

export default App;