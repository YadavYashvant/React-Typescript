import { useState } from "react";
import Alert from "./components/alert";
import Button from "./components/Button";
import ListGroup from "./ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div style={{margin:"20px"}}>

      <ListGroup></ListGroup>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My most favorite car among them is <strong>Pagani Huayara</strong></Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Click Me!</Button>

    </div>
  );
}
export default App;
