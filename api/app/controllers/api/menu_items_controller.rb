module Api
  class MenuItemsController < ApplicationController
    before_action :fetch, only: %i[show update destroy]

    def index
      render json: (collection.filter.map { |menu_item| serialize(menu_item) })
    end

    def create
      result = MenuItemInteractor::Create.new(
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
      if @menu_item
        render json: serialize(@menu_item)
      else
        render 'Not found', status: :not_found
      end
    end

    def update
      result = MenuItemInteractor::Update.new(
        author: current_user,
        menu_item: @menu_item,
        params: strong_params
      ).call

      if result.successful?
        render json: serialize(result.unwrap!)
      else
        render json: result.errors, status: :unprocessable_entity
      end
    end

    def destroy
      result = MenuItemInteractor::Destroy.new(
        author: current_user,
        menu_item: @menu_item
      ).call

      if result.successful?
        render json: serialize(result.value)
      else
        render json: result.errors, status: :unprocessable_entity
      end
    end

    private

    def serialize(menu_item)
      MenuItemPresenter.new(menu_item).serialize
    end

    def menu_category
      @menu_category ||= MenuCategory.find_by(id: params[:menu_category_id])
    end

    def collection
      MenuItemsCollection.new(menu_category)
    end

    def fetch
      @menu_item = MenuItem.find_by(id: params[:id])
    end

    def strong_params
      params.permit(
        :name,
        :description,
        :menu_category_id,
        :photo
      )
    end
  end
end
