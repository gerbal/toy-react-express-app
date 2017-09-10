# Express React Login App 

This is a simple React + Express app. Express serves react and supplies an API for registering and logging in users.

It authenticates the user but does not set a token or any method of verifying the users identity after initial login.

## Installing

```bash
git clone 'this-repo-url' app-name
cd app-name
yarn install
```

## Running The App

### Dev Mode 

```bash
yarn serve:dev
```

### Production mode

```bash
npm serve:prod
```

Now visit the Express app at 'http://localhost:3001' 

## TODO

 - Hand the user back an actuall token
 - Validate token on future API requests
 - Test components beyond lazy shallow rendering
 - Fix log out routing behavior to avoide use of `context.router`

## Acknowledgements

Based on the [burkeholland/express-react-starter](https://github.com/burkeholland/express-react-starter).