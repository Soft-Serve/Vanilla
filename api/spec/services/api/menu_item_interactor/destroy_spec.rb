require 'rails_helper'

RSpec.describe Api::MenuItemInteractor::Destroy do
  let!(:menu_item) { create(:menu_item) }
  let!(:current_user) { create(:user) }

  subject do
    described_class.new(
      author: current_user,
      menu_item: menu_item
    ).call
  end

  it do
    expect(subject.successful?).to be(true)
  end
end
