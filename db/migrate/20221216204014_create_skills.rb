class CreateSkills < ActiveRecord::Migration[7.0]
  def change
    create_table :skills do |t|
      t.integer :acrobatics
      t.integer :appraise
      t.integer :bluff
      t.integer :climb
      t.integer :craft
      t.integer :diplomacy
      t.integer :disable_device
      t.integer :disguise
      t.integer :escape_artist
      t.integer :fly
      t.integer :handle_animal
      t.integer :heal
      t.integer :intimidate
      t.integer :knowledge_arcana
      t.integer :knowledge_dungeoneering
      t.integer :knowledge_engineering
      t.integer :knowledge_geography
      t.integer :knowledge_history
      t.integer :knowledge_local
      t.integer :knowledge_nature
      t.integer :knowledge_nobility
      t.integer :knowledge_planes
      t.integer :knowledge_religion
      t.integer :linguistics
      t.integer :perception
      t.integer :perform
      t.integer :profession
      t.integer :ride
      t.integer :sense_motive
      t.integer :sleight_of_hand
      t.integer :spellcraft
      t.integer :stealth
      t.integer :survival
      t.integer :swim
      t.integer :use_magic_device
      t.integer :character_id, null: false
      t.timestamps
    end
  end
end
