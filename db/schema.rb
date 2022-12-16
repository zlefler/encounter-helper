# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_12_16_204014) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "abilities", force: :cascade do |t|
    t.integer "strength", null: false
    t.integer "dexterity", null: false
    t.integer "constitution", null: false
    t.integer "intelligence", null: false
    t.integer "wisdom", null: false
    t.integer "charisma", null: false
    t.integer "character_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "skills", force: :cascade do |t|
    t.integer "acrobatics"
    t.integer "appraise"
    t.integer "bluff"
    t.integer "climb"
    t.integer "craft"
    t.integer "diplomacy"
    t.integer "disable_device"
    t.integer "disguise"
    t.integer "escape_artist"
    t.integer "fly"
    t.integer "handle_animal"
    t.integer "heal"
    t.integer "intimidate"
    t.integer "knowledge_arcana"
    t.integer "knowledge_dungeoneering"
    t.integer "knowledge_engineering"
    t.integer "knowledge_geography"
    t.integer "knowledge_history"
    t.integer "knowledge_local"
    t.integer "knowledge_nature"
    t.integer "knowledge_nobility"
    t.integer "knowledge_planes"
    t.integer "knowledge_religion"
    t.integer "linguistics"
    t.integer "perception"
    t.integer "perform"
    t.integer "profession"
    t.integer "ride"
    t.integer "sense_motive"
    t.integer "sleight_of_hand"
    t.integer "spellcraft"
    t.integer "stealth"
    t.integer "survival"
    t.integer "swim"
    t.integer "use_magic_device"
    t.integer "character_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "weapons", force: :cascade do |t|
    t.string "name"
    t.integer "dice_type"
    t.integer "dice_num"
    t.integer "crit_range_start"
    t.integer "crit_range_end"
    t.integer "crit_multiplier"
    t.string "type"
    t.integer "range"
    t.boolean "is_ranged"
    t.integer "character_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
