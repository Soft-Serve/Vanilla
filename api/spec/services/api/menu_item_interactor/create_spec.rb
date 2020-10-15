require 'rails_helper'

RSpec.describe Api::MenuItemInteractor::Create do
  let(:menu_category) { create(:menu_category) }
  let!(:current_user) { create(:user) }
  let(:name) { 'Crema Catalana' }
  let(:params) do
    {
      name: name,
      menu_category_id: menu_category.id
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
      expect { subject }.to change { Api::MenuItem.count }.by(1)
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
