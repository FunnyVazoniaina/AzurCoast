# Côte d’Azur – Site Touristique

> **Statut : Projet de test**  
> Plateforme web moderne présentant les plus beaux lieux, activités et conseils pour découvrir la Côte d’Azur.

---

## Description

Ce projet est une application web développée avec **React** et **TailwindCSS**, permettant de mettre en valeur les destinations, plages, monuments et événements emblématiques de la Côte d’Azur.  
L’objectif est d’offrir une expérience intuitive, rapide et responsive pour les utilisateurs souhaitant organiser leur visite.

---

## Fonctionnalités prévues

- **Catalogue d’endroits** : plages, musées, villages, parcs, restaurants…  
- **Galeries photos** avec descriptions.    
- **Design responsive** pour mobile, tablette et desktop.  
- Performance optimisée grâce à React + TailwindCSS.

---

## Stack technique

- **React 18** – Librairie pour construire l’interface.  
- **Vite** – Outil de bundling.  
- **TailwindCSS** – Framework CSS utilitaire pour un design.  
- **pnpm** – Gestionnaire de paquets.

---

## Structure du projet (simplifiée)

```
AzurCoast/
├── public/               # Fichiers statiques
├── src/
│   ├── components/       # Composants réutilisables (Navbar, Footer, Cards…)
│   ├── pages/            # Pages principales (Accueil, Destinations, Contact…)
│   ├── assets/           # Images, icônes
│   ├── App.tsx           # Point d’entrée React
│   └── main.tsx          # Bootstrapping de l’app
├── tailwind.config.js
├── package.json
└── README.md
```

---

## Installation & démarrage

> Assurez-vous d’avoir **Node.js ≥ 18** et **pnpm** installés.

```bash
# 1️⃣ Cloner le projet
git clone <url-du-repo>
cd AzurCoast

# 2️⃣ Installer les dépendances
pnpm install

# 3️⃣ Lancer le serveur de développement
pnpm dev

# 4️⃣ Construire la version production
pnpm build

# 5️⃣ (Optionnel) Prévisualiser le build
pnpm preview
```

L’application sera accessible à l’adresse : **http://localhost:5173**

---

## Design & ergonomie

- Palette de couleurs inspirée de la mer, du sable et du soleil (bleu azur, blanc, jaune doux).  
- Interface claire, minimaliste et fluide.  
- Utilisation des composants Tailwind pour la cohérence du design.

---

## Auteur 

Ce projet a été dévéloppé par : **Funny** VAZONIAINA



