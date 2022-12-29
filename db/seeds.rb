# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.create([{username: 'asdf', password_digest: BCrypt::Password.create('1234')}, {username: 'fdsa', password_digest: BCrypt::Password.create('4321')}])

Character.create([{name: 'Astaroth', user_id: 1}])

Ability.first.update([{strength: 14, dexterity: 11, constitution: 12, intelligence: 14, wisdom: 11, charisma: 9, character_id: 1}])

Skill.first.update([{perception: 5, use_magic_device: 8, intimidate: 12, character_id: 1}])