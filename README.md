- [Boilerplate do grupo de desenvolvimento dotMind](#boilerplate-do-grupo-de-desenvolvimento-dotmind)
    - [dotMind é um grupo formado para o desenvolvimento de sistemas. Este repositório tem por finalidade facilitar a criação de um ambiente de desenvolvimento baseado nas tecnologias NextJS, TypeScript, Strapi, Postgres dentre outras.](#dotmind-é-um-grupo-formado-para-o-desenvolvimento-de-sistemas-este-repositório-tem-por-finalidade-facilitar-a-criação-de-um-ambiente-de-desenvolvimento-baseado-nas-tecnologias-nextjs-typescript-strapi-postgres-dentre-outras)
    - [Este boilerplate foi testado em máquinas com chips Apple M1](#este-boilerplate-foi-testado-em-máquinas-com-chips-apple-m1)
    - [{ INSERIR REFERENCIA AO BOILERPLATE DO WILLIAN JUSTEN}](#-inserir-referencia-ao-boilerplate-do-willian-justen)
  - [Parte I - Docker Strapi Postgres](#parte-i---docker-strapi-postgres)
    - [NOTAS IMPORTANTES](#notas-importantes)
  - [Parte II - Configuração Nodejs VsCode NextJS Brew Git](#parte-ii---configuração-nodejs-vscode-nextjs-brew-git)
  - [Node NextJS](#node-nextjs)
  - [ESLINT](#eslint)
  - [Prettier](#prettier)
  - [Git Hooks: Husky e Lint-Staged](#git-hooks-husky-e-lint-staged)
  - [Jest com Babel e TypeScript](#jest-com-babel-e-typescript)
  - [React Testing Library](#react-testing-library)
  - [Styled Components e Server Side Rendering](#styled-components-e-server-side-rendering)
  - [Criando Estilos em Componentes](#criando-estilos-em-componentes)
  - [Storybook](#storybook)
  - [PWA - Progressive Web App](#pwa---progressive-web-app)
  - [GitHub CLI & Pull Requests com DependaBot](#github-cli--pull-requests-com-dependabot)

# Boilerplate do grupo de desenvolvimento dotMind
### dotMind é um grupo formado para o desenvolvimento de sistemas. Este repositório tem por finalidade facilitar a criação de um ambiente de desenvolvimento baseado nas tecnologias NextJS, TypeScript, Strapi, Postgres dentre outras.
### Este boilerplate foi testado em máquinas com chips Apple M1 
### { INSERIR REFERENCIA AO BOILERPLATE DO WILLIAN JUSTEN}

## Parte I - Docker Strapi Postgres

- CRIAR CONTA PARA USO DO DOCKER

  [Criar conta no Docker](https://hub.docker.com)

- DOWNLOAD DO DOCKER PARA MAC WITH APPLE CHIP

  [Docker Mac M1](https://hub.docker.com/editions/community/docker-ce-desktop-mac)

- CRIAR DIRETORIOS DO PROJETO E IMAGEM STRAPI-ARM-BASE:
```
mkdir ~/MeuProjeto
cd ~/MeuProjeto
mkdir StrapiCMS
cd StrapiCMS
```

vi Dockerfile.strapi-arm-base
```dockerfile
FROM node:14
RUN apt update && apt-get -y install libvips-dev git wget glib2.0-dev expat gobject-introspection libgtk2.0-doc g++ make python
RUN wget https://github.com/libvips/libvips/releases/download/v8.12.1/vips-8.12.1.tar.gz
RUN tar xf vips-8.12.1.tar.gz
RUN cd vips-8.12.1 && ./configure && make && make install && rm -rf vips-8.12.1
RUN apt-get -y remove libvips-dev libvips42 && ldconfig
```
docker build -t strapi-arm-base -f Dockerfile.strapi-arm-base .

- CRIAR IMAGEM STRAPI-ARM A PARTIR DA IMAGEM BASE:

vi Dockerfile.strapi-arm
```dockerfile
FROM strapi-arm-base
RUN mkdir /srv/app && chown 1000:1000 -R /srv/app
WORKDIR /srv/app
VOLUME /srv/app
RUN yarn global add strapi
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod aog+x /usr/local/bin/docker-entrypoint.sh
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
CMD ["strapi", "develop"]
```

vi docker-entrypoint.sh 
```shell
#!/bin/sh
set -ea
if [ "$1" = "strapi" ]; then
  if [ ! -f "package.json" ]; then
    DATABASE_CLIENT=${DATABASE_CLIENT:-sqlite}
    EXTRA_ARGS=${EXTRA_ARGS}
    echo "Using strapi $(strapi version)"
    echo "No project found at /srv/app. Creating a new strapi project"
   DOCKER=true strapi new . \
      --dbclient=$DATABASE_CLIENT \
      --dbhost=$DATABASE_HOST \
      --dbport=$DATABASE_PORT \
      --dbname=$DATABASE_NAME \
      --dbusername=$DATABASE_USERNAME \
      --dbpassword=$DATABASE_PASSWORD \
      --dbssl=$DATABASE_SSL \
      $EXTRA_ARGS
  elif [ ! -d "node_modules" ] || [ ! "$(ls -qAL node_modules 2>/dev/null)" ]; then
    echo "Node modules not installed. Installing..."
    yarn install
  fi
fi
echo "Starting your app..."
exec "$@"
```
docker build -t strapi-arm -f Dockerfile.strapi-arm .

- ESTRUTURA DOS DIRETÓRIOS PARA UTILIZAÇÃO DOS CONTAINERS
- ARQUIVO DOCKER COMPOSE
```
cd ~/MeuProjeto
mkdir app data
```

vi docker-compose.yml
```dockerfile
version: "3"
services:
  strapi:
    image: strapi-arm
    environment:
      DATABASE_CLIENT: postgres
      DATABASE_NAME: strapi
      DATABASE_HOST: postgres
      DATABASE_PORT: 5432
      DATABASE_USERNAME: strapi
      DATABASE_PASSWORD: strapi
    links:
      - postgres:postgres
    volumes:
      - ./app:/srv/app
    ports:
      - "1337:1337"
    depends_on:
      - postgres
  postgres:
    image: postgres
    environment:
      POSTGRES_USER: strapi
      POSTGRES_PASSWORD: strapi
    volumes:
      - ./data:/var/lib/postgresql/data
    ports:
      - "5432:5432”
```

- TESTAR INSTALAÇÃO DO STRAPI + POSTGRES
- RETIRAR ID DO CONTAINER STRAPI E DESCOBRIR VERSÃO MAJOR E MINOR DO NODEJS PARA UTILIZAR NA PARTE II
```shell
docker-compose up -d
docker ps
docker exec -ti <id_passo_anterior> node -v
```

### NOTAS IMPORTANTES

- DIRETÓRIO DE DADOS DO POSTGRES É data. CASO QUEIRA APAGAR A BASE DE DADOS, BASTA REMOVER ESSE DIRETÓRIO E REINICIAR OS CONTAINERS

- STRAPI PARA MAC M1 UTILIZA ATUALMENTE A VERSÃO 14.19 DO NODEJS

- DOCKER-ENTRYPOINT VAI PROCURAR PELO PROJETO EM app E, CASO NÃO ENCONTRE, STRAPI CRIARÁ UM NOVO PROJETO NESSE DIRETÓRIO

- STRAPI INICIA EM MODO DEVELOPER (CMD ["strapi", "develop”])

- ACESSE A INTERFACE COM SEU E-MAIL E ADICIONE O PLUGIN DO GRAPHQL EM MarketPlace/Plugins

[Strapi rodando na 1337](http://localhost:1337)


---

  ## Parte II - Configuração Nodejs VsCode NextJS Brew Git

## Node NextJS

- DOWNLOAD  NVM COMO VERSIONADOR
- HABILITAR BASE DO XCODE
- INSTALAR NODE DE ACORDO COM A VERSÃO NODE NO STRAPI, ATUALMENTE 14.19.0

[Instruções de instalação NVM](https://nodejs.dev)

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
sudo Xcode-select --install
nvm install 14.19.0
```

- COMANDOS NVM ÚTEIS
```shell
nvm current
nvm ls
nvm use 14.19.0
nvm uninstall 13.17.6
```

- DOWNLOAD DO VSCODE

[Download VSCode](https://code.visualstudio.com/Download)

- ADICIONAR VSCODE AO PATH ABRINDO O Command Palette (Cmd+Shift+P)
  - PROCURE POR 'shell command'
  - DEVERÁ APARECER A OPÇÃO Install 'code' command in PATH
- ATUALIZAR VERSÃO DO YARN
- INSTALAR GERENCIADOR DE PACOTES BREW
- INSTALAR GIT
  
```shell
npm install -g yarn
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install git
```

- CRIAR UM PROJETO BOILERPLATE NEXTJS
- SINALIZAR A UTILIZAÇÃO DE TYPESCRIPT
- VERIFICAR DEPENDENCIAS PARA UTILZAR TYPESCRIPT
- INSTALAR DEPENDENCIAS
- FINALIZAR A INSTALAÇÃO TESTANDO O MODO dev
- MELHORAR A TIPAGEM DO PROJETO 
  
```shell
cd ~/MeuProjeto
yarn create next-app frontpage
cd frontpage
touch tsconfig.json
yarn dev
yarn add --dev typescript@4.5.5 @types/react @types/node
yarn dev
```

vi tsconfig.json
```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "incremental": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve"
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

- CRIAR O DIRETÓRIO scr E MOVER A PASTA pages PARA DENTRO DELE
- TROCAR A EXTENSÃO DA index DE .ts PARA .tsx PARA TRABALHAR COM SUPORTE A JSX DENTRO DO JAVASCRIPT

```shell
cd ~/MeuProjeto/frontpage
mkdir src
mv pages/index.js pages/index.jsx
mv pages src
```

- CONFIGURAR A CONSISTENCIA DOS ARQUIVOS NO VSCODE VIA EDITOR CONFIG

vi .editorconfig
```
# editorconfig.org
root = true

[*]
indent_style = spaces
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

---

## ESLINT

- INSTALAR O ESLINT ESCOLHENDO AS OPÇÕES:
  - CHECAR A SINTAXE E ENCONTRAR PROBLEMAS
  - JAVASCRIPT MODULES - IMPORT/EXPORT
  - REACT
  - TYPESCRIPT
  - BROWSER
  - JSON 
  - YARN -> SERÁ APRESENTADO UMA RELAÇÃO DE PLUGINS PARA SER INSTALADA MANUALMENTE:

```shell
npx eslint --init
yarn add --dev eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest eslint@latest
```

- OBSERVAR O ARQUIVO GERADO .eslint.json CONTENDO A CONFIGURAÇÃO DO ESLINT

```json
cat .eslintrc.json 
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
    }
}
```

- INSTALAR ESLINT-PLUGIN-REACT-HOOKS
- CONFIGURAR PLUGINS
  - ESLINT-PLUGIN-REACT-HOOKS: PARA MELHORAR O DESENVOLVIMENTO COM RELAÇÃO À UTILIZAÇÃO DE HOOKS E DEPENDÊNCIAS
  - DESLIGAR PROP-TYPES: POIS JÁ ESTAMOS UTILIZANDO TYPESCRIPT E NÃO É DESEJADO SERMOS LEMBRADOS A TODO MOMENTO QUE NÃO HÁ PROP TYPES
  - DESLIGAR REACT-IN-JSX-SCOPE: POIS COMO JÁ UTILIZAMOS O NEXT-JS O REACT JÁ É IMPORTADO PELO NEXTJS GLOBALMENTE
  - DESLIGAR O EXPLICT-MODULE-BOUNDARY-TYPES: PARA UTILIZAR A INFERÊNCIA DE TIPOS EM CERTOS MOMENTOS E EVITAR TER DE TIPAR TODO RETORNO DE FUNÇÃO E TORNAR TUDO MUITO VERBOSO
  - OBSERVE A UTILIZAÇÃO DA CONFIGURAÇÃO CUSTOMIZADA, QUE SEPARA "plugins" DE "rules"
- CONFIGURAR A VERSÃO DO REACT NA SEÇÃO "settings" PARA O CORRETO FUNCIONAMENTO DO REACT-PLUGIN
- INSTALAR ESLINT-PLUGIN-NEXT PARA CORRETO FUNCIONAMENTO DO MODO PRODUÇÃO (NODE_ENV=production; yarn build) 

[Migrating Existing Config: eslint-plugin-next](https://nextjs.org/docs/basic-features/eslint#migrating-existing-config)

[Configuração dos plugins: typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules)

[Eslint-Plugin-React-Hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)

```shell
yarn add eslint-plugin-react-hooks --dev
yarn add @next/eslint-plugin-next --dev
```

vi .eslitrc.json

```json
{
    "env": {
        "browser": true,
        "es2021": true
    },
  	"settings": {
      	"react": {
          "version": "detect"
        }
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
      	"plugin:@next/next/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks",
        "@typescript-eslint"
    ],
    "rules": {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off"
    }
}
```

- HABILITAR O PLUGIN DO ESLINT DENTRO DO VSCODE EXTENSIONS
- CONFIGURAR "scripts" EM package.json PARA CHAMAR O ESLINT

vi ~/MeuProjeto/frontpage/package.json

```json
{
  "name": "frontpage",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint 'src/**/*.{js,jsx}'"
  },
  "dependencies": {
    "next": "12.1.0",
    "react": "17.0.2",
    "react-dom": "17.0.2"
  },
  "devDependencies": {
    "@types/node": "^17.0.21",
    "@types/react": "^17.0.39",
    "@typescript-eslint/eslint-plugin": "^5.13.0",
    "@typescript-eslint/parser": "^5.13.0",
    "eslint": "^8.10.0",
    "eslint-config-next": "12.1.0",
    "eslint-plugin-react": "^7.29.2",
    "eslint-plugin-react-hooks": "^4.3.0",
    "typescript": "4.5.5"
  }
}
```

- TESTAR COMANDO DO ESLINT NO TERMINAL

yarn lint

---

## Prettier

- INSTALAR E CONFIGURAR

yarn add --dev --exact prettier

vi ~/MeuProjeto/frontpage/.prettierrc

```json
{
"trailingComma": "none",
"semi": false,
"singleQuote": true
}
```

- INSTALAR PLUGINS DE INTEGRAÇÃO DO PRETTIER COM O ESLINT: PRETTIER COMO UMA REGRA DO ESLINT

yarn add --dev eslint-plugin-prettier eslint-config-prettier

- CONFIGURAR REGRA PARA EXECUÇÃO DO PRETTIER PELO ESLINT EM .eslintrc.json

vi ~/MeuProjeto/frontpage/.eslintrc.json

```json
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "settings": {
        "react": {
          "version": "detect"
        }
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks",
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off"
    }
}
```

- CONFIGURAR VSCODE PARA EXECUTAR ESLINT/PRETTIER ANTES DE SALVAR

```
cd ~/MeuProjeto/frontpage
mkdir .vscode
cd .vscode
touch settings.json
```

vi settings.json

```json
{
	"window.zoomLevel": 2,
	"editor.fontSize": 10,
	"terminal.integrated.fontSize": 10,
	"editor.formatOnSave": false,
	"editor.codeActionsOnSave": { 
    	"source.fixAll.eslint": true
  }
}
```


- ATIVAR ALTERAÇÕES COM RELOAD DO PLUGIN ESLINT NO VSCODE

---

## Git Hooks: Husky e Lint-Staged

- INSTALAR E CONFIGURAR HUSKY E LINT-STAGED


```
yarn add husky lint-staged --dev
yarn husky install
yarn husky add .husky/pre-commit "yarn lint-staged"
```

vi package.json

```json
{
  "name": "frontpage",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint  'src/**/*.{js,jsx}' --max-warnings=0"
  },
  "lint-staged": {
  		"src/**/*": [ "yarn lint --fix" ]
  },
  "dependencies": {
    "next": "12.1.0",
    "react": "17.0.2",
    "react-dom": "17.0.2"
  },
  "devDependencies": {
    "@types/node": "^17.0.21",
    "@types/react": "^17.0.39",
    "@typescript-eslint/eslint-plugin": "^5.13.0",
    "@typescript-eslint/parser": "^5.13.0",
    "eslint": "^8.10.0",
    "eslint-config-next": "12.1.0",
    "eslint-config-prettier": "^8.4.0",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.29.2",
    "eslint-plugin-react-hooks": "^4.3.0",
    "husky": "^7.0.4",
    "prettier": "2.5.1",
    "typescript": "4.5.5"
  }
}
```

- CASO DIRETORIO .git SEJA REMOVIDO EM ALGUM MOMENTO, INSTALAR NOVAMENTE O HUSKY E ADICIONAR NOVAMENTE O HOOK PARA O PRE-COMMIT:
```shell
git init
yarn husky install
yarn husky add .husky/pre-commit "yarn lint-staged"
```

---

## Jest com Babel e TypeScript

- INSTALAR E CONFIGURAR
  - "node" adicionado ao "env" de eslintrc  pelo fato de que jest utiliza module.exports e a falta desta configuração faria o eslint gerar avisos

yarn add jest @babel/preset-typescript @types/jest --dev

vi .eslintrc.json

```json
{
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
        "node": true
    },
    "settings": {
        "react": {
          "version": "detect"
        }
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks",
        "@typescript-eslint",
        "prettier"
    ],
    "rules": {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off"
    }
}
```

vi ~/MeuProjeto/frontpage/jest.config.js

```javascript
module.exports = {
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['/node_modules/','/.next/'],
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/*.stories.tsx'],
	setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleNameMapper: {
    '^styled-components': '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
  }
}
```

- CONFIGURAÇÃO BABEL
	- next/babel para escrever os códigos de teste no Jest utilizando novidades de JavaScript
	- @babel/preset-typescript pelo fato de estarem escritos em typescript

vi ~/MeuProjeto/frontpage/.babelrc

```json
{
	"presets": ["next/babel", "@babel/preset-typescript"]
}
```

vi ~/MeuProjeto/frontpage/package.json

```json
{
  "name": "frontpage",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint 'src/**/*.{js,jsx}' --max-warnings=0",
    "test": "jest"
  },
  "lint-staged": {
    "src/**/*": [
      "yarn lint --fix"
    ]
  },
  "dependencies": {
    "next": "12.1.0",
    "react": "17.0.2",
    "react-dom": "17.0.2"
  },
  "devDependencies": {
    "@babel/preset-typescript": "^7.16.7",
    "@types/jest": "^27.4.1",
    "@types/node": "^17.0.21",
    "@types/react": "^17.0.39",
    "@typescript-eslint/eslint-plugin": "^5.13.0",
    "@typescript-eslint/parser": "^5.13.0",
    "eslint": "^8.10.0",
    "eslint-config-next": "12.1.0",
    "eslint-config-prettier": "^8.4.0",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.29.2",
    "eslint-plugin-react-hooks": "^4.3.0",
    "husky": "^7.0.4",
    "jest": "^27.5.1",
    "lint-staged": "^12.3.4",
    "prettier": "2.5.1",
    "typescript": "4.5.5"
  }
}
```

- CONFIGURAÇÃO JEST
	- .jest/setup.ts contém as informações do Jest tais como imports de assets, expects e outros artefatos para trabalhar com jsdom

```shell
cd ~/MeuProjeto/frontpage
mkdir .jest
cd .jest
touch setup.ts
```

---

## React Testing Library

- INSTALAR REACT TESTING LIBRARY E MATCHER DO JEST, O JEST-DOM
- PREPAR DIRETÓRIOS E CONFIGURAR TESTES INICIAIS QUE DEVERÃO FALHAR

```shell
cd ~/MeuProjeto/frontpage
yarn add --dev @testing-library/react @testing-library/jest-dom
echo "import '@testing-library/jest-dom' >> .jest/setup.ts
cd src
mkdir components components/Main
cd components/Main
touch index.tsx test.tsx
```

vi index.tsx

```jsx
const Main = () => (
	<main>
		<h1>React</h1>
	</main>
)

export default Main
```

- BAIXAR E IMPRIMIR O CHEAT SHEET PARA FUNÇÕES DE TESTE

[Cheat Sheet](https://github.com/testing-library/react-testing-library/raw/main/other/cheat-sheet.pdf)

vi test.tsx
```jsx
import { render, screen } from '@testing-library/react'

import Main from '.'

describe ('<Main />', () => {
	it ('should render the heading', () => {
			render(<Main />)
			expect(
				screen.getByRole('heading', { name: /react avançado/i })
			).toBeInTheDocument
	})
})
```

- RODAR O TESTE E VERIFICAR SE OCORRE A FALHA

```sh
yarn test
yarn run v1.22.17
$ jest
 FAIL  src/components/Main/test.tsx
  <Main />
    ✕ should render the heading (40 ms)

  ● <Main /> › should render the heading

    TestingLibraryElementError: Unable to find an accessible element with the role "heading" and name `/react avançado/i`

    Here are the accessible roles:

      main:

      Name "":
      <main />

      --------------------------------------------------
      heading:

      Name "Avançado":
      <h1 />

      --------------------------------------------------

    Ignored nodes: comments, <script />, <style />
    <body>
      <div>
        <main>
          <h1>
            Avançado
          </h1>
        </main>
      </div>
    </body>

       6 |   it('should render the heading', () => {
       7 |     render(<Main />)
    >  8 |     expect(screen.getByRole('heading', { name: /react avançado/i }))
         |                   ^
       9 |       .toBeInTheDocument
      10 |   })
      11 | })

      at Object.getElementError (node_modules/@testing-library/dom/dist/config.js:38:19)
      at node_modules/@testing-library/dom/dist/query-helpers.js:90:38
      at node_modules/@testing-library/dom/dist/query-helpers.js:62:17
      at getByRole (node_modules/@testing-library/dom/dist/query-helpers.js:111:19)
      at Object.<anonymous> (src/components/Main/test.tsx:8:19)
      at TestScheduler.scheduleTests (node_modules/@jest/core/build/TestScheduler.js:333:13)
      at runJest (node_modules/@jest/core/build/runJest.js:404:19)
      at _run10000 (node_modules/@jest/core/build/cli/index.js:320:7)
      at runCLI (node_modules/@jest/core/build/cli/index.js:173:3)

-----------|---------|----------|---------|---------|-------------------
File       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------|---------|----------|---------|---------|-------------------
All files  |     100 |      100 |     100 |     100 |                   
 index.tsx |     100 |      100 |     100 |     100 |                   
-----------|---------|----------|---------|---------|-------------------
Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.855 s, estimated 1 s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

- ALTERAR index.tsx PARA PASSAR NO TESTE E NOVAMENTE VERIFICAR

vi ~/MeuProjeto/frontpage/src/components/Main/main.tsx

```
const Main = () => (
	<main>
		<h1>React Avançado</h1>
	</main>
)

export default Main
```

```sh
yarn test
yarn run v1.22.17
$ jest
 PASS  src/components/Main/test.tsx
  <Main />
    ✓ should render the heading (29 ms)

-----------|---------|----------|---------|---------|-------------------
File       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------|---------|----------|---------|---------|-------------------
All files  |     100 |      100 |     100 |     100 |                   
 index.tsx |     100 |      100 |     100 |     100 |                   
-----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.828 s, estimated 1 s
Ran all test suites.
✨  Done in 1.99s.
```

- CONFIGURAR TESTE ASSISTIDO

cd ~/MeuProjeto/frontpage
vi package.json

```json
{
  "name": "frontpage",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint 'src/**/*.{js,jsx}' --max-warnings=0",
    "test": "jest",
    "test:watch": "yarn test --watch"
  },
  "lint-staged": {
    "src/**/*": [
      "yarn lint --fix"
    ]
  },
  "dependencies": {
    "next": "12.1.0",
    "react": "17.0.2",
    "react-dom": "17.0.2"
  },
  "devDependencies": {
    "@babel/preset-typescript": "^7.16.7",
    "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^12.1.3",
    "@types/jest": "^27.4.1",
    "@types/node": "^17.0.21",
    "@types/react": "^17.0.39",
    "@typescript-eslint/eslint-plugin": "^5.13.0",
    "@typescript-eslint/parser": "^5.13.0",
    "eslint": "^8.10.0",
    "eslint-config-next": "12.1.0",
    "eslint-config-prettier": "^8.4.0",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.29.2",
    "eslint-plugin-react-hooks": "^4.3.0",
    "husky": "^7.0.4",
    "jest": "^27.5.1",
    "lint-staged": "^12.3.4",
    "prettier": "2.5.1",
    "typescript": "4.5.5"
  }
}
```

- CONFIGURAR SNAPSHOT NO ARQUIVO DE TEST

vi src/components/Main/test.tsx

```tsx
import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)
    expect(screen.getByRole('heading', { name: /react avançado/i }))
      .toBeInTheDocument

    expect(container.firstChild).toMatchSnapshot()
  })
})
```

- PARA TESTAR O SNAPSHOT, RODAR OS TESTES UMA VEZ E DEPOIS ALTERAR O HEADING DE h1 PARA h2 EM main.tsx, DE FORMA QUE PASSE NO PRIMEIRO TESTE MAS FALHE NO SNAPSHOT
- NOTAS: 
  - SE ESTIVER UTILIZANDO "test:watch", DIGITANDO "u" OCORRE A ATUALIZAÇÃO DO SNAPSHOT
  - NO TESTE MANUAL O SNAPSHOT É ATUALIZADO COM yarn test -u
  - O SNAPSHOT FAZ PARTE DO REPOSITORIO
- ADICIONANDO TESTES AO LINT-STAGED
  -  "yarn test --findRelatedTests --bail":
    - **bail** serve para que tudo pare ao primeiro teste que não passe
    - **findRelatedTests** serve para que modificações em arquivos que não sejam relacionadas com os testes não quebrem o processo informando que não há testes para testar

vi package.json

```json
{
  "name": "frontpage",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint 'src/**/*.{js,jsx}' --max-warnings=0",
    "test": "jest",
    "test:watch": "yarn test --watch"
  },
  "lint-staged": {
    "src/**/*": [
      "yarn lint --fix",
      "yarn test --findRelatedTests --bail"
    ]
  },
  "dependencies": {
    "next": "12.1.0",
    "react": "17.0.2",
    "react-dom": "17.0.2"
  },
  "devDependencies": {
    "@babel/preset-typescript": "^7.16.7",
    "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^12.1.3",
    "@types/jest": "^27.4.1",
    "@types/node": "^17.0.21",
    "@types/react": "^17.0.39",
    "@typescript-eslint/eslint-plugin": "^5.13.0",
    "@typescript-eslint/parser": "^5.13.0",
    "eslint": "^8.10.0",
    "eslint-config-next": "12.1.0",
    "eslint-config-prettier": "^8.4.0",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.29.2",
    "eslint-plugin-react-hooks": "^4.3.0",
    "husky": "^7.0.4",
    "jest": "^27.5.1",
    "lint-staged": "^12.3.4",
    "prettier": "2.5.1",
    "typescript": "4.5.5"
  }
}
```

---

## Styled Components e Server Side Rendering

- INSTALAR DEPENDENCIAS DE DESENVOLVIMENTO E CONFIGURAR BABEL
- INSTALAR INTEGRAÇÃO DE STYLED COMPONENTS COM JEST

[Jest Integration](https://styled-components.com/docs/tooling#jest-integration)

yarn add --dev @types/styled-components babel-plugin-styled-components jest-styled-components

vi .jest/setup.ts

```typescript
import '@testing-library/jest-dom'
import 'jest-styled-components'
```

vi .babelrc

```javascript
{
	"presets": ["next/babel", "@babel/preset-typescript"],
	"plugins": [
	  [		"babel-plugin-styled-components",
			  {
		  		"ssr": true
				}
	  ]
	]
}
```

- INSTALAR STYLED-COMPONENTS

`yarn add styled-components`

- CONFIGURAR O ARQUIVO PADRÃO DO NEXTJS PARA PASSAR INFORMAÇÕES AO NEXT SOBRE A RENDERIZAÇÃO DAS PÁGINAS
- DISPONIBILIZAR A FUNÇÃO RENDER PARA PERMITIR QUE SE EDITE A LINGUAGEM DO HTML E OUTROS DETALHES, EVITANDO REDERIZAÇÕES PADRÕES DO NEXT QUE PODERIAM ENTRAR EM CONFLITO COM O STYLED COMPONENTS

[Custom `Document` _document.tsx](https://nextjs.org/docs/advanced-features/custom-document)

vi pages/_document.tsx
```jsx
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'

import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
```

- TESTAR CARREGAMENTO DOS ORIGINAIS GERADOS PELO NEXTJS

```shell
yarn dev
yarn run v1.22.17
$ next dev
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
info  - Disabled SWC as replacement for Babel because of custom Babel configuration ".babelrc" https://nextjs.org/docs/messages/swc-disabled
event - compiled client and server successfully in 198 ms (144 modules)
wait  - compiling /_error (client and server)...
event - compiled client and server successfully in 41 ms (145 modules)
wait  - compiling / (client and server)...
event - compiled client and server successfully in 66 ms (168 modules)
```

- CRIANDO ESTILOS GLOBAIS COM O HELPER  createGlobalStyle
  - ESTRUTURAR DIRETÓRIO E ARQUIVO global.ts
  - ORGANIZAR BORDAS, MARGENS, BOX-SIZING, FONTS PADRÃO, TEMAS E ETC
  - ORGANIZAR src/pages/index.tsx
  - CRIAR src/pages/_app.tsx PARA IMPORTAR O GLOBAL STYLE
  - _app.tsx VAI PERMITIR AS SEGUINTES FUNCIONALIDADES:
    - PERSISTÊNCIA DE LAYOUT DURANTE MUDANÇA DE PÁGINAS
    - PERSISTÊNCIA DE ESTADO DURANTE A NAVEGAÇÃO
    - INJEÇÃO DE DADOS ADICIONAIS
    - GLOBAL CSS
    - PATH ALIAS E ABSOLUTE IMPORTS (tsconfig.json)

[Modelo _app.tsx](https://nextjs.org/docs/basic-features/typescript#custom-app)

```shell
cd ~/MeuProjeto/frontpage/src/
mkdir styles
touch styles/global.ts
```

vi ~/MeuProjeto/frontpage/tsconfig.json

```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "incremental": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve"
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

vi styles/global.ts

```typescript
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    html, body, #__next {
        height: 100%;
    }

    body {
       font-family; -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif 
    }
`

export default GlobalStyles
```

vi pages/_app.tsx

```typescript
import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
    	<GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
```

vi pages/index.tsx

```typescript
import Main from 'components/Main'

export default function Home() {
  return <Main />
}
```

---

## Criando Estilos em Componentes

- CRIAR PARA CADA COMPONENTE UM ARQUIVO styles.ts E CONFIGURAR OS ESTILOS
- NO COMPONENTE, index.tsx,  IMPORTAR TODOS OS ESTILOS COMO 'S' PARA FACILITAR A IDENTIFICAÇÃO ENTRE ESTILOS E COMPONENTES
- EDITAR TESTES PARA INCLUIR VERIFICAÇÃO DE ESTILOS

`cd ~/MeuProjeto/frontpage/src/components/Main`

vi styles.ts

```typescript
import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`
```

vi index.tsx

```typescript
import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJs e Styled Components
    </S.Description>
    <S.Illustration
      src="img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </S.Wrapper>
)

export default Main
```

vi test.tsx

```typescript
import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)
    expect(screen.getByRole('heading', { name: /react avançado/i }))
      .toBeInTheDocument

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render styles correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle(`
      background-color: #06092b;
      display: flex;
      flex-direction: column;
    `)
  })
})
```

---

## Storybook

- INSTALAR E CONFIGURAR STORYBOOK 6.4 PARA GLOBAL STYLES
- INSTALAR HTTP-SERVER PARA TESTE DE STATICOS DO STORYBOOK
- INSTALAR PLUGIN DE INTEGRAÇÃO COM O ESLINT
- INSTALAR PLUGIN Storybook helper (Riccardo Forina) DO VSCODE
- CONFIGURAR PARA PROCURAR PELOS STORIES JUNTO DA PASTA DE CADA COMPONENTE
- NOMENCLATURA SUGERIDA:
	- Componente.story.tsx
	- Iniciar Named story exports com Letra Maiúscula
- CONFIGURAR DIRETÓRIOS E AJUSTAR PARA QUE A PASTA PUBLIC SEJA UTILIZADA PELOS STORIES 
- ALTERAR COMPONENT MAIN PARA RECEBER. PARAMETROS

DOCUMENTAÇÃO: [Context for mocking](https://storybook.js.org/docs/react/writing-stories/decorators#context-for-mocking), [Write stories](https://storybook.js.org/docs/react/writing-stories/introduction)
```shell
cd ~/MeuProjeto/frontpage
yarn add --dev eslint-plugin-storybook
npx sb init
rm -rf stories
touch src/components/Main/Main.stories.txs
brew install http-server
```
vi package.json
```javascript
{
  "name": "frontpage",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint 'src/**/*.{js,jsx}' --max-warnings=0",
    "test": "jest",
    "test:watch": "yarn test --watch",
    "storybook": "start-storybook -s ./public -p 6006",
    "build-storybook": "build-storybook -s ./public"
  },
  "lint-staged": {
    "src/**/*": [
      "yarn lint --fix",
      "yarn test --findRelatedTests --bail"
    ]
  },
  "dependencies": {
    "next": "12.1.0",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "styled-components": "^5.3.3"
  },
  "devDependencies": {
    "@babel/core": "^7.17.5",
    "@babel/preset-typescript": "^7.16.7",
    "@storybook/addon-essentials": "^6.4.19",
    "@storybook/react": "^6.4.19",
    "@storybook/testing-library": "^0.0.9",
    "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^12.1.3",
    "@types/jest": "^27.4.1",
    "@types/node": "^17.0.21",
    "@types/react": "^17.0.39",
    "@types/styled-components": "^5.1.24",
    "@typescript-eslint/eslint-plugin": "^5.13.0",
    "@typescript-eslint/parser": "^5.13.0",
    "babel-loader": "^8.2.3",
    "babel-plugin-styled-components": "^2.0.6",
    "eslint": "^8.10.0",
    "eslint-config-next": "12.1.0",
    "eslint-config-prettier": "^8.4.0",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.29.2",
    "eslint-plugin-react-hooks": "^4.3.0",
    "eslint-plugin-storybook": "^0.5.7",
    "husky": "^7.0.4",
    "jest": "^27.5.1",
    "jest-styled-components": "^7.0.8",
    "lint-staged": "^12.3.4",
    "prettier": "2.5.1",
    "typescript": "4.5.5"
  }
}
```
vi .storybook/preview.js
```javascript
import GlobalStyles from '../src/styles/global'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
]
```
vi .storybook/main.js
```javascript
module.exports = {
  "stories": [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [ "@storybook/addon-essentials" ],
  "framework": "@storybook/react"
}
```

- CONFIGURANDO STORIES NO COMPONENTE EXEMPLO Main E EXECUÇÃO DO STORIES



vi src/components/Main/index.tsx

```typescript
import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJs e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </S.Wrapper>
)

export default Main
```



vi src/components/Main/Main.stories.tsx

```typescript
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
    args: {
    title: 'Valores Padrão',
    description: 'Descrição Padrão'
  }
} as ComponentMeta<typeof Main>

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />

export const Basic = Template.bind({})
export const Advanced = Template.bind({})
export const Complex = Template.bind({})

Advanced.args = {
  title: 'React Advanced Args',
  description: 'TypeScript, ReactJS, NextJs e Styled Components'
}

Complex.args = {
  title: 'React Complex Args',
  description: 'TypeScript, ReactJS, NextJs e Styled Components'
}
```

yarn storybook

```shell
webpack built preview d8347124f2dac1508f80 in 4091ms
╭───────────────────────────────────────────────────╮
│                                                   │
│   Storybook 6.4.19 for React started              │
│   4.24 s for preview                              │
│                                                   │
│    Local:            http://localhost:6006/       │
│    On your network:  http://192.168.1.43:6006/    │
│                                                   │
╰───────────────────────────────────────────────────╯
```

yarn build-storybook
cd ~/MeuProjeto/frontpage/storybook-static
http-server
```shell
Starting up http-server, serving ./

http-server version: 14.1.0

http-server settings: 
CORS: disabled
Cache: 3600 seconds
Connection Timeout: 120 seconds
Directory Listings: visible
AutoIndex: visible
Serve GZIP Files: false
Serve Brotli Files: false
Default File Extension: none

Available on:
  http://127.0.0.1:8080
  http://192.168.1.43:8080
Hit CTRL-C to stop the server
```
---
## PWA - Progressive Web App

- FUNCIONAMENTO OFF-LINE
- INSTALAR E CONFIGURAR PLUGINS - NEXT-PWA
- CONFIGURAR NEXTJS PARA NÃO UTILIZAR PWA EM PRODUÇÃO
- CONFIGURAR MANIFEST E ADICIONAR HEAD META

 [Site Next-PWA](https://www.npmjs.com/package/next-pwa)

cd  ~/MeuProjeto/frontpage
yarn add next-pwa

vi next.config.js

```javascript
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: !isProd,
  pwa: {
    dest: 'public',
    disable: !isProd
  }
}
module.exports = withPWA(nextConfig)
```
vi public/manifest.json
```json
{
  "name": "React Avançado - Boilerplate",
  "short_name": "React Avançado",
  "icons": [
    {
      "src": "/img/icon-192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "/img/icon-512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "background_color": "#06092B",
  "description": "Boilerplate utilizando Typescript, React, NextJS e Styled Components!",
  "display": "fullscreen",
  "start_url": "/",
  "theme_color": "#06092B"
}
```

vi src/pages/_app.tsx

```typescript
import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/static/manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
```

- TESTAR PWA COLOCANDO EM PRODUÇÃO
```
NODE_ENV=production
yarn build
yarn start
```

## 	GitHub CLI & Pull Requests com DependaBot

- CRIAR REPOSITÓRIO dotMindBoilerplate NO GITHUB
- CACHING GITHUB CREDENTIALS
  - Install  Github CLI gh
  - Escolher  GitHub.com, HTTPS , Authenticate to your GitHub crendentials e Login with a web browser

```
brew install gh
gh auth login
git remote add origin https://github.com/<seu usuario git>/dotMindBoilerplate.git
git branch -M main
git push -u origin main

```
- HABILITAR DEPENDABOT NO GITHUB
	- ABRA O REPOSITÓRIO NO GITHUB E PROCURE SETTINGS/CONFIGURAÇÕES
	- SEÇÃO SECURITY/CODE SECURITY AND ANALYSIS
	- HABILITAR DEPENDABOT ALERTS E DEPENDABOT SECURITY UPDATES

- CONFIGURAR DIRETÓRIO GITHUB E ARQUIVOS

```
cd ~/MeuProjeto/frontpage
mkdir .github .github/workflows
touch .github/dependabot.yml
touch .github/workflows/ci.yml
cd .github
```

vi dependabot.yml
```
version: 2
updates:
- package-ecosystem: yarn
  directory: "/"
  schedule:
    interval: daily
  open-pull-requests-limit: 10
```

vi workflows/ci.yml
```
name: ci
on: [pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v2

      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: 14.19.x

      - uses: actions/cache@v2
        id: yarn-cache
        with:
          path: |
            ~/cache
            !~/cache/exclude
            **/node_modules
          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-yarn-

      - name: Install dependencies
        run: yarn install

      - name: Linting
        run: yarn lint

      - name: Test
        run: yarn test:ci

      - name: Build
        run: yarn build
```

- ATUALIZAR REPOSITÓRIO

```
cd ~/MeuProjeto/frontpages
git status
git add .
git status
git commit -m "INTEGRAÇÃO DEPENDABOT"
```

- ENTRAR NO GITHUB E NO SEU REPOSITORIO PARA VER OS DEPENDABOT ALERTS
  - NA MINHA CONTA, APRESENTOU UM PROBLEMA ENTRE STORYBOOK E O PACOTE TRIM
    - PACOTE TRIM 0.0.1 POSSUE FALHA DE SEGURANÇA - SOLUCIONADA NA VERSÃO 0.0.3 - QUE É INCOMPATÍVEL COM STORYBOOK QUE UTILIZA TRIM 0.0.1
- POSSÍVEL SOLUÇÃO ENVOLVE ATUALIZAR TRIM
  - INFORMAR RESOLUÇÃO PARA UTILIZAR TRIM 1.0.0
  - ATUALIZAR REPOSITÓRIO LOCAL E REMOTO
  - VOLTAR AO GITHUB PARA VER OS DEPENDABOT ALERTS

vi package.json
```
{
  "name": "frontpage",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint 'src/**/*.{ts,tsx}' --max-warnings=0",
    "test": "jest",
    "test:watch": "yarn test --watch",
    "storybook": "start-storybook -s ./public -p 6006",
    "build-storybook": "build-storybook -s ./public"
  },
  "lint-staged": {
    "src/**/*": [
      "yarn lint --fix",
      "yarn test --findRelatedTests --bail"
    ]
  },
  "dependencies": {
    "next": "12.1.0",
    "next-pwa": "^5.4.5",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "styled-components": "^5.3.3"
  },
  "resolutions": {
    "**/trim": "^1.0.0"
  },
  "devDependencies": {
    "@babel/core": "^7.17.5",
    "@babel/preset-typescript": "^7.16.7",
    "@next/eslint-plugin-next": "^12.1.0",
    "@storybook/addon-essentials": "^6.4.19",
    "@storybook/react": "^6.4.19",
    "@storybook/testing-library": "^0.0.9",
    "@testing-library/jest-dom": "^5.16.2",
    "@testing-library/react": "^12.1.3",
    "@types/jest": "^27.4.1",
    "@types/node": "^17.0.21",
    "@types/react": "^17.0.39",
    "@types/styled-components": "^5.1.24",
    "@typescript-eslint/eslint-plugin": "^5.13.0",
    "@typescript-eslint/parser": "^5.13.0",
    "babel-loader": "^8.2.3",
    "babel-plugin-styled-components": "^2.0.6",
    "eslint": "^8.10.0",
    "eslint-config-next": "12.1.0",
    "eslint-config-prettier": "^8.4.0",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.29.2",
    "eslint-plugin-react-hooks": "^4.3.0",
    "eslint-plugin-storybook": "^0.5.7",
    "husky": "^7.0.4",
    "jest": "^27.5.1",
    "jest-styled-components": "^7.0.8",
    "lint-staged": "^12.3.4",
    "prettier": "2.5.1",
    "typescript": "4.5.5"
  }
}
```
```
git status
git add
git commit -m "ATUALIZAÇÃO FALHA DE SEGURANÇA PACOTE TRIM"
git push origin main
```