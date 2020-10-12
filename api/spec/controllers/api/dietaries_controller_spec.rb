require 'rails_helper'

RSpec.describe Api::DietariesController do
  let!(:restaurant) { create(:restaurant) }
  let!(:menu) { create(:menu) }
  let!(:menu_category) { create(:menu_category) }
  let!(:menu_item) { create(:menu_item) }
  let!(:dietary) { create(:dietary) }
  let!(:current_user) { create(:user) }
  let(:name) { 'soy' }
  let(:create_params) do
    {
      name: name,
      menu_item_id: menu_item.id,
      menu_category_id: menu_category.id,
      menu_id: menu.id,
      restaurant_id: restaurant.id
    }
  end
  let(:id) { dietary.id }
  let(:routing_params) do
    {
      id: id,
      menu_item_id: menu_item.id,
      menu_category_id: menu_category.id,
      menu_id: menu.id,
      restaurant_id: restaurant.id
    }
  end

  def json
    JSON.parse(response.body)
  end

  describe 'GET #show' do
    before { get :show, params: routing_params }

    context 'when id is valid' do
      it do
        expect(response).to have_http_status(:ok)
        expect(json['id']).to eq(id)
      end
    end

    context 'when id is invalid' do
      let(:id) { 8989 }
      it do
        expect(response).to have_http_status(:not_found)
      end
    end
  end

  describe 'POST #create' do
    before { post :create, params: create_params }

    context 'when params are valid' do
      it do
        expect(response).to have_http_status(:created)
        expect(json['name']).to eq('soy')
      end
    end

    context 'when params are invalid' do
      let(:name) { nil }

      it do
        expect(response).to have_http_status(:unprocessable_entity)
        expect(json).to include('errors')
      end
    end
  end

  describe 'PATCH #update' do
    let(:update_params) { {} }
    before { patch :update, params: routing_params.merge(update_params) }

    context 'when params are valid' do
      let(:update_params) { { name: 'gluten' } }
      it do
        expect(json['name']).to eq('gluten')
      end
    end

    context 'when params are invalid' do
      let(:update_params) { { name: nil } }

      it do
        expect(response).to have_http_status(:unprocessable_entity)
        expect(json).to include('errors')
      end
    end
  end

  describe 'DELETE #destroy' do
    before { patch :destroy, params: routing_params }

    it do
      expect(response).to have_http_status(:no_content)
    end
  end
end
