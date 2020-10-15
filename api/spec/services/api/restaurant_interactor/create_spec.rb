require 'rails_helper'

RSpec.describe Api::RestaurantInteractor::Create do
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

  subject do
    described_class.new(
      params: params,
      author: current_user
    ).call
  end

  context 'when params are valid' do
    it do
      expect { subject }.to change { Api::Restaurant.count }.by(1)
      expect(subject.successful?).to be(true)
    end
  end

  context 'when params are invalid' do
    let(:currency) { 'cadadwe' }
    it do
      expect(subject.successful?).to be(false)
      expect(subject.errors).to eq(
        errors: ['Validation failed: Currency is not included in the list']
      )
    end
  end
end
