FactoryBot.define do
  factory :menu, class: Api::Menu do
    name { 'Lunch Menu' }

    association :restaurant, factory: :restaurant
  end
end
