FactoryBot.define do
  factory :dietary, class: Api::Dietary do
    name { 'gluten' }

    association :menu_item, factory: :menu_item
  end
end
