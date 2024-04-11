function EtudePrix (){
    return (
     <div>
         {/* <header>
    <h1>Métreur - Economiste de la Construction</h1>
    <img className="img1" src="imgs/oeil-3.png" alt="Logo oeil Batistic" />
    <p id="p0">BATISTIC</p>
    <p id="p1">
      {" "}
      L'oeil<span className="span-1">___________________</span> et l'expertise
      d'un spécialiste bâtiment
    </p>
  </header>
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
                  <a href="prescriptions.html">Prescriptions</a>
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
  </nav> */}
  <h2 id="etude-prix">ETUDES DE PRIX</h2>
  <div id="enteteref2"></div>
  <section className="ref">
    <div className="texte2">
      <p className="titreref">C.E.A. AULNAY S/s BOIS</p>
      <p className="textref">
        Année : 2023
        <br />
        Maître d'Ouvrage : Société du Grand Paris.
        <br />
        <br />
        Métré et chiffrage terrassement pour réseaux <br />
        secs post ouvrages construits avec description
        <br />
        du mode opératoire via modélisation 3D.
        <br />
        <br />
        Phase Exécution.
      </p>
    </div>
    <div className="visuel2">
      <video
        controls="controls"
        poster="vidéos/études-prix/cea-aulnay.jpg"
        src="vidéos/études-prix/rzo-cea-aulnay.mp4"
      />
    </div>
  </section>
  <section className="ref">
    <div className="texteimg">
      <p className="titreref">
        ECOLE PRIMAIRE DU CENTRE VILLE
        <br />
        BAGNEUX (92)
      </p>
      <p className="textref">
        Année : 2018
        <br />
        Maître d'Ouvrage : VILLE DE BAGNEUX
        <br />
        <br />
        Métrés + Etude de prix Lots Plâtrerie et Faux-Plafonds <br />
        <br />
        Phase Appels d'Offres
      </p>
    </div>
    
    <div className="visuelimg2">
      <img
        id="ecole-bagneux"
        src="imgs/ecole-bagneux.jpg"
        alt="image-école-centre-Bagneux"
      />
    </div>

  </section>

  <section className="ref">
    <div className="texteimg">
      <p className="titreref">IMMEUBLE 49, rue Carnot - LEVALLOIS (92)</p>
      <p className="textref">
        Année : 2018
        <br />
        Maître d'Ouvrage : Copropriété
        <br />
        Architecte : BJL Architecte
        <br />
        <br />
        Relevé, Croquis 3D, Métrés et Etude de prix Ravalement des façades{" "}
        <br />
        <br />
        Phase Appels d'Offres
      </p>
    </div>
    <div className="visuelimg">
      <img
        src="imgs/imm-carnot-levallois.jpg"
        alt="image ravalement immeuble Carnot à Levallois"
      />
    </div>
  </section>
  <section className="ref">
    <div className="texteimg">
      <p className="titreref">
        TECHNICENTRE SNCF - PARIS ST LAZARE
        <br />
        Reconstruction du bâtiment FORUM
      </p>
      <p className="textref">
        Année : 2015
        <br />
        Maître d'Ouvrage : SNCF - DTIRP
        <br />
        Maître d'Oeuvre : Dimitri TOROSSIAN
        <br />
        <br />
        Métré - Prédimensionnement et chiffrage Lot Charpente.Métallique. <br />
        Phase Appels d'Offres{" "}
      </p>
    </div>
    <div className="visuelimg2">
      <img src="imgs/technicentre.jpg" alt="image forum technicentre SNCF" />
    </div>
  </section>
  <footer>
    <p id="p7"> © S.N. 2023</p>
  </footer>
     </div>
    )
 }
 export default EtudePrix;