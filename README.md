# Exercice SWAPI

Projet composé d'un client Next.js et d'un serveur Hapi.js qui interagit avec l'API Star Wars (SWAPI).

## Prérequis

- [Node.js](https://nodejs.org/) (v18 ou supérieur recommandé)
- [pnpm](https://pnpm.io/) (v10.10.0 ou supérieur)
- [Visual Studio Code](https://code.visualstudio.com/) (recommandé pour le débogage)

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

## Configuration

### Configuration de Nodemon

Le serveur utilise Nodemon pour le rechargement automatique pendant le développement. La configuration se trouve dans `server/nodemon.json` :

```json
{
  "watch": ["src"],
  "ext": "ts",
  "exec": "ts-node ./src/app.ts"
}
```

Cette configuration permet à Nodemon de surveiller les fichiers `.ts` dans le dossier `src` et d'exécuter le serveur avec `ts-node`.

### Configuration du débogage VS Code

Le projet inclut une configuration de débogage pour VS Code dans `.vscode/launch.json` :

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "development",
      "runtimeExecutable": "pnpm",
      "runtimeArgs": ["run", "start:debug"],
      "cwd": "${workspaceFolder}/server",
      "restart": true,
      "sourceMaps": true,
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    }
  ]
}
```

Pour utiliser cette configuration :
1. Ouvrez VS Code dans le dossier racine du projet
2. Accédez à l'onglet "Exécuter et déboguer" (ou appuyez sur `Ctrl+Shift+D`)
3. Sélectionnez "development" dans le menu déroulant
4. Cliquez sur le bouton de lecture vert ou appuyez sur `F5`

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

### Serveur

- `pnpm dev` : Lance le serveur en mode développement avec Nodemon pour le rechargement automatique
- `pnpm start` : Lance le serveur en mode production
- `pnpm start:debug` : Lance le serveur en mode debug (utilisé par la configuration VS Code)

## API Backend

Le serveur expose plusieurs endpoints pour interagir avec l'API SWAPI. Les principales routes incluent :
- `/api/people` : Récupération des personnages
- `/api/planets` : Récupération des planètes
- `/api/starships` : Récupération des vaisseaux spatiaux

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
- Nodemon (pour le rechargement automatique en développement)

## Déploiement

Pour déployer l'application en production :

1. Construisez le client :
   ```bash
   cd client
   pnpm build
   ```

2. Déployez le serveur et le client sur votre plateforme préférée (Vercel, Netlify, etc.)

## Contribution

Si vous souhaitez contribuer à ce projet :

1. Créez une branche pour votre fonctionnalité (`git checkout -b feature/amazing-feature`)
2. Committez vos changements (`git commit -m 'Add some amazing feature'`)
3. Poussez vers la branche (`git push origin feature/amazing-feature`)
4. Ouvrez une Pull Request
