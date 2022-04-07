import "./tableObject.js";

function Choix() {
  const Price1 = 10;
  const Price2 = 100;
  const Price3 = 1;

  return ( // si je clique sur le bouton "ajouter au panier", ça ajoute une ligne dans le panier avec le nom du cv et son prix
    <div className="affichage">
      <h2>Votre Panier</h2>
      <ul>
        <li>Thème CV 1 : {Price1} €</li>
        <li>Thème CV 2 : {Price2} €</li>
        <li>Thème CV 3 : {Price3} €</li>
      </ul>

      Total :{Price1 + Price2 + Price3}€
      
      <br></br>
      <br></br>
      <br></br>

    </div>
  );
}
export default Choix;
