require 'rails_helper'

RSpec.describe MenuItemInteractor::Update do
  let!(:menu_item) { create(:menu_item) }
  let!(:current_user) { create(:user) }
  let(:params) { { name: 'Potstickers' } }

  subject do
    described_class.new(
      params: params,
      menu_item: menu_item,
      author: current_user
    ).call
  end

  context 'when params are valid' do
    it do
      expect(subject.successful?).to be(true)
      expect(subject.value.name).to eq('Potstickers')
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
