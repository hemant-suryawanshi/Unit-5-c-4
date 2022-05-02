import { useState,useEffect } from "react";

export const NewOrder = () => {
  const [orderdata,newOrderData]=useState([])
  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    fetch(`http://localhost:8080/orders`)
      .then((d) => d.json())
      .then((data) => {
        newOrderData(data)
      });
  };
  
  return (
    <div>
      <div className="form">
        <input
          className="new-problem"
          type="text"
          name="problem"
          placeholder="Enter problem"
        />

        <input
          className="owner-name"
          type="text"
          name="owner_name"
          placeholder="yourname"
          readOnly
        />
        <input
          className="brand"
          type="text"
          name="brand"
          placeholder="Enter brand name"
        />
        <button className="submit">submit</button>
      </div>

      <div className="pastOrders">
       
        <button className="filter">
        </button>

        {/* Here create a div for every oreder, filter them before based on `showUnfinished` */}
        
        <div className="past-orders">
          {/* <span className="id"></span>. */}
           {/* <span className="problem"></span>{" "} */}
          {/* <span className="cost"> */}
            {/* if status is not accepted then keep it empty otherwise show cost like $1234 */}
          {/* </span> */}
          {/* <p className="status">Status: </p> */}
          {/* <hr /> */}

          {orderdata.map((e)=>(
          <div key={e.id}>
            <p className="id">id:{e.id}</p>
            <p  className="problem">Problem:{e.problem}</p>
            <p>Owner Name:{e.owner_name}</p>
            <p>Brand:{e.brand}</p>
            <p className="cost">Cost:${e.cost}</p>
            <p className="status">Status:{e.status}</p>
            <hr></hr>
          </div>
          
        ))}


        </div>
      </div>
    </div>
  );
};


// "id": 1,
// "problem": "OS upgrade",
// "owner_name": "John Doe",
// "brand": "MSI",
// "cost": 206.94,
// "status": "Done"
