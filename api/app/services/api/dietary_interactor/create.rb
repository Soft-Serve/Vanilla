module Api
  module DietaryInteractor
    class Create
      DietaryCreated = Class.new(EventSystem::Event)

      def initialize(author:, params:)
        @author = author
        @params = params.to_h
        @dietary = Dietary.new(params)
      end

      def call
        EnsureTransaction.new(
          body: -> { body }
        ).call
      end

      private

      attr_reader :dietary, :params, :author

      def body
        dietary.save!

        EventSystem::Publishing::FromCreate.new(
          type: DietaryCreated,
          target: dietary
        ).call

        Result::Ok.new(dietary)
      end
    end
  end
end
