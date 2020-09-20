module Api
  class DietaryFiltersCollection

    def initialize(menu_item)
      @menu_item = menu_item
    end

    def filter
      coll = scope_by_menu_item
      coll
    end

    private 
    
    attr_reader :menu_item

    def scope_by_menu_item
      menu_item.dietary_filters
    end
  end
end
