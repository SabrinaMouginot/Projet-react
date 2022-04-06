import "./choix.js";
import "./produitsliste.css";

import cv1 from "../assets/cv1.png";
import cv2 from "../assets/cv2.png";
import cv3 from "../assets/cv3.png";

function produitsListe() {
  return (
    <div className="listeProduitstyle">
      <h2>Liste des produits</h2>
      <ul>
        <li>
          <h3>Thème CV 1</h3>
          <img src={cv1} className="cv_icon" alt="logo" />
          <button onClick={() => produitsListe(cv1)}>
            Ajouter au panier
          </button>
        </li>
        <li>
          <h3>Thème CV 2</h3>
          <img src={cv2} className="cv_icon" alt="logo" />
          <button onClick={() => produitsListe(cv2)}>
            Ajouter au panier
          </button>
        </li>
        <li>
          <h3>Thème CV 3</h3>
          <img src={cv3} className="cv_icon" alt="logo" />
          <button onClick={() => produitsListe(cv3)}>
            Ajouter au panier
          </button>
        </li>
      </ul>
    </div>
  );
}

export default produitsListe;
