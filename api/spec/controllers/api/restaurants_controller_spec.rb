require 'rails_helper'

RSpec.describe Api::RestaurantsController do
  let!(:restaurant) { create(:restaurant) }
  let!(:current_user) { create(:user) }
  let(:currency) { 'CAD' }
  let(:params) do 
    { 
      name: 'Akira Back', 
      primary_colour: '#3de443',
      secondary_colour: '#000000',
      currency: currency
    }
  end

  def json
    JSON.parse(response.body)
  end

  describe "GET #show" do
    let(:id) { restaurant.id }
 
    before { get :show, params: { id: id }  }

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

  describe "POST #create" do
    before { post :create, params: params }

    context 'when params are valid' do 
      it do
        expect(response).to have_http_status(:created)
        expect(json['name']).to eq('Akira Back')
      end
    end

    context 'when params are invalid' do 
      let(:currency) { 'blabla' }

      it do
        expect(response).to have_http_status(:unprocessable_entity)
        expect(json).to include('errors')
      end
    end
  end
end
