import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Guitar from "./components/Guitar.jsx";
import Footer from "./components/Footer.jsx";
import { db } from "./data/db.js";

function App() {
  const [data, setData] = useState(db);
  const [car, setCar]   = useState([]);

  function addToCar(item) {
   
    const itemExist = car.findIndex(guitar => guitar.id === item.id)
    console.log(itemExist);
    //itemExist >= 0 ? console.log("Already added this element...."): item.quantity =1; setCar([...car,item])
    
    if (itemExist >= 0){
        console.log(car,"test");
        const updatedCar = [...car]
        updatedCar[itemExist].quantity++ 
        setCar(updatedCar)
      
    }else{
      item.quantity = 1 ; 
      setCar([...car,item])
    }
  
  }


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
              addToCar={addToCar}
            
             
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
