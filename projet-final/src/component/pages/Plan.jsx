function Plan (){
    return (
        <div>
        <>
  <header>
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
                  <a href="plan.html">Plans tech et visuels 3D</a>
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
  <h2 id="relevés">PLANS TECHNIQUES ET VISUELS RENDUS </h2>
  <div id="enteteref1"></div>
  <section className="ref">
    <div className="texte1">
      <p className="titreref">EXTENSION GARAGE SUR MAISON INDIVIDUELLE</p>
      <p className="textref">
        Année : 2023
        <br />
        Relevé, plan et visuel rendu pour demande d'autorisation en Mairie
      </p>
    </div>
    <div className="visuel1">
      <video
        controls="controls"
        poster="imgs/longere27p.jpg"
        src="vidéos/plans/longere27.mp4"
      />
    </div>
  </section>
  <section className="ref">
    <div className="texte1">
      <p className="titreref">IMMEUBLE 11bis Passage DOISY. PARIS 17ème Art.</p>
      <p className="textref">
        Année : 2016 à 2020
        <br />
        Maître d'Ouvrage : Copropriété
        <br />
        <br />
        Assistance technique :<br />
        Gestion et suivi de travaux
      </p>
    </div>
    <div className="visuel1">
      <video
        controls="controls"
        poster="imgs/doisy.jpg"
        src="vidéos/plans/doisy.mp4"
      />
    </div>
  </section>
  <section className="ref">
    <div className="texte1">
      <p className="titreref">CAMPUS UNIVERSITE JUSSIEU - PARIS 5ème Art.</p>
      <p className="textref">
        Année : 2019
        <br />
        Maître d'Ouvrage : EPA JUSSIEU
        <br />
        <br />
        Relevé + Plan calepinage pierres :<br />
        Réfection sol pierre parvis
      </p>
    </div>
    <div className="visuel1">
      <video
        controls="controls"
        poster="imgs/jussieu-parvis.jpg"
        src="vidéos/plans/jussieu-parvis.mp4"
      />
    </div>
  </section>
  <footer>
    <p id="p7"> © S.N. 2023</p>
  </footer>
</>
        </div>
        )
}

export default Plan;