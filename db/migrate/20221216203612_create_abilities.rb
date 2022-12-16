class CreateAbilities < ActiveRecord::Migration[7.0]
  def change
    create_table :abilities do |t|
      t.integer :strength, null: false
      t.integer :dexterity, null: false
      t.integer :constitution, null: false
      t.integer :intelligence, null: false
      t.integer :wisdom, null: false
      t.integer :charisma, null: false
      t.integer :character_id, null: false
      t.timestamps
    end
  end
end
