# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Level.destroy_all

matt = User.create(name: "Matteo", current_level: 1, password: 'game')
lauren = User.create(name: "Lauren", current_level: 3, password: 'game')

level1 = Level.create(level_number: 1, level_title: "Orange you glad I didn't say banana", backdrop: 'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60')
level2 = Level.create(level_number: 2, level_title: "Twos a Crowd", backdrop: 'https://i.redd.it/54awv7jxe4e41.jpg')
level3 = Level.create(level_number: 3, level_title: "Cow's got back", backdrop: 'https://www.dumpaday.com/wp-content/uploads/2018/06/random-pictures-10.jpg')