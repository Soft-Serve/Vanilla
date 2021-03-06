class RestaurantsController < ApplicationController
  before_action :fetch, only: %i[show update destroy]

  def create
    result = RestaurantInteractor::Create.new(
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
    if @restaurant
      render json: serialize(@restaurant)
    else
      render 'Not found', status: :not_found
    end
  end

  def update
    result = RestaurantInteractor::Update.new(
      author: current_user,
      restaurant: @restaurant,
      params: strong_params
    ).call

    if result.successful?
      render json: serialize(result.unwrap!)
    else
      render json: result.errors, status: :unprocessable_entity
    end
  end

  def destroy
    result = RestaurantInteractor::Destroy.new(
      author: current_user,
      restaurant: @restaurant
    ).call

    if result.successful?
      render json: serialize(result.value)
    else
      render json: result.errors, status: :unprocessable_entity
    end
  end

  private

  def serialize(restaurant)
    RestaurantPresenter.new(restaurant).serialize
  end

  def fetch
    @restaurant = Restaurant.find_by(id: params[:id])
  end

  def strong_params
    params.permit(
      :name,
      :primary_colour,
      :secondary_colour,
      :currency,
      :logo
    )
  end
end
