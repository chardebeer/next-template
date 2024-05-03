This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Using Storybook
Run the storybook server by running the below:

```bash
npm run storybook
# or
yarn storybook
```

Open[http://localhost:6000](http://localhost:6000) to view it in the browser.

## Available Commands

There are some commands preadded to this template. These commands will help to execute basic tasks.

1. Following command will start the dev server at port `3000` and we can visit the site at **http://localhost:3000**.

   ```bash
   npm run dev
    # or
   yarn dev
   ```

2. Following command will create a production build of the site.

   ```bash
   npm run build
   # or
   yarn build
   ```

3. Following command will start a server at port `3000` with the production build (created using `yarn build`) and we can visit the site at **http://localhost:3000**.

   ```bash
   npm run start
   # or
   yarn start
   ```

4. Following command will check any linting issue according to the eslint rules set in the `.eslintrc.json` file.

   ```bash
   npm run lint
   # or
   yarn lint
   ```

5. Following command will execute all the unit tests (file with `*.test.jsx`, `*.test.tsx`, `*.test.js` or `*.test.ts` extention) and check whether all the tests pass or not.

   ```bash
   npm run test
   #or
   yarn test
   ```

6. Following command will execute unit tests (file with `*.test.jsx`, `*.test.tsx`, `*.test.js` or `*.test.ts` extention) and check whether all the tests pass or not in the real-time.

   ```bash
   npm run test
   #or
   yarn test:watch
   ```

7. Following command will start the storybook server at port 6006 and we can visit the story at **http://localhost:6006**.

   ```bash
   npm run storybook
   #or
   yarn storybook
   ```

8. Following command will create a static web application capable of being served by any web server. For more info please visit [**Publish Storybook**](https://storybook.js.org/docs/react/sharing/publish-storybook).

   ```bash
   npm run build-storybook
   yarn build-storybook
   ```

## Folder Structure

Before working on a project, we should know about its folder structure. This helps a lot to understand where to find which components or portion of codes. In this template, the folder structure was tried to be kept as simple as possible.

1. <ins>**.github/workflows**</ins>: This folder is used to **keep all the files related to github actions**. We've already setup a basic CI/CD in the template and named the file `tests.yml`. We can create more yml files for different actions.
2. <ins>**.storybook**</ins>: All the storybook related config files like theme, seo, preview, manager etc live inside this folder.
3. <ins>**components**</ins>: In our web app, we'll have to build many reusable components like button, input, modal etc. This is the place where we can keep all our reusable components. While creating a component we have tto ensure the following rules have been followed in order to maintain the consistency.

   1. Each **component must have a folder and index.js** file inside the folder. For example: if we are creating a button component, the structure should be:

      ```
      components
      | - Buttton
          | - Button.jsx
          | - index.js
      ```

      Then we can access the component from outside using `./componets/Button`.

   2. If a component has some sub-components, then we can keep them in a folder named `subComponents` inside that component.

      ```
      components
      | - Buttton
          | - subComponents
              | - ButtonOverlay
                  | - ButtonOverlay.jsx
                  | - index.js
          | - Button.jsx
          | - index.js
      ```

   3. Each component must have a story file (for storybook). Story file names should be in `<Component Name>.stories.jsx` this format.

      ```
      components
      | - Buttton
          | - subComponents
              | - ButtonOverlay
                  | - ButtonOverlay.jsx
                  | - index.js
          | - Button.jsx
          | - Button.stories.jsx
          | - index.js
      ```

   4. Each component and sub-components must have a test file (for unit testing). Test file names should be in `<Component Name>.test.jsx` this format.

      ```
      components
      | - Buttton
          | - subComponents
              | - ButtonOverlay
                  | - ButtonOverlay.jsx
                  | - ButtonOverlay.test.jsx
                  | - index.js
          | - Button.jsx
          | - Button.stories.jsx
          | - Button.test.jsx
          | - index.js
      ```

   That's a general set of rules for the `components` folder. But of course, you can set your own rules and structure. In that case, you might have to change storybook, jest, and other configs.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
