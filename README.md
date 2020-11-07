# Planning Center Code Challenge

Congratulations on making it to this point in the interview process at
Planning Center! We are delighted that you have made it this far and
we're excited to see your solutions to the exercises we are about to
present to you. In all, we expect these challenges to take about 4-6
hours of your time (though this is NOT a time limit).

While we obviously are looking first and foremost for solutions that
work, feel free to also take this opportunity to let your personality
come through.

## General Instructions

First of all, we ask that you _do not_ share the challenges or your
solutions to the challenges publicly.

After you have completed the challenges, please zip or tarball up your
solutions and answers and email it back to us. Please take care to
make sure that any files starting with a dot (`.`) are also included
(e.g. `.eslintrc` or `.babelrc`). If you find your zipped file is
large, please do not include the `node_modules` directories inside
`rails` and `react-app`.

If you are on a computer running Linux or Mac OS, run this command from within
the folder containing this README.md file. Be sure to update the last argument
(`interview` in the example) to match the folder name you are in.

```shell
cd ..
tar --exclude='./rails/node_modules' \
    --exclude='./rails/tmp' \
    --exclude='./react-app/node_modules' \
    --exclude='.git' \
    -cvzf interview_YOUR_NAME.tgz interview
```

## The Challenges

Inside of this repo, there are four subdirectories. Each of the
subdirectories contains a challenge that will help us get an idea of
your abilities in a number of key technologies we use at Planning
Center.

- `questions` - Some general tech questions to help us get to know you
  and your experience
- `rails` - A Rails/jQuery coding challenge
- `react-app` - A React coding challenge
- `ruby` - A simple Ruby class coding challenge

Each subdirectory contains a `README.md` file in which there will be
further instructions or hints to get started (or, in the case of
`questions`, it is the only file; put your answers to the questions in
there). However, here's a general overview of the different sections.

### Questions

This is the most straight-forward of all the sections: there are
four questions we'd like to get your answers on. These are pretty
simple and for the most part, have no "correct" answer. We are not
looking to trick you or trip you up in any way so don't sweat them too
much.

### Rails

In this pretty simple Rails app, there is a `projects` resource. Each
`Project` has many `lists` and each `List` has many `items`. This
single-page app is a list/todo tracker for which we'd like for you to
implement jQuery AJAX callbacks to manage the page. More instructions
are located on the index page of the app.

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

Visiting that page will provide further instructions on how to
complete this part of the challenge.

### React

Once you get the server running (instructions below), the details of
this challenge will be on the page at
[http://localhost:3001](http://localhost:3001). The TLDR is you are
creating a leaderboard for a game played at your office. The
instructions require you to interact with the leaderboard API, which
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

### Ruby

While most of the Ruby that we write at Planning Center is in the
context of Rails, there are occasions in which we write plain old Ruby
classes. In this exercise, we'll have you implement a class that
can sort people based on how awesome they are. Further details are in
that [README](ruby/README.md).

#### Get started

This one is pretty wide open for your implementation. Fill up the
`ruby` directory with your own classes, tests, helpers, etc. that you
feel is required to complete the challenge.
