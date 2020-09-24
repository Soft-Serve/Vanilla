module Api
    class DietariesController < ApplicationController  
        before_action :fetch, only: %i[show update destroy]

        def index
            render json: (collection.filter.map { |dietary| serialize(dietary) })
        end

        def create
            dietary = DietaryInteractor::Create.new(
                author: current_user,
                params: strong_params
              ).call.unwrap!
        
            render json: serialize(dietary), status: :created
        end

        def show
            render json: serialize(@dietary)
        end

        def update
            dietary = DietaryInteractor::Update.new(
                team: @dietary,
                team_params: strong_params
            ).call.unwrap!
        
            render json: serialize(dietary)
        end

        def destroy
            DietaryInteractor::Delete.new(
                dietary: @dietary
            ).call.unwrap!
        
            head :no_content
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
            @dietary = Dietary.find(params[:id])
        end

        def strong_params
            params.permit(
                :name,
                :menu_item_id
            )
        end 
    end
end
