class AddLogoToRestaurant < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :logo, :string
  end
end
