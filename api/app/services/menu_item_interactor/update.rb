module MenuItemInteractor
  class Update
    def initialize(author:, menu_item:, params:)
      @author = author
      @menu_item = menu_item
      @params = params.to_h
    end

    def call
      body
    end

    private

    attr_reader :params, :author, :menu_item

    def body
      menu_item.update!(params)

      ::Result::Ok.new(menu_item)
    rescue StandardError => e
      Result::Error.new(errors: [e.message])
    end
  end
end
