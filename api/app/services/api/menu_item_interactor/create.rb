module Api
  module MenuItemInteractor
    class Create
      def initialize(author:, params:)
        @author = author
        @params = params.to_h
      end

      def call
        body
      end

      private

      attr_reader :params, :author

      def menu_item
        @menu_item ||= MenuItem.new(params)
      end

      def body
        menu_item.save!

        ::Result::Ok.new(menu_item)
      end
    end
  end
end
