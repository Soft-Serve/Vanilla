FactoryBot.define do
  factory :dietary_instance, class: Api::DietaryInstance do
    association :menu_item, factory: :menu_item
    association :dietary, factory: :dietary
  end
end
