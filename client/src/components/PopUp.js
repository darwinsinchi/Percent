import React, { useRef } from "react";

function PopUp({ setPopUp }) {
  const modalRef = useRef();
  const handleExit = (e) => {
    if (modalRef.current === e.target) {
      setPopUp(false);
    }
  };
  return (
    <div>
      <div className="popUp" ref={modalRef} onClick={handleExit}>
        <div className="popUpInner">
          <button className="exit" onClick={() => setPopUp(false)}>
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
