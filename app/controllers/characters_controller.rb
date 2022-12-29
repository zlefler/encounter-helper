class CharactersController < ApplicationController

    def create
        user = User.find(session[:user_id])
        new_char = Character.create!(name: params[:name], level: params[:level], user_id: user.id)
        create_skills(new_char.id)
        create_abilities(new_char.id)
        render json: new_char, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end   
    
    def show
        user = User.find(session[:user_id])
        render json: user.characters
    end

    def create_abilities(id)
        Ability.create(
            character_id: id,
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
        )
    end

    def create_skills(id)
        Skill.create(
            character_id: id,
            acrobatics: 0,
            appraise: 0,
            bluff: 0,
            climb: 0,
            craft: 0,
            diplomacy: 0,
            disable_device: 0,
            disguise: 0,
            escape_artist: 0,
            fly: 0,
            handle_animal: 0,
            heal: 0,
            intimidate: 0,
            knowledge_arcana: 0,
            knowledge_dungeoneering: 0,
            knowledge_engineering: 0,
            knowledge_geography: 0,
            knowledge_history: 0,
            knowledge_local: 0,
            knowledge_nature: 0,
            knowledge_nobility: 0,
            knowledge_planes: 0,
            knowledge_religion: 0,
            linguistics: 0,
            perception: 0,
            perform: 0,
            profession: 0,
            ride: 0,
            sense_motive: 0,
            sleight_of_hand: 0,
            spellcraft: 0,
            stealth: 0,
            survival: 0,
            swim: 0,
            use_magic_device: 0
        )
    end


end
