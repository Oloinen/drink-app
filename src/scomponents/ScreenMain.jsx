import React, { useState, useEffect } from "react";
import {fetchMainData, createDrink} from "../service/FetchClient";
import ScreenForm from "./ScreenForm.jsx";
import Drink from './Drink'
import '../styles/ScreenMain.css'

const ScreenMain = () => {
  const  [drinks, setDrinks] = useState([]);

  const getDrinks = () => {
    fetchMainData().then(res => setDrinks(res));
  };

  const addDrink = data => {
    createDrink(data).then(res => {
      getDrinks();
    });
  };

  useEffect(() => {
    getDrinks();
  }, []);

  let DrinkRow = drinks.map((oneDrink) => {
    return (<Drink oneDrink = {oneDrink} key = {oneDrink.id}/>)
})

  return (
    <div className="row">
      <div className="container" id="contact">
          <h1>Lisää juoma</h1>
        <ScreenForm addDrink={addDrink} />
      </div>
      <div className="drinkContainer">
        <table>
            <thead>
                <tr>
                    <td>Päivämäärä</td>
                    <td>Juomatyyppi</td>
                    <td>Juoman nimi</td>
                </tr>
            </thead>
            <tbody>
                {DrinkRow}
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScreenMain;
