module Api
  class MenusController < ApplicationController
    before_action :fetch, only: %i[show update destroy]

    def index
      render json: (collection.filter.map { |menu| serialize(menu) })
    end

    def create
      menu = MenuInteractor::Create.new(
        author: current_user,
        params: strong_params
      ).call.unwrap!

      render json: serialize(menu), status: :created
    end

    def show
      render json: serialize(@menu)
    end

    def update
      menu = MenuInteractor::Update.new(
        team: @menu,
        team_params: strong_params
      ).call.unwrap!

      render json: serialize(menu)
    end

    def destroy
      MenuInteractor::Delete.new(
        menu: @menu
      ).call.unwrap!

      head :no_content
    end

    private

    def serialize(menu)
      MenuPresenter.new(menu).serialize
    end

    def restaurant
      @restaurant ||= Restaurant.find_by(id: params[:restaurant_id])
    end

    def collection
      MenusCollection.new(restaurant)
    end

    def fetch
      @menu = Menu.find(params[:id])
    end

    def strong_params
      params.permit(
        :name,
        :restaurant_id
      )
    end
  end
end
