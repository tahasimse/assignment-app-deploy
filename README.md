# Assignment Management App 

**Auteur:** Taha Simsek  
**Cours:** Angular - M1 MIAGE (UCA)

## Architecture
- **Frontend:** Angular 20, hébergé sur [Render.com](https://assignment-app-simsek-front.onrender.com)
- **Backend:** Node.js/Express API, hébergé sur [Render.com](https://assignment-app-simsek.onrender.com)
- **Base de données:** MongoDB Atlas (Cloud)

## Utilisateurs de Test
| Rôle | Login | Mot de passe | Droits |
|------|-------|--------------|--------|
| **Admin** | `admin` | `admin` | Accès complet (Ajout, Modification, Suppression, Peupler/Vider BD) |
| **User** | `user` | `user` | Accès limité (Modification du statut "Rendu" uniquement, pas d'ajout/suppression) |
| **Guest** | *(Aucun)* | *(Aucun)* | Lecture seule (Liste et Détails) |

## Fonctionnalités Implémentées
- **Services & Routes:** Architecture modulaire avec services Angular et routage complet.
- **Authentification & Guards:** 
  - `AuthGuard` protège les routes d'ajout et d'édition.
  - Gestion des rôles (Admin vs User vs Guest).
- **CRUD Complet:**
  - Ajout d'un devoir (Admin).
  - Modification d'un devoir (Admin).
  - Suppression d'un devoir (Admin).
  - Modification du statut "Rendu" (Admin & User).
- **Pagination:** Affichage paginé des devoirs (MatPaginator) avec gestion côté serveur.
- **Peuplement de la BD:** Bouton "Peupler BD" (Admin) pour générer des centaines de données de test.

## Fonctionnalités Bonus / Améliorations UI
- **Interface Soignée:** Utilisation d'Angular Material (Toolbar, Sidenav, Cards, Table).
- **Ergonomie:**
  - **Lignes Cliquables:** Navigation vers les détails en cliquant n'importe où sur une ligne du tableau.
  - **Indicateurs Visuels:** Affichage de "A Rendre" pour les dates futures et "Non Rendu" pour les dates passées.
  - **Sidebar Admin:** Les outils d'administration (Peupler/Vider BD) sont déplacés dans la Sidebar pour ne pas encombrer l'interface principale.
- **Sécurité:** Les boutons d'administration sont masqués pour les non-admins, et les fonctions sont protégées par des vérifications de rôle.

## Installation Locale

### 1. Backend API
```bash
cd api
npm install
npm start
```
Le serveur démarrera sur `http://localhost:8010`.

### 2. Frontend Application
```bash
cd assignment-app
npm install
ng serve
```
Naviguez vers `http://localhost:4200`.
