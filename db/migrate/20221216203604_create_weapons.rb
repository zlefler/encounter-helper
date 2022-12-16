class CreateWeapons < ActiveRecord::Migration[7.0]
  def change
    create_table :weapons do |t|
      t.string :name
      t.integer :attack_bonus
      t.integer :crit_range
      t.integer :crit_multiplier
      t.string :type
      t.integer :range
      t.boolean :is_ranged
      t.integer :character_id
      t.timestamps
    end
  end
end
