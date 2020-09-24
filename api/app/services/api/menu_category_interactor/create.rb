module Api
  module MenuCategoryInteractor
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

      def menu_category
        @menu_category ||= MenuCategory.new(params)
      end

      def body
        menu_category.save!

        ::Result::Ok.new(menu_category)
      end
    end
  end
end

