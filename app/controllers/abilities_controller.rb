class AbilitiesController < ApplicationController

    def create
        ability = Ability.create!(strength: params[:strength], dexterity: params[:dexterity, constitution: params[:constitution], intelligence: params[:intelligence], wisdom: params[wisdom], charisma: params[:charisma], character_id: params[:character_id]])
        render json: ability, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def 

    def update
        ability = Ability.find(params[:id])
        ability.update(strength: params[:strength], dexterity: params[:dexterity, constitution: params[:constitution], intelligence: params[:intelligence], wisdom: params[wisdom], charisma: params[:charisma], character_id: ability.character_id])
        render json: {ability}
    end
end
