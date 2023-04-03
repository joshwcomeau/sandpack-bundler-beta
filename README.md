# Sandpack bundler

This repo holds the bundler used in courses.joshwcomeau.com, by the Sandpack library.

It's deployed separately, on Vercel. I haven't purchased a domain, I use the vercel.app URL.

Here's why I self-host:

- Not dependent on CodeSandbox maintaining this library, no issues if their servers crash
- I can include my own static assets, to be referenced within supplied code. I currently have lots of images, as well as the Wotfard + Source Code Pro fonts.

## Generating the bundler

In order to self-host, we have to follow a procedure to generate the bundle from the codesandbox-client codebase.

Link to steps: https://sandpack.codesandbox.io/docs/advanced-usage/client#hosting-the-bundler

Here are the steps to perform:

1. `cd` into `/work/forks/codesandbox-client`. Do a `git pull origin master` to make sure I have the latest files
2. Switch to Node v10 with NVM (or whichever version is requested by `engines` in package.json)
3. Reinstall dependencies with `yarn install`.
4. `yarn build:deps` to build some of the packages lerna needs for internal links.
5. `yarn build:sandpack` to create the built files

Now, the tricky thing: I already have a deployed and compiled bundler! We need to merge them.

1. Inside `/work/sandpack-bundler`, move my assets out. Move the `fonts`, `img`, and `videos` directories to a safe place.
2. Copy the `/work/forks/codesandbox-client/www` over, overwriting `/work/sandpack-bundler/www`.
3. Push to github to deploy!
