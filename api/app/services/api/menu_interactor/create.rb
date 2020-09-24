module Api
  module MenuInteractor
    class Create
      MenuCreated = Class.new(EventSystem::Event)

      def initialize(author:, params:)
        @author = author
        @params = params.to_h
        @menu = Menu.new(params)
      end

      def call
        EnsureTransaction.new(
          body: -> { body }
        ).call
      end

      private

      attr_reader :menu, :params, :author

      def body
        menu.save!

        EventSystem::Publishing::FromCreate.new(
          type: MenuCreated,
          target: menu
        ).call

        Result::Ok.new(menu)
      end
    end
  end
end
