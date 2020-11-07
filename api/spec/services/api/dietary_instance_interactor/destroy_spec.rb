require 'rails_helper'

RSpec.describe Api::DietaryInstanceInteractor::Destroy do
  let!(:dietary_instance) { create(:dietary_instance) }
  let!(:current_user) { create(:user) }

  subject do
    described_class.new(
      author: current_user,
      dietary_instance: dietary_instance
    ).call
  end

  it do
    expect(subject.successful?).to be(true)
  end
end
