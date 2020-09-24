module Api
  module MenuItemInteractor
    class Create
      MenuItemCreated = Class.new(EventSystem::Event)

      def initialize(author:, params:)
        @author = author
        @params = params.to_h
        @menu_item = MenuItem.new(params)
      end

      def call
        EnsureTransaction.new(
          body: -> { body }
        ).call
      end

      private

      attr_reader :menu_item, :params, :author

      def body
        menu_item.save!

        EventSystem::Publishing::FromCreate.new(
          type: MenuItemCreated,
          target: menu_item
        ).call

        Result::Ok.new(menu_item)
      end
    end
  end
end
