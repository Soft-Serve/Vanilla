require 'rails_helper'

RSpec.describe Api::DietaryInteractor::Create do
  let(:restaurant) { create(:restaurant) }
  let!(:current_user) { create(:user) }
  let(:name) { 'soy' }
  let(:params) do
    {
      name: name,
      restaurant_id: restaurant.id
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
      expect { subject }.to change { Api::Dietary.count }.by(1)
      expect(subject.successful?).to be(true)
    end
  end

  context 'when params are invalid' do
    let(:name) { nil }
    it do
      expect(subject.successful?).to be(false)
      expect(subject.errors).to eq(
        errors: ["Validation failed: Name can't be blank"]
      )
    end
  end
end
