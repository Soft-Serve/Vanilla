require 'rails_helper'

RSpec.describe Api::MenuInteractor::Destroy do
  let(:restaurant) { create(:restaurant) }
  let!(:menu) { create(:menu, restaurant_id: restaurant.id) }
  let!(:current_user) { create(:user) }

  subject do
    described_class.new(
      author: current_user,
      menu: menu
    ).call
  end

  it do
    expect(subject.successful?).to be(true)
  end
end
