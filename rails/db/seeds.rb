project = Project.create!(name: 'Planning Center')
list = project.lists.create!(name: 'Home')
list.items.create!(content: 'Buy milk')
list.items.create!(content: 'Take out the trash')
