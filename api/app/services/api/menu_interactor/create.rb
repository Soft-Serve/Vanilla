module Api
  module MenuInteractor
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

      def menu
        @menu ||= Menu.new(params)
      end

      def body
        menu.save!

        ::Result::Ok.new(menu)
      end
    end
  end
end
