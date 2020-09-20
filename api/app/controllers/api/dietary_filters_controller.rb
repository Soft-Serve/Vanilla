module Api
    class DietaryFiltersController < ApplicationController  
        before_action :fetch, only: %i[show update destroy]

        def index
            render json: (collection.filter.map { |dietary_filter| serialize(dietary_filter) })
        end

        def create
        end

        def show
            render json: serialize(@dietary_filter)
        end

        def update
        end

        def destroy
        end

        private

        def serialize(dietary_filter)
            DietaryFilterPresenter.new(dietary_filter).serialize
        end

        def menu_item
            @menu_item ||= MenuItem.find_by(id: params[:menu_item_id])
        end

        def collection
            DietaryFiltersCollection.new(menu_item)
        end

        def fetch
            @dietary_filter = DietaryFilter.find(params[:id])
        end

        def strong_params
            params.permit(
                :name,
                :menu_item_id
            )
        end 
    end
end
