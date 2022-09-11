# Boilerplate do grupo de desenvolvimento dotMind

**dotMind** é um grupo formado para o desenvolvimento de sistemas. Este repositório tem por finalidade facilitar a criação de um ambiente de desenvolvimento baseado nas tecnologias NextJS, TypeScript, Strapi, Postgres dentre outras.
Este boilerplate foi testado em máquinas com chips Apple M1

{ INSERIR REFERENCIA AO BOILERPLATE DO WILLIAN JUSTEN}

---

## Utilização

`yarn create next-app -e https://github.com/<repo boilerplate> <nome projeto>`

## Docker, Nodejs, Strapi e Postgres

### Criar conta para uso do Docker - gratuito

[Criar conta no Docker](https://hub.docker.com)

- Download do Docker para Mac with Apple Silicon

[Docker Mac M1](https://hub.docker.com/editions/community/docker-ce-desktop-mac)

- Estrutura do diretório para utilização do container
- Arquivo docker composer para configuração do container
- Teste do container do postgres

```shell
cd ~/MeuProjeto
mkdir data
```

docker-compose.yml:

```dockerfile
version: "3"
services:
  postgres:
    image: postgres
    environment:
      POSTGRES_USER: strapi
      POSTGRES_PASSWORD: strapi123
    volumes:
      - ./data:/var/lib/postgresql/data
    ports:
      - "5432:5432”
```

`docker-compose up -d`

### Instalação do Nodejs e yarn

- Download NVM como versionador
- Habilitar base do XCode
- Instalar yarn

[Instruções de instalação NVM](https://nodejs.dev)

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
sudo Xcode-select --install
nvm install 16.14.0
npm install --global yarn
```

- Comandos NVM úteis:

```shell
nvm current
nvm ls
nvm use 16.14.0
nvm uninstall 13.17.6
```

### Instalação Strapi com Postgres

- Instalar Utilizando:
  - installation type Custom
  - default database client postgres
  - database name strapi
  - host 127.0.0.1
  - port 5432
  - username strapi
  - password strapi123
  - SSL connection No

`yarn create strapi-app api`

### NOTAS IMPORTANTES

- Diretório de dados do Postgres é data. Caso queira apaagar a base de Dados, basta remover esse diretório e reiniciar o container
- Após a instalação do strapi, entre no diretório api e execute o strapi para configurar o acesso do usuario administrador
- Utilize para First/LastName strapi / strapi e para senha Strapi123

---

## Configuração Nodejs VsCode NextJS Brew Git

### VSCode

- Dowload VSCode
[Download VSCode](https://code.visualstudio.com/Download)
- Instalação das extensions
  - clone o repositório: <https://github.com/React-Avancado/reactavancado-extension-pack>
  - instale o vsce
  - crie o pacote da extensão
  - instale a extensão a partir do arquivo .visix gerado anteriormente
    - VSCode / Extensions Menu / More / Install from VISIX / Reload Now

```shell
wget https://code.visualstudio.com/sha/download?build=stable&os=darwin-arm64
git clone https://github.com/React-Avancado/reactavancado-extension-pack
cd reactavancado-extension-pack
npm install -g vsce
vsce package
```

- Adicionar VSCode ao path abrindo o Command Palette (Cmd+Shift+P)
  - Procure por 'shell command'
  - Opção Install 'code' command in PATH

### Brew e Git

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install git
cd ~/MeuProjeto
git init
```

### Projeto NextJs

- Criar um projeto boilerplate
- Sinalizar utilização de TypeScript
- Verificar e instalar dependencias para TypeScript
- Teste, tipagem e configuração do typescript

```shell
cd ~/MeuProjeto
yarn create next-app frontpage
cd frontpage
touch tsconfig.json
yarn dev
yarn add --dev typescript@4.5.5 @types/react @types/node
yarn dev
```

tsconfig.json:

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

### Organização diretórios e suporte de jsx em javascript

- Criar diretório src e mover pasta pages para dentro de src
- renomear extensão da index de .ts para .tsx

```shell
cd ~/MeuProjeto/frontpage
mkdir src
mv pages/index.js pages/index.jsx
mv pages src
```

### Configurar VSCode

- Configurar a consistência dos arquivos no VSCode via editor config

.editorconfig:

```txt
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

- Instalar o ESLint escolhendo:
  - checar sintaxe e encontrar problemas
  - javascript modules - import / export
  - react
  - typescript
  - browser
  - json
  - yarn -> será apresentado uma relação de plugins para ser instalada manualmente.

```shell
npx eslint --init
yarn add --dev eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest eslint@latest
```

### Plugins e Configurações .eslintrc.json

- Instalar ESLINT-PLUGIN-REACT-HOOKS
- Configurar Plugins
  - ESLINT-PLUGIN-REACT-HOOKS: melhora o desenvolvimento com relação à utilização de hooks e dependências
  - Desligar PROP-TYPES: para não sermos lembrados a todo momento de que não há PROP TYPES
  - Desligar REACT-IN-JSX-SCOPE: o Nextjs já importa React globalmente
  - Desligar EXPLICT-MODULE-BOUNDARY-TYPES: evita a necessidade de tipar todo retorno de função aumentando assim a verbosidade
  - Observar configuração customizada separada para "plugins" e "rules"
  - Configurar a versão do react em "settings" para o correto funcionamento do REACT-PLUGIN
- Instalar ESLINT-PLUGIN-NEXT para funcionamento adequado do modo PRODUÇÃO (NODE_ENV=production; yarn build)

[Migrating Existing Config: eslint-plugin-next](https://nextjs.org/docs/basic-features/eslint#migrating-existing-config)

[Configuração dos plugins: typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin/docs/rules)

[Eslint-Plugin-React-Hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)

```shell
yarn add eslint-plugin-react-hooks --dev
yarn add @next/eslint-plugin-next --dev
```

.eslintrc.json:

```json
{
    "root": true,
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
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-non-null-assertion": "off"
    }
}
```

### Configurar package.json, VSCode extensions e teste

- Habilitar o plugin do eslint dentro do VSCode Extensions
- Configurar "scripts" de package.json para chamar o ESLINT

~/MeuProjeto/frontpage/package.json:

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

- Testar comando eslint no terminal

`yarn lint`

---

## Prettier

- Instalar e configurar

`yarn add --dev --exact prettier`

~/MeuProjeto/frontpage/.prettierrc:

```json
{
"trailingComma": "none",
"semi": false,
"singleQuote": true
}
```

- Instalar plugins de integração com eslint: prettier como uma regra do eslint

`yarn add --dev eslint-plugin-prettier eslint-config-prettier`

- Configurar regra para execução do prettier pelo eslint em .eslintrc.json

~/MeuProjeto/frontpage/.eslintrc.json:

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
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-non-null-assertion": "off"
    }
}
```

### VSCode e Prettier

- Configurar VSCode para executar eslint/prettier antes de salvar

```shell
cd ~/MeuProjeto/frontpage
mkdir .vscode
cd .vscode
touch settings.json
```

settings.json`

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

- Reload do plugin ESLINT para ativar alterações no VSCode

---

## Git Hooks: Husky e Lint-Staged

- Instalar e configurar Husky e Lint-staged

```shell
yarn add husky lint-staged --dev
yarn husky install
yarn husky add .husky/pre-commit "yarn lint-staged"
```

package.json:

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

- Caso o diretório .git seja removido, instalar novamente o husky e adicionar novamento o hook para o pre-commit

```shell
git init
yarn husky install
yarn husky add .husky/pre-commit "yarn lint-staged"
```

---

## Jest com Babel e TypeScript

### TypeScript

- Configurar
  - "node": true adicionado ao "env" de .eslintrc.json  pelo fato de que jest utiliza module.exports e a falta desta configuração faria o eslint gerar avisos

.eslintrc.json:

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
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-non-null-assertion": "off"
    }
}
```

- Instalar e configurar Jest

`yarn add jest @babel/preset-typescript @types/jest --dev`

~/MeuProjeto/frontpage/jest.config.js:

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

### Babel

- Configurar
  - next/babel para escrever os códigos de teste no Jest utilizando novidades de JavaScript
  - @babel/preset-typescript pelo fato de estarem escritos em typescript

~/MeuProjeto/frontpage/.babelrc`

```json
{
 "presets": ["next/babel", "@babel/preset-typescript"]
}
```

~/MeuProjeto/frontpage/package.json`

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

- Jest Setup
  - .jest/setup.ts contém as informações do Jest tais como imports de assets, expects e outros artefatos para trabalhar com jsdom

```shell
cd ~/MeuProjeto/frontpage
mkdir .jest
cd .jest
touch setup.ts
```

---

## React Testing Library

- Instalar React Testing Library e Matcher do Jest (jest-dom)
- Criar arquivos para teste e testar

```shell
cd ~/MeuProjeto/frontpage
yarn add --dev @testing-library/react @testing-library/jest-dom
echo "import '@testing-library/jest-dom' >> .jest/setup.ts"
cd src
mkdir components components/Main
cd components/Main
touch index.tsx test.tsx
```

index.tsx:

```jsx
const Main = () => (
 <main>
  <h1>React</h1>
 </main>
)

export default Main
```

- Baixar e imprimir o cheat sheet para funções de teste
[Cheat Sheet](https://github.com/testing-library/react-testing-library/raw/main/other/cheat-sheet.pdf)

test.tsx:

```jsx
import { render, screen } from '@testing-library/react'

import Main from '.'

describe ('<Main />', () => {
 it ('should render the heading', () => {
   render(<Main />)
   expect(
    screen.getByRole('heading', { name: /react avançado/i })
   ).toBeInTheDocument()
 })
})
```

- Rodar o teste e verificar ocorrência intencional da falha

```shell
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

- Alterar index.tsx para passar no teste e novamente verificar

~/MeuProjeto/frontpage/src/components/Main/index.tsx:

```jsx
const Main = () => (
 <main>
  <h1>React Avançado</h1>
 </main>
)

export default Main
```

```shell
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

- Configurar script para teste assistido, "test:watch"

package.json:

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

- Configurar snapshot no arquivo de teste

src/components/Main/test.tsx:

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

- Para testar o snapshot, rodar o teste uma vez e depois alter o heading de h1 para h2 em main.tsx, de forma que passe no primeiro test mas falhe no snapshot
- Notas:
  - Se estiver utilizando "test:watch", ao digitar "u" teremos a atualização do snapshot
  - No teste manual o snapshot é atulizado com yarn test -u
  - O snapshot faz parte do repositório

### Lint-Staged

O Lint Staged é executado no momento do commit e evita que bugs entrem no versionamento

- Adicionar testes ao LINT-STAGED
  - "yarn test --findRelatedTests --bail":
  - **bail** serve para que tudo pare ao primeiro teste que não passe
  - **findRelatedTests** serve para que modificações em arquivos que não sejam relacionadas com os testes não quebrem o processo informando que não há testes para testar

package.json:

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

- Instalar Styled-Components
- Instalar dependencias de desenvolvimento e configurar Babel
- Instalar integração de Styled Components com JEST

[Jest Integration](https://styled-components.com/docs/tooling#jest-integration)

```shell
yarn add styled-components
yarn add --dev @types/styled-components babel-plugin-styled-components jest-styled-components
```

.jest/setup.ts:

```typescript
import '@testing-library/jest-dom'
import 'jest-styled-components'
```

.babelrc:

```javascript
{
 "presets": ["next/babel", "@babel/preset-typescript"],
 "plugins": [
   [  "babel-plugin-styled-components",
     {
      "ssr": true
    }
   ]
 ]
}
```

- Configurar _document.tsx, arquivo padrão do Nextjs, para passar informações ao Nextjs sobre a renderização das páginas
- Disponibilizar a função Render para permitir que se edite a linguagem HTML e outros detalhes sem que o nextjs faça uma renderização padrão das paginas, o que ocasionaria em conflitos com o Styled Components

[Custom `Document` _document.tsx](https://nextjs.org/docs/advanced-features/custom-document)

pages/_document.tsx:

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
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
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

- Testar o carregamento dos originais gerados pelo NextJs acessando <http://localhost:3000>

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

### createGlobalStyle

- Criando estilos globais com o helper createGlobalStyle
  - Estruturar diretório e arquivo global.ts
  - Organizar bordas, marges, box-sizing, fonts padrão, temas e etc
  - Organizar src/pages/index.tsx
  - Criar src/pages/_app.tsx para importar o global style
  - _app.tsx tem a função de permitir as seguintes funcionalidades:
    - Persistência de layout durante mudança de páginas
    - persistência de estado durante a navegação
    - injeção de dados adicionais
    - global css
    - path alias e absolute imports (tsconfig.json)

[Modelo _app.tsx](https://nextjs.org/docs/basic-features/typescript#custom-app)

```shell
cd ~/MeuProjeto/frontpage/src/
mkdir styles
touch styles/global.ts
```

~/MeuProjeto/frontpage/tsconfig.json:

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

styles/global.ts:

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

pages/_app.tsx:

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

pages/index.tsx:

```typescript
import Main from 'components/Main'

export default function Home() {
  return <Main />
}
```

---

## Criando Estilos em Componentes

- Criar para cada componente um arquivo styles.ts e configurar os estilos
- No componente, index.tsx, importar todos os estilos como 'S' para facilitar a identificação entre estilos e componentes
- Editar testes para incluir a verificação de estilos

`cd ~/MeuProjeto/frontpage/src/components/Main`

styles.ts:

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

index.tsx:

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

test.tsx:

```typescript
import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)
    expect(screen.getByRole('heading', { name: /react avançado/i }))
      .toBeInTheDocument()

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

- Instalar e configurar para utilizar global styles
- Instalar http-server para teste de staticos
- Instalar plugin de integração com o ESLint
- Instalar extension Storybook helper (Riccardo Forina) no VSCode
- Configurar stories para serem encontrados junto da pasta de cada componente
- Nomenclatura
  - Iniciar named story exports com Letra Maiúcula
- Configurar diretórios e ajustar para que a pasta public seja utilizada pelos stories
- Alterar component Main para receber parâmetros

[Context for mocking](https://storybook.js.org/docs/react/writing-stories/decorators#context-for-mocking)

[Write stories](https://storybook.js.org/docs/react/writing-stories/introduction)

### Configuração

```shell
cd ~/MeuProjeto/frontpage
yarn add --dev eslint-plugin-storybook
npx sb init
rm -rf stories
touch src/components/Main/stories.txs
brew install http-server
```

package.json:

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

.storybook/preview.js:

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

.storybook/main.js:

```javascript
module.exports = {
  "stories": [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [ "@storybook/addon-essentials" ],
  "framework": "@storybook/react"
}
```

- Configurar Componente Main e Executar Stories

src/components/Main/index.tsx:

```typescript
import * as S from './styles'

type mainProps = {
  title: string
  description: string
}
const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJs e Styled Components'
}: mainProps) => (
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

src/components/Main/stories.tsx:

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

### Execução

`yarn storybook`

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

### Execução Estático

```shell
yarn build-storybook
cd ~/MeuProjeto/frontpage/storybook-static
```

`http-server`

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

- Funcionamento off-line
- Instalar e Configurar puglins next-pwa
- Configurar PWA ativo apenas em Produção
- Configurar Manifest e Head Meta

[Site Next-PWA](https://www.npmjs.com/package/next-pwa)

```shell
cd  ~/MeuProjeto/frontpage
yarn add next-pwa
```

next.config.js:

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

public/manifest.json:

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

src/pages/_app.tsx:

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

### Teste PWA

- Testar PWA colocando no ambiente de Produção

```shell
NODE_ENV=production
yarn build
yarn start
```

---

## GitHub CLI & Pull Requests com DependaBot

- Criar repositório no github
- Fazer caching de github credentials
  - Instalar Github CLI gh
    - github.com
    - https
    - Autenticate to your GitHub credentias
    - Login with web browser

```shell
cd  ~/MeuProjeto/frontpage
brew install gh
gh auth login
git remote add origin https://github.com/<seu usuario git>/<boilerplate name>.git
git branch -M main
git push -u origin main
```

- Habilitar dependabot no github
  - abrir repositório no github e procurar por settings/security/code security and analysis
  - habilitar dependabot alerts e dependabot security updates
- Configurar diretório github e arquivos

```shell
cd ~/MeuProjeto/frontpage
mkdir .github
touch .github/dependabot.yml
cd .github
```

dependabot.yml:

```yaml
version: 2
updates:
- package-ecosystem: yarn
  directory: "/"
  schedule:
    interval: daily
  open-pull-requests-limit: 10
```

- Atualizar repositório

```shell
cd ~/MeuProjeto/frontpage
git status
git add .
git status
git commit -m "INTEGRAÇÃO DEPENDABOT"
git push origin main
```

- Entrar no github do projeto e ver os dependabot alerts

---

## Workflow / Continous Integration no GitHub

- Configurar diretórios e arquivos para integração

```shell
cd ~/MeuProjeto/frontpage/.github
mkdir workflows
touch workflows/ci.yml
```

### Configuração Integração

workflows/ci.yml:

```yaml
name: ci
on: [push]

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

`cd ~/MeuProjeto/frontpage`

package.json:

```json
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
    "test:ci":"jest",
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
    "**/trim": "^1.0.0",
    "**/glob-parent": "^5.1.2"
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

- Verificar funcionamento no github pull requests após enviar um push

---

## Integração com Plop

Plop facilita a criação de componentes pela criação dos arquivos necessários: index.tsx, stories.tsx, styles.ts e test.tsx

- Plop case modifiers
  - **camelCase**: changeFormatToThis
  - **snakeCase**: change_format_to_this
  - **dashCase/kebabCase**: change-format-to-this
  - **dotCase**: change.format.to.this
  - **pathCase**: change/format/to/this
  - **properCase/pascalCase**: ChangeFormatToThis
  - **lowerCase**: change format to this
  - **sentenceCase**: Change format to this,
  - **constantCase**: CHANGE_FORMAT_TO_THIS
  - **titleCase**: Change Format To This

- Instalar e Configurar

[PlopJS](https://plopjs.com)

```shell
cd ~/MeuProjeto/frontpage
yarn add --dev plop
mkdir generators
mkdir generators/templates
touch generators/plopfile.js
touch generators/templates/index.tsx.hbs
```

generators/plopfile.js:

```javascript
module.exports = function (plop) {
  // create your generators here
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  })
}
```

generators/templates/index.tsx.hbs:

```handlebars
import * as S from './styles'

const {{pascalCase name}} = ({}) => (
  <S.Wrapper>
    <h1>{{pascalCase name}}</h1>
  </S.Wrapper>
)
export default {{pascalCase name}}
```

generators/templates/stories.tsx.hbs`

```handlebars
import { ComponentStory, ComponentMeta } from '@storybook/react'

import {{pascalCase name}} from '.'

export default {
  title: '{{pascalCase name}}',
  component: {{pascalCase name}}
} as ComponentMeta<typeof {{pascalCase name}}>

const Template: ComponentStory<typeof {{pascalCase name}}> = (args) => <{{pascalCase name}} {...args} />

export const Basic = Template.bind({})

```

generators/templates/styles.ts.hbs`

```handlebars
import styled from 'styled-components'

export const Wrapper = styled.main``

```

generators/templates/test.tsx.hbs`

```handlebars
import { render, screen } from '@testing-library/react'

import {{pascalCase name}} from '.'

describe('<{{pascalCase name}} />', () => {
  it('should render the heading', () => {
    // const { container } =
    render(<{{pascalCase name}} />)
    expect(screen.getByRole('heading', { name: /{{pascalCase name}}/i })).toBeInTheDocument

    //expect(container.firstChild).toMatchSnapshot()
  })
})

```

package.json:

```json
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
    "test:ci": "jest",
    "test:watch": "yarn test --watch",
    "storybook": "start-storybook -s ./public -p 6006",
    "build-storybook": "build-storybook -s ./public",
    "generate": "yarn plop --plopfile ./generators/plopfile.js"
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
    "**/trim": "^1.0.0",
    "**/glob-parent": "^5.1.2"
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
    "plop": "^3.0.5",
    "prettier": "2.5.1",
    "typescript": "4.5.5"
  }
}
```

- Testar Plop na criação de um novo componente

`yarn generate NomeComponente`
