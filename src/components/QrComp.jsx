

import './qr-styles.css'
function QrComp(){


  return(
    <div className="card">
      <img className="card__img" src='/public/image-qr-code.png'alt="qr"/>
      <h2 className="card__text">Hello world, this is a component in REACT, it is awesome</h2>
      <p className="card__description">Here, I am practicing how to make a component to call it from the main component. It is fun.</p>
    </div>

  );  
}

export default QrComp;

