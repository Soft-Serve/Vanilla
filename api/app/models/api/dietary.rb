module Api
    class Dietaries < ApplicationRecord
        # Relations
        belongs_to :menu_item
    
        # Validations
        validates_presence_of :name, :menu_item_id
    end
end
