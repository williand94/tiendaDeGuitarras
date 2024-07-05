import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Guitar from "./components/Guitar.jsx";
import Footer from "./components/Footer.jsx";
import { db } from "./data/db.js";

function App() {
  const [data, setData] = useState(db);
  const [car, setCar]   = useState([]);
  return (
    <>
      <Header />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {data.map(guitar => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              setCar={setCar}
            
             
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
