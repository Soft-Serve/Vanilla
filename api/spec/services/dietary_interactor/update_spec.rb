require 'rails_helper'

RSpec.describe DietaryInteractor::Update do
  let!(:dietary) { create(:dietary) }
  let!(:current_user) { create(:user) }
  let(:params) { { name: 'lactose' } }

  subject do
    described_class.new(
      params: params,
      dietary: dietary,
      author: current_user
    ).call
  end

  context 'when params are valid' do
    it do
      expect(subject.successful?).to be(true)
      expect(subject.value.name).to eq('lactose')
    end
  end

  context 'when params are invalid' do
    let(:params) { { name: nil } }

    it do
      expect(subject.successful?).to be(false)
      expect(subject.errors).to eq(
        errors: ["Validation failed: Name can't be blank"]
      )
    end
  end
end