import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [Navbar, setNavbar] = useState("");
  const [footer, setfooter] = useState("");
  useEffect(() => {
    api
      .get("/users/getNavbar")
      .then((resp) => {
        setNavbar(resp.data);
      })
      .catch((err) => {});
    api
      .get("/users/getFooter")
      .then((resp) => {
        setfooter(resp.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: Navbar }}></div>
      <div dangerouslySetInnerHTML={{ __html: footer }}></div>
    </div>
  );
}

export default App;
