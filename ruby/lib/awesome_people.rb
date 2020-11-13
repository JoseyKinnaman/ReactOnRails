
class Awesome

  def initialize(people)
    @people = people
  end

  def most_awesome
    @people.max_by {|person| person[:awesomeness]}
  end

  def average_awesome
    @people.map { |x| x[:awesomeness] }.sum / @people.size
  end

  def top_ten
    top_ten = @people.group_by { |r| r[:awesomeness]}.sort_by { |k, v| -k }.first(10).map(&:last).flatten
    top_ten.map { |x| x [:name]}.join(", ")
  end

    def print_script
      puts  "The most awesome person is #{most_awesome[:name]} with an awesomeness rating of #{most_awesome[:awesomeness]}!"
      puts  "The average amount of awesome here is #{average_awesome}!"
      puts "The top ten most awesome people are #{top_ten}."
  end

end
