import React from "react";
import ReactDOM from 'react-dom';

const Modal = ({isShowing, oneDrink, hide}) => {

  const {id, date, btype, name, price, desiltr, permille, place} = oneDrink;

  let modal = <>
        <div className={isShowing ? "overlay" : "hide"} onClick={hide}/>
        <div className={isShowing ? "modal-wrapper": "hide" } aria-modal aria-hidden tabIndex={-1} role="dialog">
          <div className={isShowing ? "modal" : "hide"}>
          <button onClick={hide}>X</button>
          <h1>{btype}</h1>
          <p>{name}</p>
          <p>{date}</p>
        </div>
        </div>
        </>

    return modal;
    /*createPortal(modal, document.getElementById('modal-root'))*/
}

const ScreenModal = ({ isShowing, hide, oneDrink}) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div>
      <Modal 
        isShowing = {isShowing}
        hide = {hide}
        oneDrink = {oneDrink}/>
      </div>
  </React.Fragment>, document.getElementById('modal-root')) : null;

export default ScreenModal;