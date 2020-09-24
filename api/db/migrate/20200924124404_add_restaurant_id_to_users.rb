class AddRestaurantIdToUsers < ActiveRecord::Migration[6.0]
  def change
    add_reference :users, :restaurant, index: true, foreign_key: true, on_delete: :cascade
  end
end
