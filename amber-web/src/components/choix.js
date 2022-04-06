function Choix() {
  const Price1 = 10.5;
  const Price2 = 11.75;
  const Price3 = 11.25;

  return (
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
