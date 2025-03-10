# Exercice React 7

## Objectif
Développer une application React comprenant un composant de formulaire de login qui permet de se connecter de manière fictive.

## Instructions

### 1. Composant de Formulaire de Login
- Créer un composant de formulaire de login avec les champs nécessaires (par exemple, nom d'utilisateur et mot de passe).

### 2. Utilisation de `useRef()`
- Utiliser `useRef()` pour gérer les références aux champs du formulaire.
- Préférer `useRef()` à `useState()` dans ce cas pour une optimisation.

### 3. Fonction de Connexion dans App.jsx
- Dans le composant parent `App.jsx`, implémenter une fonction qui sera appelée lors de l'envoi du formulaire.
- Cette fonction doit logger en console les informations de l'utilisateur saisies dans le formulaire.

### 4. Interaction avec le Composant Parent
- Assurer que l'envoi du formulaire dans le composant de login déclenche la fonction définie dans `App.jsx`.
- Les données du formulaire doivent être correctement transmises et affichées dans la console.