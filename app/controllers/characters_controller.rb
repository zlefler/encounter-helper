class CharactersController < ApplicationController

    def create
        user = User.find(session[:user_id])
        Character.create!(name: params[:name], user_id: user.id)
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
    
    def show
        user = User.find(session[:user_id])
        render json: user.characters
    end


end
