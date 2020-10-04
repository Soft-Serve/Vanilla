FactoryBot.define do
  factory :restaurant, class: Api::Restaurant do
    name { "Ricarda's" }
    primary_colour { '#2d65ba' }
    secondary_colour { '#000000' }
    currency { 'CAD' }
  end
end