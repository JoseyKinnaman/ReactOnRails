require('rspec')
require('awesome_people')

describe('Awesome')do
  describe('Awesome#most_awesome') do 
    it("Responding with the most awesome person") do
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
      expect(awesome.most_awesome).to(eq(:awesomeness => 100, :name => "Josey"))
    end
  end
  describe('Awesome#average_awesome') do 
    it("Determining the average awesomeness of all the people") do
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
    expect(awesome.average_awesome).to(eq(16))
    end
  end
  describe('Awesome#top_ten') do 
  it("Print a list of the 10 most awesome people to STDOUT") do
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
    expect(awesome.top_ten).to(eq("Josey, Max, Peter, Percy, Hank, Clyde, Sarah, Olga, George, Jane"))
    end
  end
end
