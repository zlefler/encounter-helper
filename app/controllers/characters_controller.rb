class CharactersController < ApplicationController

    def create
        user = User.find(session[:user_id])
        new_char = Character.create!(name: params[:name], level: params[:level], user_id: user.id)
        render json: new_char, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end   
    
    def show
        user = User.find(session[:user_id])
        render json: user.characters
    end




end
