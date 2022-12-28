class SkillsController < ApplicationController
    def create
        character = Character.find(params[:characterID])
        skill = Skill.create!(abilities_params)
        render json: skill, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def show
        character = Character.find(params[:id])
        skill = Skill.find_by(character_id: character.id)
        render json: ability, status: :ok
    end

    private

    def abilities_params
        params.permit(:acrobatics,
            :appraise,
            :bluff,
            :climb,
            :craft,
            :diplomacy,
            :disable_device,
            :disguise,
            :escape_artist,
            :fly,
            :handle_animal,
            :heal,
            :intimidate,
            :knowledge_arcana,
            :knowledge_dungeoneering,
            :knowledge_engineering,
            :knowledge_geography,
            :knowledge_history,
            :knowledge_local,
            :knowledge_nature,
            :knowledge_nobility,
            :knowledge_planes,
            :knowledge_religion,
            :linguistics,
            :perception,
            :perform,
            :profession,
            :ride,
            :sense_motive,
            :sleight_of_hand,
            :spellcraft,
            :stealth,
            :survival,
            :swim,
            :use_magic_device)
end
