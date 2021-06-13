FactoryBot.define do
  factory :dietary, class: Dietary do
    name { 'gluten' }

    association :restaurant, factory: :restaurant
  end
end
