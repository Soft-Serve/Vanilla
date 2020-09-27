module Api
  module DietaryInteractor
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

      def dietary
        @dietary ||= Dietary.new(params)
      end

      def body
        dietary.save!

        ::Result::Ok.new(dietary)
      end
    end
  end
end

