# BootstrapSeed 2.0

The project is an application template in which some features of general interest have been included.

The template was generated with [Angular CLI](https://cli.angular.io) version 12.1.2. 
Later, [Bootstrap](https://getbootstrap.com/) was integrated and used 
as the basis for the graphics.

## Build

The current version of the project is developed using NodeJS 16. After cloning use `npm install` to get 
all dependencies and `npm run build` to compile everything.

## Run
The command `npm run start` starts the development server. The application wil be available at 
[http://localhost:4200]().

### Run as Electron Destop Application

#### MAC

The command `npm run mac:electron` compiles the application and run it as electron based desktop application.

#### Windows

The command `npm run win:electron` compiles the application and run it as electron based desktop application.

## Advertissements Section

This section is a revisited version of the 
[dynamic component loader](https://angular.io/guide/dynamic-component-loader) example.

## Alerts

The alerts page uses the same principle as the advertisements to display messages and alerts 
using as less space as possible.

# BootstrapSeed 2.0.1
## Changes
- Create dynamic components (alerts) without ComponentFactoryResolver (deprecated in Angular since 13)
- Bootstrap with Popper 2.x
- Angular 14.x
- Electron 15.x

# BootstrapSeed 2.0.2
## Changes
- Angular 15.x

# BootstrapSeed 2.0.3
## Changes
- Angular 16.x

# BootstrapSeed 2.0.4
## Changes
- @electron-forge 6.1.1
- @popperjs/core 2.11.8
- bootstrap 5.3.0
- bootstrap-icons 1.10.5
- rxjs 7.8.1
- typescript 5.0.4

# BootstrapSeed 2.0.5
## Changes
fixed some vulnerabilities

# BootstrapSeed 2.0.6
## Changes
fixed some vulnerabilities

# BootstrapSeed 2.0.7
## Changes
upgrade to Angular 19.x LTS

# BootstrapSeed 2.0.8
## Changes
- Upgraded Angular 19.x toolchain to the 19.2.x patchline and aligned the CLI/compiler/devkit to be consistent.
- Updated `@angular-devkit/build-angular` to a 19.2.x patch, and bumped other build/dev tooling where needed.
- Upgraded Bootstrap to 5.3.8 and aligned small libraries (rxjs/tslib/zone.js) to current safe patch versions.
- Bumped Electron to 38.2.0 to address a security advisory related to ASAR integrity (requires runtime testing).
- Ran `npm audit` and applied available automatic fixes; resolved transitive vulnerabilities (axios/tmp/@inquirer/editor) where possible.
- Note: peer-dependency resolution was allowed with `--legacy-peer-deps` during install to complete the upgrade; please run a full build and smoke tests locally to validate runtime behavior.

## Next steps / recommendations
- Run the app and test both the web and electron flows (build, start, and package commands) to validate behavior after the Electron major bump.
- Consider planning a focused migration to Angular 20 and updating electron-forge/eslint to their latest majors in a separate branch when you're ready.
