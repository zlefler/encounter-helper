require "test_helper"

class AbilitiesControllerTest < ActionDispatch::IntegrationTest
  # test "shows abilities with proper ID" do
  #   Character.create(name: 'guy', level: 5)
  #   get '/abilities/1'
  #   assert_equal(response, Ability.first)
  # end


  # test "new abilities are created and associated with user" do
  #   Character.create(name: 'guy', level: 5)
  #   post '/abilities', headers: {'Content-Type' => 'application/json'}, params: {"strength": "10", "dexterity": "9", "constitution": "12", "intelligence": "12", "wisdom": "11", "charisma": "10", "character_id": "1"}
  #   new_ability = response
  #   assert_equal(Character.first.ability, response)
  # end
  
  # test "updates abilities" do
  #   get "/abilities/1"
  #   before = response
  #   patch '/abilities/1', headers: {'Content-Type' => 'application/json'}, params: {strength: 5}
  #   assert_not_equal(response, before)
  # end

end
