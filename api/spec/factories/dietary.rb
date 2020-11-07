FactoryBot.define do
  factory :dietary, class: Api::Dietary do
    name { 'gluten' }

    association :restaurant, factory: :restaurant
  end
end
