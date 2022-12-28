class AbilitiesController < ApplicationController

    def create
        character = Character.find(params[:characterID])
        ability = Ability.create!(strength: params[:strength], dexterity: params[:dexterity], constitution: params[:constitution], intelligence: params[:intelligence], wisdom: params[:wisdom], charisma: params[:charisma], character_id: params[:characterID])
        render json: ability, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def show
        character = Character.find(params[:id])
        ability = Ability.find_by(character_id: character.id)
        render json: ability, status: :ok
    end
end
