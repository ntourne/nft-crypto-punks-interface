# NFT Crypto Punks

This project was created to research about Dapps in the NFT space.

## Getting started

### 1. Install dependencies

After clone the repository just install all dependencies.

```
npm install
```

### 2. Set up .env file

Copy the `.env.example` file in this directory to `.env` (which will be ignored by Git)

```
cp .env.example .env
```

Then set each variable on `.env`:

- `REACT_APP_CRYPTO_PUNK_ADDRESS_RINKEBY`: Set contract address.

### 3. Run in development mode

Once started you need to open under [http://localhost:3000](http://localhost:3000).

```
npm run start
```

The page will reload if you make edits.\
You will also see any lint errors in the console.

### 4. Create a build

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

```
npm run build
```

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
