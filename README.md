# TypeScript, Jest and ECMAScript Modules (ESM)

> Inspired by [Gist](https://gist.github.com/danpetitt/37f5c966886f54e457ece4b08d66e404) from @danpetitt

Being frustrated by many outdated blog posts and misleading guides, I decided to create this boilerplate, so it may save hours/days of research to make things work which I would expect working out of the box (unfortunately, they don't).

This is a minimalistic setup using TypeScript with ESM modules for a typical Node.js project with some important capabilities (in my view) like debugging.

On top what is described in the original Gist, this repo contains the following features:
- Support for absolute paths when importing modules (to avoid hell of `../../../`);
- Pre-setup configs for debugging: both TS files and Jest tests for VSCode & WebStorm;
- Dev mode with watching for changed files (using [tsx](https://www.npmjs.com/package/tsx));
- Hide complex/scary configs by using official presets for `tsconfig` & `ts-jest` (main motivation — less maintenance if something changes).

Enjoy! 🎉
