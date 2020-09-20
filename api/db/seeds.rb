puts 'Destroying current DB 🔥'

Api::Restaurant.destroy_all

puts 'Creating new restaurant 🍽'

restaurant = Api::Restaurant.create!(
  name: 'Oliver & Bonacini',
  currency: 'CAD',
  primary_colour: '#607d6f',
  secondary_colour: '#000000',
  logo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1598203753/o_b_jmfyov.png'
)

puts 'Creating 3 menus 📄'

lunch = Api::Menu.create!(
  name: 'Lunch menu',
  restaurant_id: restaurant.id
)

dinner = Api::Menu.create!(
  name: 'Dinner menu',
  restaurant_id: restaurant.id
)

dessert = Api::Menu.create!(
  name: 'Dessert menu',
  restaurant_id: restaurant.id
)

drinks = Api::Menu.create!(
  name: 'Drinks menu',
  restaurant_id: restaurant.id
)

puts 'Creating menus categories 🍷'

lunch_apps = Api::MenuCategory.create!(
  name: 'Apps',
  category_type: 'food',
  menu_id: lunch.id
)

dinner_apps = Api::MenuCategory.create!(
  name: 'Apps',
  category_type: 'food',
  menu_id: dinner.id
)

lunch_mains = Api::MenuCategory.create!(
  name: 'Mains',
  category_type: 'food',
  menu_id: lunch.id
)

dinner_mains = Api::MenuCategory.create!(
  name: 'Mains',
  category_type: 'food',
  menu_id: dinner.id
)

desserts = Api::MenuCategory.create!(
  name: 'Desserts',
  category_type: 'food',
  menu_id: dessert.id
)

cocktails = Api::MenuCategory.create!(
  name: 'Cocktails',
  category_type: 'beverage',
  menu_id: drinks.id
)

wines = Api::MenuCategory.create!(
  name: 'Wines',
  category_type: 'beverage',
  menu_id: drinks.id
)

beers = Api::MenuCategory.create!(
  name: 'Beers',
  category_type: 'beverage',
  menu_id: drinks.id
)

soft_drinks = Api::MenuCategory.create!(
  name: 'Non-alcoholic',
  category_type: 'beverage',
  menu_id: drinks.id
)

puts 'Creating menus items 🥘'

puts 'Creating item sizes ⚖️'

puts 'Creating dietary filters 🥖'

puts 'All done 🎉🎉🎉'
