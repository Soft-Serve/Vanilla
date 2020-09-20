class ChangeMenuCategoryTypeName < ActiveRecord::Migration[5.2]
  def change
    rename_column :menu_categories, :type, :category_type
  end
end
