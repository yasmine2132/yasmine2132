

// 1. STOCKAGE DES DONNÉES DES PRESTATIONS (Tableau JS - AVEC LIENS)

// Les données et les chemins des images sont stockés proprement sous forme de propriétés.
const prestations = [
    // --- CATÉGORIE : COIFFURE & CHEVEUX ---
    { 
        id: 1, 
        nom: "Coupe & Brushing", 
        categorie: "coiffure", 
        description: "Coupe tendance adaptée à votre visage et finition brushing parfait.", 
        prix: "2500 DA",
        
        image:"./images/brushing.png"
    
    },
    { 
        id: 2, 
        nom: "Coloration Prestige", 
        categorie: "coiffure", 
        description: "Teinture complète avec des produits protecteurs d'éclat.", 
        prix: "4500 DA",
        image: "./images/coloration.png" 
    },
    { 
        id: 3, 
        nom: "Lissage Protéine / Kératine", 
        categorie: "coiffure", 
        description: "Soin lissant profond pour des cheveux brillants, soyeux et sans frisottis.", 
        prix: "12000 DA",
        image: "./images/lissage.png" 
    },
    { 
        id: 4, 
        nom: "Mèches & Balayage", 
        categorie: "coiffure", 
        description: "Éclaircissement naturel pour donner du relief et de la lumière à votre chevelure.", 
        prix: "6500 DA",
        image: "./images/meches.png" 
    },
    { 
        id: 5, 
        nom: "Soin Profond au Botox Capillaire", 
        categorie: "coiffure", 
        description: "Soin rajeunissant qui répare les cheveux abîmés, booste le volume et ravive la brillance.", 
        prix: "8000 DA",
        image: "./images/botox.png" 
    },
    { 
        id: 6, 
        nom: "Chignon de Mariée / Haute Coiffure", 
        categorie: "coiffure", 
        description: "Coiffure événementielle sophistiquée adaptée pour vos fêtes et mariages.", 
        prix: "10000 DA",
        image: "./images/chignon.png" 
    },
    { 
        id: 7, 
        nom: "Soin Anti-Chute aux Huiles Essentielles", 
        categorie: "coiffure", 
        description: "Traitement purifiant et stimulant du cuir chevelu pour freiner la chute et booster la repousse.", 
        prix: "4000 DA",
        image: "./images/huile.png" 
    },

    // --- CATÉGORIE : SOINS DU VISAGE & CORPS ---
    { 
        id: 8, 
        nom: "Soin Hydrafacial", 
        categorie: "soins", 
        description: "Nettoyage en profondeur, exfoliation et hydratation intense de la peau.", 
        prix: "6000 DA",
        image: "./images/hydrafaciale.png" 
    },
    { 
        id: 9, 
        nom: "Soin Visage Éclat", 
        categorie: "soins", 
        description: "Masque vitaminé et massage facial pour redonner de la fraîcheur aux teints ternes.", 
        prix: "3500 DA",
        image: "./images/soin.png" 
    },
    { 
        id: 10, 
        nom: "Extension de Cils (Cil à cil)", 
        categorie: "soins", 
        description: "Pose minutieuse pour intensifier le regard avec un effet naturel et durable.", 
        prix: "5000 DA",
        image: "./images/extention.png" 
    },
    { 
        id: 11, 
        nom: "Microblading Sourcils", 
        categorie: "soins", 
        description: "Technique de maquillage semi-permanent pour redessiner parfaitement vos sourcils.", 
        prix: "15000 DA",
        image: "./images/microplading.png" 
    },
    { 
        id: 12, 
        nom: "Peeling Doux aux Acides de Fruits", 
        categorie: "soins", 
        description: "Soin rénovateur de peau pour lisser le grain, atténuer les taches et resserrer les pores.", 
        prix: "5500 DA",
        image: "./images/peeling.png" 
    },
    { 
        id: 13, 
        nom: "Soin Visage Anti-Âge au Collagène", 
        categorie: "soins", 
        description: "Traitement raffermissant et repulpant pour lisser les rides et redessiner l'ovale du visage.", 
        prix: "7000 DA",
        image: "./images/clarins.png" 
    },
    { 
        id: 14, 
        nom: "Soin Purifiant Anti-Imperfections", 
        categorie: "soins", 
        description: "Soin ciblé pour peaux mixtes à grasses avec extraction des comédons et masque désincrustant.", 
        prix: "4500 DA",
        image: "./images/purifiant.png" 
    },

    // --- CATÉGORIE : ONGLERIE ---
    { 
        id: 15, 
        nom: "Manucure Russe", 
        categorie: "onglerie", 
        description: "Soin des cuticules précis suivi de la pose d'un vernis permanent.", 
        prix: "3000 DA",
        image: "./images/manicure.png" 
    },
    { 
        id: 16, 
        nom: "Extension Gel / Faux Ongles", 
        categorie: "onglerie", 
        description: "Rallongement des ongles en gel avec capsules ou chablons et Nail Art personnalisé.", 
        prix: "5500 DA",
        image: "./images/gel.png" 
    },
    { 
        id: 17, 
        nom: "Beauté des Pieds Complète", 
        categorie: "onglerie", 
        description: "Pédicure, gommage des callosités, massage relaxant et pose de vernis.", 
        prix: "3500 DA",
        image: "./images/pieds.png" 
    },
    { 
        id: 18, 
        nom: "Remplissage Gel", 
        categorie: "onglerie", 
        description: "Entretien mensuel pour combler la repousse de vos extensions en gel.", 
        prix: "2800 DA",
        image: "./images/ongles.png" 
    }
];


// 2. AFFICHAGE ET FILTRAGE DYNAMIQUE (Utilisation du lien de l'objet)

function afficherPrestations(categorieChoisie) {
    const container = document.getElementById('prestations-container');
    if (!container) return; // Sécurité

    container.innerHTML = ""; // On vide la grille avant de réafficher

    // Filtrer le tableau selon la catégorie choisie
    const listeFiltrée = prestations.filter(item => categorieChoisie === 'tous' || item.categorie === categorieChoisie);

    // Boucle pour générer les cartes HTML dynamiquement
    listeFiltrée.forEach(prod => {
        const carte = document.createElement('div');
        carte.className = 'product-card';
        
        // Ici, on récupère directement le lien propre à chaque objet : prod.image
        carte.innerHTML = `
            <img src="${prod.image}" alt="${prod.nom}" class="product-img">
            <div class="product-info">
                <div>
                    <h3>${prod.nom}</h3>
                    <p>${prod.description}</p>
                </div>
                <div>
                    <p class="product-price">${prod.prix}</p>
                    <a href="./reservation.html" class="btn btn-block">Réserver</a>
                </div>
            </div>
         `;
        container.appendChild(carte);
    });
}

function filtrerPrestations(categorie) {
    // Gérer l'état visuel actif sur les boutons de filtre
    const boutons = document.querySelectorAll('.btn-filter');
    boutons.forEach(btn => btn.classList.remove('active'));
    
    // Ajouter la classe active au bouton cliqué
    event.target.classList.add('active');
    
    // Recharger les prestations filtrées
    afficherPrestations(categorie);
}


// 3. AUTHENTIFICATION SIMULÉE AVEC LOCALSTORAGE

if (!localStorage.getItem('utilisateurs')) {
    const defaultUsers = [
        { nom: "Amel Benz", email: "amel@gmail.com", pass: "123456" }
    ];
    localStorage.setItem('utilisateurs', JSON.stringify(defaultUsers));
}

function basculerFormulaire(type) {
    const loginBox = document.getElementById('login-box');
    const registerBox = document.getElementById('register-box');
    
    if (type === 'register') {
        loginBox.style.display = 'none';
        registerBox.style.display = 'block';
    } else {
        loginBox.style.display = 'block';
        registerBox.style.display = 'none';
    }
}

function gererConnexion(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const pass = document.getElementById('login-password').value;
    const errorBox = document.getElementById('login-error');

    const utilisateurs = JSON.parse(localStorage.getItem('utilisateurs'));
    const uTrouve = utilisateurs.find(u => u.email === email && u.pass === pass);

    if (uTrouve) {
        localStorage.setItem('connectedUser', uTrouve.nom);
        errorBox.style.display = 'none';
        alert('Connexion réussie !');
        window.location.reload(); 
    } else {
        errorBox.innerText = "Email ou mot de passe incorrect.";
        errorBox.style.display = 'block';
    }
}

function gererInscription(event) {
    event.preventDefault();
    const nom = document.getElementById('reg-nom').value;
    const email = document.getElementById('reg-email').value;
    const pass = document.getElementById('reg-password').value;
    
    const emailError = document.getElementById('reg-email-error');
    const passError = document.getElementById('reg-pass-error');
    const successBox = document.getElementById('register-success');

    emailError.innerText = "";
    passError.innerText = "";

    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regexEmail.test(email)) {
        emailError.innerText = "Format d'adresse email non valide.";
        return;
    }

    if (pass.length < 6) {
        passError.innerText = "Le mot de passe doit faire au moins 6 caractères.";
        return;
    }

    let utilisateurs = JSON.parse(localStorage.getItem('utilisateurs'));
    
    if (utilisateurs.some(u => u.email === email)) {
        emailError.innerText = "Cet email est déjà utilisé.";
        return;
    }

    utilisateurs.push({ nom: nom, email: email, pass: pass });
    localStorage.setItem('utilisateurs', JSON.stringify(utilisateurs));

    successBox.innerText = "Compte créé avec succès ! Redirection...";
    successBox.style.display = "block";
    document.getElementById('form-register').reset();
    setTimeout(() => basculerFormulaire('login'), 2000);
}

function verifierSession(prefixeChemin = "") {
    const navAuth = document.getElementById('nav-auth');
    const userConnecte = localStorage.getItem('connectedUser');

    if (navAuth && userConnecte) {
        navAuth.innerText = "Mon Espace (" + userConnecte + ")";
        navAuth.href = prefixeChemin + "content/connexion.html";
    }
}

function afficherEspacePerso() {
    const userConnecte = localStorage.getItem('connectedUser');
    const loginBox = document.getElementById('login-box');
    const registerBox = document.getElementById('register-box');
    const welcomeBox = document.getElementById('welcome-box');
    const welcomeText = document.getElementById('welcome-text');

    if (userConnecte && welcomeBox) {
        if (loginBox) loginBox.style.display = 'none';
        if (registerBox) registerBox.style.display = 'none';
        welcomeBox.style.display = 'block';
        welcomeText.innerHTML = `Bienvenue dans votre espace personnel, <strong>${userConnecte}</strong> ! <br>Vous pouvez planifier vos réservations en toute sécurité.`;
    }
}

function deconnexion() {
    localStorage.removeItem('connectedUser');
    alert('Vous êtes déconnecté.');
    window.location.reload();
}


// 4. VALIDATION FORMULAIRE DE RÉSERVATION

function validerReservation(event) {
    event.preventDefault();
    const tel = document.getElementById('res-tel').value;
    const telError = document.getElementById('tel-error');
    const successBox = document.getElementById('res-success');

    telError.innerText = "";

    const regexAlgerieTel = /^0(5|6|7)\d{8}$/;

    if (!regexAlgerieTel.test(tel)) {
        telError.innerText = "Le numéro doit être un numéro algérien valide (+213).";
        return;
    }

    const service = document.getElementById('res-service').value;
    const date = document.getElementById('res-date').value;

    successBox.innerHTML = `<strong>Réservation validée !</strong><br>Prestation : ${service}<br>Date retenue : ${date}<br>Un SMS de confirmation a été simulé au ${tel}.`;
    successBox.style.display = "block";
    document.getElementById('form-reservation').reset();
}