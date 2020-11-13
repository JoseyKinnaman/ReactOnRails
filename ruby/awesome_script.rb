

require('./lib/awesome_people')
awesome = Awesome.new([{ name: "Sarah", awesomeness: 5 },
  { name: "Jane", awesomeness: 2 },
  { name: "Josey", awesomeness: 100},
  { name: "Peter", awesomeness: 10},
  { name: "Clyde", awesomeness: 6},
  { name: "Percy", awesomeness: 8},
  { name: "Hank", awesomeness: 7},
  { name: "George", awesomeness: 3},
  { name: "Wilma", awesomeness: 1},
  { name: "Olga", awesomeness: 4},
  { name: "Max", awesomeness: 33}])

awesome.print_script

