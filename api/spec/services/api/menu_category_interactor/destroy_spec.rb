require 'rails_helper'

RSpec.describe Api::MenuCategoryInteractor::Destroy do
  let!(:menu_category) { create(:menu_category) }
  let!(:current_user) { create(:user) }

  subject do
    described_class.new(
      author: current_user,
      menu_category: menu_category
    ).call
  end

  it do
    expect(subject.successful?).to be(true)
  end
end
