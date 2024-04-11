

function Header() {

    return( 
    <>
    <header> 
        <h1>Métreur - Economiste de la Construction</h1> 
    <img className="img1" src="./imgs/oeil-3.png" alt="Logo oeil Batistic"/>
        <p id="p0">BATISTIC</p>
        <p id="p1"> L'oeil<span class="span-1">___________________</span> et l'expertise d'un spécialiste bâtiment</p>
        <nav>
            <div className="table1">
                <ul>
                    <li className="menu-ind">
                        <a href="/">Accueil</a>
                    </li>
                    <li className="menu-focus">
                        <a href="/ancre1">Focus Métier</a>
                    </li>
                    <li className="menu-presta">
                        <a href="/etudedeprix">Prestations</a>
                    </li>
                    <li className="menu-ref">
                        <ul id="menu-vertical">
                            <li><a href="/ancre3">Références ▼ </a>
                                <ul>
                                    <li><a href="/relever">Relevés sur sites</a></li>
                                    <li><a href="/metre">Métrés sur plans</a></li>
                                    <li><a href="/etude-prix">Etudes de prix</a></li>
                                    <li><a href="/prescriptions">Prescriptions</a></li>
                                    <li><a href="/plans">Plans tech et visuels 3D</a></li>
                                    <li><a href="/assist-mo">Assistance M.O - M.O.E.</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="menu-contact">
                        <a href="index.html#ancre4">Contact</a>
                    </li>
                    <li>
                        <a id="menu-mail" href="mailto:s.nicolas@batistic.fr">
                            <img className="lien-mail" src="imgs/mail.jpg" alt="icone mail"/>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        
    </header>
    </>


)}
export default Header