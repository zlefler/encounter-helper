class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.integer :user_id, null: false
      t.timestamps
    end
  end
end
