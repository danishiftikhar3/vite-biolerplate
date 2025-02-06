# Installation

Add .env file

```
VITE_API_BASE_URL=http://localhost:4000
```

Install node modules

```
pnpm i --frozen-lockfile
```

To run project

```
pnpm dev
```

# Lint

To find lint issues

```
pnpm lint
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

while generating routes run yarn tsr:watch or after adding a route run yarn tsr

# Build & Deploy

Before deployment, please confirm if build can be done successfully on local.

```
pnpm build
```
