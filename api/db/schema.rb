# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_11_07_135147) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "dietaries", force: :cascade do |t|
    t.string "name", null: false
    t.bigint "restaurant_id", null: false
    t.index ["restaurant_id"], name: "index_dietaries_on_restaurant_id"
  end

  create_table "dietary_instances", force: :cascade do |t|
    t.bigint "dietary_id", null: false
    t.bigint "menu_item_id", null: false
    t.index ["dietary_id"], name: "index_dietary_instances_on_dietary_id"
    t.index ["menu_item_id"], name: "index_dietary_instances_on_menu_item_id"
  end

  create_table "item_sizes", force: :cascade do |t|
    t.float "price", null: false
    t.string "unit", default: "1"
    t.bigint "menu_item_id", null: false
    t.index ["menu_item_id"], name: "index_item_sizes_on_menu_item_id"
  end

  create_table "menu_categories", force: :cascade do |t|
    t.string "name", null: false
    t.string "category_type", null: false
    t.bigint "menu_id", null: false
    t.index ["menu_id"], name: "index_menu_categories_on_menu_id"
  end

  create_table "menu_items", force: :cascade do |t|
    t.string "name", null: false
    t.string "photo"
    t.text "description"
    t.bigint "menu_category_id", null: false
    t.index ["menu_category_id"], name: "index_menu_items_on_menu_category_id"
  end

  create_table "menus", force: :cascade do |t|
    t.string "name", null: false
    t.bigint "restaurant_id", null: false
    t.index ["restaurant_id"], name: "index_menus_on_restaurant_id"
  end

  create_table "restaurants", force: :cascade do |t|
    t.string "name", null: false
    t.string "logo"
    t.string "primary_colour"
    t.string "secondary_colour"
    t.string "currency", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.string "first_name"
    t.string "last_name"
    t.string "role"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "restaurant_id"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["restaurant_id"], name: "index_users_on_restaurant_id"
  end

  add_foreign_key "dietaries", "restaurants", on_delete: :cascade
  add_foreign_key "dietary_instances", "dietaries", on_delete: :cascade
  add_foreign_key "dietary_instances", "menu_items", on_delete: :cascade
  add_foreign_key "item_sizes", "menu_items", on_delete: :cascade
  add_foreign_key "menu_categories", "menus", on_delete: :cascade
  add_foreign_key "menu_items", "menu_categories", on_delete: :cascade
  add_foreign_key "menus", "restaurants", on_delete: :cascade
  add_foreign_key "users", "restaurants"
end
