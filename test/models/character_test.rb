require "test_helper"

class CharacterTest < ActiveSupport::TestCase
  test "character associates with user" do
    user = User.first
    character = Character.create(name: 'guy', user_id: user.id)
    assert_equal(character.user, user)
  end

end
