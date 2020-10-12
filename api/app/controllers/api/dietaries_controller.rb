module Api
  class DietariesController < ApplicationController
    before_action :fetch, only: %i[show update destroy]

    def index
      render json: (collection.filter.map { |dietary| serialize(dietary) })
    end

    def create
      result = DietaryInteractor::Create.new(
        author: current_user,
        params: strong_params
      ).call

      if result.successful?
        render json: serialize(result.unwrap!), status: :created
      else
        render json: result.errors, status: :unprocessable_entity
      end
    end

    def show
      if @dietary
        render json: serialize(@dietary)
      else
        render 'Not found', status: :not_found
      end
    end

    def update
      result = DietaryInteractor::Update.new(
        author: current_user,
        dietary: @dietary,
        params: strong_params
      ).call

      if result.successful?
        render json: serialize(result.unwrap!)
      else
        render json: result.errors, status: :unprocessable_entity
      end
    end

    def destroy
      result = DietaryInteractor::Destroy.new(
        author: current_user,
        dietary: @dietary
      ).call

      if result.successful?
        head :no_content
      else
        render json: result.errors, status: :unprocessable_entity
      end
    end

    private

    def serialize(dietary)
      DietaryPresenter.new(dietary).serialize
    end

    def menu_item
      @menu_item ||= MenuItem.find_by(id: params[:menu_item_id])
    end

    def collection
      DietariesCollection.new(menu_item)
    end

    def fetch
      @dietary = Dietary.find_by(id: params[:id])
    end

    def strong_params
      params.permit(
        :name,
        :menu_item_id
      )
    end
  end
end
