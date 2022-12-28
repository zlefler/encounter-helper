class CreateWeapons < ActiveRecord::Migration[7.0]
  def change
    create_table :weapons do |t|
      t.string :name
      t.integer :dice_type
      t.integer :dice_num
      t.integer :crit_range_start
      t.integer :crit_range_end
      t.integer :crit_multiplier
      t.string :type
      t.integer :range
      t.boolean :is_ranged
      t.integer :character_id, null: false
      t.timestamps
    end
  end
end
