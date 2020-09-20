module Api
  class RestaurantPresenter

    attr_reader :item
    
    def initialize(item)
      @item = item
    end

    def serialize
      {
        id: item.id,
        name: item.name,
        logo: item.logo,
        currency: item.currency,
        primary_colour: item.primary_colour,
        secondary_colour: item.secondary_colour
      }
    end
  end
end