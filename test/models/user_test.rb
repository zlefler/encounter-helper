require "test_helper"

class UserTest < ActiveSupport::TestCase
  test "doesn't save without password" do
    user = User.new(username: 'some_guy')
    assert_not user.save, "saved user without password"
  end
end
