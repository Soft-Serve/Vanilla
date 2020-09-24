module Api
  module ItemSizeInteractor
    class Create
      ItemSizeCreated = Class.new(EventSystem::Event)

      def initialize(author:, params:)
        @author = author
        @params = params.to_h
        @item_size = ItemSize.new(params)
      end

      def call
        EnsureTransaction.new(
          body: -> { body }
        ).call
      end

      private

      attr_reader :item_size, :params, :author

      def body
        item_size.save!

        EventSystem::Publishing::FromCreate.new(
          type: ItemSizeCreated,
          target: item_size
        ).call

        Result::Ok.new(item_size)
      end
    end
  end
end
