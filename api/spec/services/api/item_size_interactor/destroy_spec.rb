require 'rails_helper'

RSpec.describe Api::ItemSizeInteractor::Destroy do
  let!(:item_size) { create(:item_size) }
  let!(:current_user) { create(:user) }

  subject do
    described_class.new(
      author: current_user,
      item_size: item_size
    ).call
  end

  it do
    expect(subject.successful?).to be(true)
  end
end
