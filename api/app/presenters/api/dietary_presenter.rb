module Api
  class DietaryPresenter

    attr_reader :item
    
    def initialize(item)
      @item = item
    end

    def serialize
      {
        id: item.id,
        name: item.name,
        menu_item_id: item.menu_item_id
      }
    end
  end
end
