class Character < ApplicationRecord
    belongs_to :user
    has_many :weapons
    has_many :abilities
    has_many :skills
end
