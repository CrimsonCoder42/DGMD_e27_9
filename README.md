# DGMD_e27_9

## This is a module implements an auto Image slide show (without buttons but with captions for each slide)  
## app using generics. 

## Downloading and Installing TypeScript

- Install Node.js
- Open a terminal or command prompt.
- Type `npm install -g typescript`
- Wait for the installation to complete.

## Configuring TypeScript

- Open a terminal or command prompt in your IDE or editor of choice.
- Create a new folder for your project and open it.
- Type `tsc --init` to create a `tsconfig.json` file.
- Open the `tsconfig.json` file and change to the following code:
```
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "strict": true,
    "outDir": "build/js",
    "rootDir": "src",
    "esModuleInterop": true
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "**/*.spec.ts"
  ]
}
```

## Compiling and Running TypeScript

- Open a terminal or command prompt in your IDE or editor of choice.
- Type `tsc -w` and press enter. This starts the TypeScript compiler in watch mode.
- You can Use Live Server `npm install -g live-server` or simply open the `index.html` file in your browser.


