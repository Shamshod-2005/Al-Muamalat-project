import "./App.css";
import Router from "./router";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Router />
      <Toaster richColors position="top-right" />
    </>
  );
}

export default App;
