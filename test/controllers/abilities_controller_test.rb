require "test_helper"

class AbilitiesControllerTest < ActionDispatch::IntegrationTest
  test "shows abilities with proper ID" do
    get '/abilities/1'
    assert_equal(response, Ability.first)
  end

  # test "new abilities are created and associated with user" do
  #   post '/abilities', headers: {'Content-Type' => 'application/json'}, params: {strength: 10, dexterity: 9, constitution: 12, intelligence: 12, wisdom: 11, charisma: 10, character_id: Character.first.id}
  #   assert_equal(Character.first.ability, response)
  # end
end
