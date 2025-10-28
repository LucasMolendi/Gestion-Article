# Framework JS

## Fonctionnement

Les apps et services se trouvent dans `app` qui se trouve dans `src`.

**API** : [ici](https://github.com/Chocolaterie/ApiArticle) 🔗

Nécessite Angular 20 (ou supérieur) ⚙️

Ainsi que les dépendances npm :

* Installation des dépendances : `npm install` 📦
* Aller dans le dossier API :

  * Via l'invite de commande
  * En tapant `cmd` dans le chemin de l'explorateur de fichiers Windows
* Lancer le serveur : `npm start` ▶️

L'API est prévue pour lancer le serveur sur le port 3000. [cf. doc](https://github.com/Chocolaterie/ApiArticle) 🚀

---

## Explication du projet

Projet réalisé lors du module Framework JS en B2 à SUP DE VINCI Nantes.
L'objectif était de créer une application web fonctionnelle faisant appel à une API.

Voir le sujet : [sujet](https://chocolaterie.github.io/documentation/docs/js-avance/project/project-angular/) 📚

---

## Gestion des articles 📝

Création d’un projet de gestion d’articles qui permet de créer une page avec Angular CLI et une API externe contenant des articles et des utilisateurs 🧾👥

✅ Liste des fonctionnalités :

* [x] Création du projet
* [x] Création de l'app article
* [x] Affichage de l'app article
* [x] Ajout d'un bouton faisant apparaître les articles
* [x] Ajout du bandeau et stylisation
* [x] Ajout de la suppression et des détails d'un article
* [x] Création de la page de connexion fonctionnelle et stylisée
* [x] Création de la page inscription fonctionnelle et stylisée
* [x] Création du formulaire de modification d'article stylisé
* [x] Rendre fonctionnel le formulaire de modification
* [x] Création d'un formulaire d'ajout d'article stylisé
* [x] Formulaire d'ajout fonctionnel
* [x] Page de mot de passe oubliée

---

## Erreurs restantes ⚠️

Il reste cependant quelques points qui n'ont pu être finalisés, soit par manque de temps, soit par manque de connaissances :

* Lors de la modification d'un article, si une case est laissée vide, le champ sera supprimé et non laissé tel quel.
* Quand la fonction "mot de passe oublié" est utilisée, le compte ne peut plus se connecter, car le mot de passe ne peut être renvoyé depuis l'API et est généré par l'API.
* Le bouton appel API dans la page articles ne disparaît pas une fois cliqué.
