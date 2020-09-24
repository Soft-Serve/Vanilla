module Api
  module MenuCategoryInteractor
    class Create
      MenuCategoryCreated = Class.new(EventSystem::Event)

      def initialize(author:, params:)
        @author = author
        @params = params.to_h
        @menu_category = MenuCategory.new(params)
      end

      def call
        EnsureTransaction.new(
          body: -> { body }
        ).call
      end

      private

      attr_reader :menu_category, :params, :author

      def body
        menu_category.save!

        EventSystem::Publishing::FromCreate.new(
          type: MenuCategoryCreated,
          target: menu_category
        ).call

        Result::Ok.new(menu_category)
      end
    end
  end
end
