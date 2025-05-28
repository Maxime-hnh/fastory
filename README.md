# Exercice SWAPI

Projet composé d'un client Next.js et d'un serveur Hapi.js.

## Prérequis

- [Node.js](https://nodejs.org/) (v18 ou supérieur recommandé)
- [pnpm](https://pnpm.io/) (v10.10.0 ou supérieur)

## Structure du projet

Le projet est divisé en deux parties principales :

- `client/` : Application frontend développée avec Next.js
- `server/` : API backend développée avec Hapi.js

## Installation

1. Clonez le dépôt :
   ```bash
   git clone git@github.com:Maxime-hnh/fastory.git
   cd fastory
   ```

2. Installez les dépendances du client :
   ```bash
   cd client
   pnpm install
   ```

3. Installez les dépendances du serveur :
   ```bash
   cd ../server
   pnpm install
   ```

## Lancement du projet

### Démarrer le serveur backend

```bash
cd server
pnpm dev
```

Le serveur démarrera sur `http://localhost:3001`

Pour le mode debug :
```bash
pnpm start:debug
```

Le serveur peut également être lancé en mode débogage depuis l'onglet **"Exécuter et déboguer"** de VS Code.


### Démarrer le client frontend

Dans un nouveau terminal :

```bash
cd client
pnpm dev
```

L'application client démarrera sur `http://localhost:3000` (ou le prochain port disponible si le 3000 est déjà utilisé).

## Scripts disponibles

### Client

- `pnpm dev` : Lance le serveur de développement
- `pnpm build` : Construit l'application pour la production
- `pnpm start` : Démarre l'application en mode production
- `pnpm lint` : Exécute le linter
- `pnpm test` : Exécute les tests
- `pnpm test:ui` : Exécute les tests avec interface utilisateur

### Serveur

- `pnpm dev` : Lance le serveur en mode développement
- `pnpm start` : Lance le serveur en mode production
- `pnpm start:debug` : Lance le serveur en mode debug

## Technologies utilisées

### Client
- Next.js
- React
- Redux Toolkit
- TanStack Query
- Tailwind CSS
- Radix UI
- Zod
- Vitest

### Serveur
- Hapi.js
- TypeScript
- Nodemon (développement)
