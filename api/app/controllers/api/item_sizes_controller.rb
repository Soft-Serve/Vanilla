module Api
    class ItemSizesController < ApplicationController  
        before_action :fetch, only: %i[show update destroy]

        def index
            render json: (collection.filter.map { |item_size| serialize(item_size) })
        end

        def create
            item_size = ItemSizeInteractor::Create.new(
                author: current_access,
                params: strong_params
              ).call.unwrap!
        
            render json: serialize(item_size), status: :created
        end

        def show
            render json: serialize(@item_size)
        end

        def update
            item_size = ItemSizeInteractor::Update.new(
                team: @item_size,
                team_params: strong_params
            ).call.unwrap!
        
            render json: serialize(item_size)
        end

        def destroy
            ItemSizeInteractor::Delete.new(
                item_size: @item_size
            ).call.unwrap!
        
            head :no_content
        end

        private

        def serialize(item_size)
            ItemSizePresenter.new(item_size).serialize
        end

        def menu_item
            @menu_item ||= MenuItem.find_by(id: params[:menu_item_id])
        end

        def collection
            ItemSizesCollection.new(menu_item)
        end

        def fetch
            @item_size = ItemSize.find(params[:id])
        end

        def strong_params
            params.permit(
                :price,
                :unit,
                :menu_item_id
            )
        end 
    end
end
