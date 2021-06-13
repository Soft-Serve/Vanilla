require 'rails_helper'

RSpec.describe DietaryInteractor::Destroy do
  let!(:dietary) { create(:dietary) }
  let!(:current_user) { create(:user) }

  subject do
    described_class.new(
      author: current_user,
      dietary: dietary
    ).call
  end

  it do
    expect(subject.successful?).to be(true)
  end
end
