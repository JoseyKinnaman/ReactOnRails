#### Get started

To ensure the most compatibility, it is best to have Ruby version
~>2.5 installed for this application. The `.ruby-version` file
included in this repo specifies `2.5.3`.

In the `rails` directory, run

```shell
yarn install
bundle install
bundle exec rails db:create db:migrate db:seed
bundle exec rails server
```

This will start the server at [http://localhost:3000](http://localhost:3000).

### React

Once you get the server running (instructions below), the details of
this page will be at...
[http://localhost:3001](http://localhost:3001). The
app requires you to interact with the leaderboard API, which
is actually hosted inside the Rails app included in the `rails`
directory.

#### Get started

In the `react-app` directory, run

```shell
yarn install
yarn start
```

By default, the server for this app will attempt to run on port
`3000`. Since we need to run the Rails development server and the React
development server side-by-side, we need to modify the port the React
server runs on. We have modified the `start` command to set the port
to `3001` when starting. This will work if you are running this on a
a Linux or Mac operating system, but if you are using a Windows computer,
you may have to run `set PORT=3001 && yarn start` instead.
