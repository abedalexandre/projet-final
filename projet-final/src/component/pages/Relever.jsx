function Relever(){
    return(
        <div>
            
  {/* <header>
    <h1>Métreur - Economis te de la Construction</h1>
    <img className="img1" src="imgs/oeil-3.png" alt="Logo oeil Batistic" />
    <p id="p0">BATISTIC</p>
    <p id="p1">
      {" "}
      L'oeil<span className="span-1">___________________</span> et l'expertise
      d'un spécialiste bâtiment
    </p>

  <nav>
    <div className="table1">
      <ul>
        <li className="menu-ind">
          <a href="index.html">Accueil</a>
        </li>
        <li className="menu-focus">
          <a href="index.html#ancre1">Focus Métier</a>
        </li>
        <li className="menu-presta">
          <a href="index.html#ancre2">Prestations</a>
        </li>
        <li className="menu-ref">
          <ul id="menu-vertical">
            <li>
              <a href="index.html#ancre3">Références ▼ </a>
              <ul>
                <li>
                  <a href="relevé.html">Relevés sur sites</a>
                </li>
                <li>
                  <a href="métré.html">Métrés sur plans</a>
                </li>
                <li>
                  <a href="étude-prix.html">Etudes de prix</a>
                </li>
                <li>
                  <a href="prescription.html">Prescriptions</a>
                </li>
                <li>
                  <a href="plans.html">Plans tech et visuels 3D</a>
                </li>
                <li>
                  <a href="assist-mo.html">Assistance M.O - M.O.E.</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="menu-contact">
          <a href="index.html#ancre4">Contact</a>
        </li>
        <li>
          <a id="menu-mail" href="mailto:s.nicolas@batistic.fr">
            <img className="lien-mail" src="imgs/mail.jpg" alt="icone mail" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
  </header> */}
  <h2 id="relevés">RELEVES SUR SITES</h2>
  <div id="enteteref1"></div>
  <section className="ref">
    <div className="texte1">
      <p className="titreref">Résidence 11, Rue St Yves - PARIS 14ème Art</p>
      <p className="textref">
        Année : 2016
        <br />
        Maître d'Ouvrage : DOMNIS
        <br />
        <br />
        Relevé + Métrés Appel d'Offres :<br />
        Mesures conservatoires sur souches de <br />
        cheminées en toiture
      </p>
    </div>
    <div className="visuel1">
      <video
        controls="controls"
        poster="vidéos/relevés/20.jpg"
        src="vidéos/relevés/rue_st_yves.mp4"
      />
    </div>
  </section>
  <section className="ref">
    <div className="texte1">
      <p className="titreref">
        Immeuble 214, Rue de la Convention - Paris 15ème Art.
      </p>
      <p className="textref">
        Année : 2017
        <br />
        Maître d'Ouvrage : Copropriété
        <br />
        <br />
        Relevé, Métré et Chiffrage Appel d'Offres :<br />
        Ravalement des façades sur cour{" "}
      </p>
    </div>
    <div className="visuel">
      <video
        id="convention"
        controls="controls"
        poster="vidéos/relevés/convention.jpg"
        src="vidéos/relevés/p15-convention.mp4"
      />
    </div>
  </section>
  <footer>
    <p id="p7"> © S.N. 2023</p>
  </footer>


        </div>

    )

}
export default Relever;