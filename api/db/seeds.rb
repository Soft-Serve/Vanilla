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

puts 'Creating 2 admins 👩🏽‍💻'

User.create!(
  first_name: 'Rachel',
  last_name: 'Green',
  email: 'rachel@green.com',
  restaurant_id: restaurant.id,
  role: 'admin',
  password: 'friends'
)

User.create!(
  first_name: 'Monica',
  last_name: 'Geller',
  email: 'monica@geller.com',
  restaurant_id: restaurant.id,
  role: 'admin',
  password: 'friends'
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

puts 'Creating menus items with item sizes 🥘'

potstickers_lunch = Api::MenuItem.create!(
  name: 'Potstickers',
  description: 'Pan-fried pork potstickers',
  menu_category_id: lunch_apps.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600714709/yuxiang-zhang-67mdthfNa1Y-unsplash_pz8dpg.jpg'
)

potstickers_dinner = Api::MenuItem.create!(
  name: 'Potstickers',
  description: 'Pan-fried pork potstickers',
  menu_category_id: dinner_apps.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600714709/yuxiang-zhang-67mdthfNa1Y-unsplash_pz8dpg.jpg'
)

garden_salad_lunch = Api::MenuItem.create!(
  name: 'Garden salad',
  description: 'Tomatos, argula, balsamic vinegar',
  menu_category_id: lunch_apps.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600714807/nadine-primeau--ftWfohtjNw-unsplash_pmknmk.jpg'
)

garden_salad_dinner = Api::MenuItem.create!(
  name: 'Garden salad',
  description: 'Tomatos, argula, balsamic vinegar',
  menu_category_id: dinner_apps.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600714807/nadine-primeau--ftWfohtjNw-unsplash_pmknmk.jpg'
)

mushroom_soup = Api::MenuItem.create!(
  name: 'Mushroom soup',
  description: 'Homemade wild mushroom soup',
  menu_category_id: dinner_apps.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600714856/jonathan-borba-3mS4I0GJ3TQ-unsplash_vrif1v.jpg'
)

tomato_soup = Api::MenuItem.create!(
  name: 'Tomato soup',
  description: 'Homemade fresh tomato soup',
  menu_category_id: lunch_apps.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600714928/jennifer-burk-8uC3b-unoSE-unsplash_aknxvr.jpg'
)

mac_and_cheese_lunch = Api::MenuItem.create!(
  name: 'Mac & Cheese',
  description: 'Fresh maccaroni, panchetta, topped with goldfish crumbs',
  menu_category_id: lunch_mains.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600714991/ronaldo-de-oliveira-tf2dNkqagyc-unsplash_zigoko.jpg'
)

mac_and_cheese = Api::MenuItem.create!(
  name: 'Mac & Cheese',
  description: 'Fresh maccaroni, panchetta, topped with goldfish crumbs',
  menu_category_id: dinner_mains.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600714991/ronaldo-de-oliveira-tf2dNkqagyc-unsplash_zigoko.jpg'
)

margarita_pizza_lunch = Api::MenuItem.create!(
  name: 'Margarita Pizza',
  description: 'Mozzarella, oregano, basl',
  menu_category_id: lunch_mains.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600715048/pierre-antoine-caisso-3z1ifS7ERVY-unsplash_pnf8dv.jpg'
)

margarita_pizza = Api::MenuItem.create!(
  name: 'Margarita Pizza',
  description: 'Mozzarella, oregano, basl',
  menu_category_id: dinner_mains.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600715048/pierre-antoine-caisso-3z1ifS7ERVY-unsplash_pnf8dv.jpg'
)

salami_pizza_lunch = Api::MenuItem.create!(
  name: 'Salami Pizza',
  description: 'Italian salami, mozzarella, tomato sauce',
  menu_category_id: dinner_mains.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600715106/engin-akyurt-IfAb0bjhHlc-unsplash_rpm5wd.jpg'
)

salami_pizza = Api::MenuItem.create!(
  name: 'Salami Pizza',
  description: 'Italian salami, mozzarella, tomato sauce',
  menu_category_id: lunch_mains.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600715106/engin-akyurt-IfAb0bjhHlc-unsplash_rpm5wd.jpg'
)

club_sandwich = Api::MenuItem.create!(
  name: 'Club Sandwich',
  description: 'Chicken, bacon, tomato, lettuce & mayo',
  menu_category_id: lunch_mains.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600715168/suea-sivilaisith-foHj73zCV3Y-unsplash_xsdlc3.jpg'
)

burger = Api::MenuItem.create!(
  name: 'Cheese Burger',
  description: 'Angus Beef, cheddar, lettuce & tomato',
  menu_category_id: lunch_mains.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600715207/amirali-mirhashemian-Tht2Sdwqey8-unsplash_ypahgc.jpg'
)

rib_eye = Api::MenuItem.create!(
  name: 'Rib-eye Steak',
  description: 'Waygu beef, 16 oz with red wine sauce',
  menu_category_id: dinner_mains.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600715269/alex-munsell-auIbTAcSH6E-unsplash_qwsnyc.jpg'
)

salmon = Api::MenuItem.create!(
  name: 'Maple Glaze Salmon',
  description: 'Atlantic Salmon with maple syrup glaze',
  menu_category_id: dinner_mains.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600715307/sebastian-coman-photography-Co-T6odt0es-unsplash_n8oxnp.jpg'
)

gnocchi = Api::MenuItem.create!(
  name: 'Vegetarian Gnocchi',
  description: 'Homemade gnocchi with pesto sauce',
  menu_category_id: dinner_mains.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600715350/sebastian-coman-photography-Zmhi-OMDVbw-unsplash_p7bhqn.jpg'
)

sorbet = Api::MenuItem.create!(
  name: 'Sorbet Trio',
  description: 'Strawberry, mango, blueberry',
  menu_category_id: desserts.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600715399/sebastian-coman-photography--hM0-PSO3FY-unsplash_viiw5w.jpg'
)

brownie = Api::MenuItem.create!(
  name: 'Chocolate Brownie',
  description: 'Dark chocolate brownie',
  menu_category_id: desserts.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600715446/alena-ganzhela-MONzTP2XxUE-unsplash_jypjog.jpg'
)

creme_brulee = Api::MenuItem.create!(
  name: 'Creme Brulee',
  description: 'Classic cream brulee',
  menu_category_id: desserts.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600715487/alex-munsell-wiTWDYLURr8-unsplash_lua4p5.jpg'
)

whiskey_sour = Api::MenuItem.create!(
  name: 'Whiskey Sour',
  description: 'Jameson, lemon, egg white',
  menu_category_id: cocktails.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1558087280/frapzo3jjewuo3xkfpcb.jpg'
)

french_martini = Api::MenuItem.create!(
  name: 'French Martini',
  description: 'Grey goose, Chambord, pineapple',
  menu_category_id: cocktails.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1558109315/cb1cxjvngzz7cdv3gosy.jpg'
)
japanese_slipper = Api::MenuItem.create!(
  name: 'Japanese Slipper',
  description: 'Midori, Cointreau & lemon',
  menu_category_id: cocktails.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1558109563/ezn9k4l4iqg3xtdsy9wr.jpg'
)

margarita = Api::MenuItem.create!(
  name: 'Classic Margarita',
  description: 'Don Julio, Cointreau & lime',
  menu_category_id: cocktails.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1558087299/acfhxpjk7eiwryqdwwfs.jpg'
)

mojito = Api::MenuItem.create!(
  name: 'Classic Mojito',
  description: 'Bacardi, mint & lime',
  menu_category_id: cocktails.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1558087255/tvsdmyyvblwt1u5tbhep.jpg'
)

pinot_noir = Api::MenuItem.create!(
  name: 'Pinot Noir',
  description: 'Kim Crawford, NZ',
  menu_category_id: wines.id
)

Api::ItemSize.create!(
  price: 9.00,
  unit: '6 oz',
  menu_item_id: pinot_noir.id
)

Api::ItemSize.create!(
  price: 12.00,
  unit: '9 oz',
  menu_item_id: pinot_noir.id
)

Api::ItemSize.create!(
  price: 60.00,
  unit: 'Bottle',
  menu_item_id: pinot_noir.id
)

cab_sauv = Api::MenuItem.create!(
  name: 'Cabernet Sauvignon',
  description: 'Kim Crawford, NZ',
  menu_category_id: wines.id
)

Api::ItemSize.create!(
  price: 11.00,
  unit: '6 oz',
  menu_item_id: cab_sauv.id
)

Api::ItemSize.create!(
  price: 15.00,
  unit: '9 oz',
  menu_item_id: cab_sauv.id
)

Api::ItemSize.create!(
  price: 72.00,
  unit: 'Bottle',
  menu_item_id: cab_sauv.id
)

shiraz = Api::MenuItem.create!(
  name: 'Shiraz',
  description: "Jacob's Creek, AUS",
  menu_category_id: wines.id
)

Api::ItemSize.create!(
  price: 9.00,
  unit: '6 oz',
  menu_item_id: shiraz.id
)

Api::ItemSize.create!(
  price: 12.00,
  unit: '9 oz',
  menu_item_id: shiraz.id
)

Api::ItemSize.create!(
  price: 60.00,
  unit: 'Bottle',
  menu_item_id: shiraz.id
)

pinot_grigio = Api::MenuItem.create!(
  name: 'Pinot Grigio',
  description: 'Ernest and Julio, CA',
  menu_category_id: wines.id
)

Api::ItemSize.create!(
  price: 9.00,
  unit: '6 oz',
  menu_item_id: pinot_grigio.id
)

Api::ItemSize.create!(
  price: 12.00,
  unit: '9 oz',
  menu_item_id: pinot_grigio.id
)

Api::ItemSize.create!(
  price: 60.00,
  unit: 'Bottle',
  menu_item_id: pinot_grigio.id
)

riesling = Api::MenuItem.create!(
  name: 'Riesling',
  description: 'Mission Hill, BC',
  menu_category_id: wines.id
)

Api::ItemSize.create!(
  price: 10.00,
  unit: '6 oz',
  menu_item_id: riesling.id
)

Api::ItemSize.create!(
  price: 14.00,
  unit: '9 oz',
  menu_item_id: riesling.id
)

Api::ItemSize.create!(
  price: 66.00,
  unit: 'Bottle',
  menu_item_id: riesling.id
)

sauv_blanc = Api::MenuItem.create!(
  name: 'Sauvignon Blanc',
  description: 'Peller Estates, Niagara',
  menu_category_id: wines.id
)

Api::ItemSize.create!(
  price: 10.00,
  unit: '6 oz',
  menu_item_id: sauv_blanc.id
)

Api::ItemSize.create!(
  price: 14.00,
  unit: '9 oz',
  menu_item_id: sauv_blanc.id
)

Api::ItemSize.create!(
  price: 66.00,
  unit: 'Bottle',
  menu_item_id: sauv_blanc.id
)

millstreet = Api::MenuItem.create!(
  name: 'Millstreet',
  menu_category_id: beers.id
)

Api::ItemSize.create!(
  price: 7.00,
  unit: '12 oz',
  menu_item_id: millstreet.id
)

Api::ItemSize.create!(
  price: 11.00,
  unit: '20 oz',
  menu_item_id: millstreet.id
)

guiness = Api::MenuItem.create!(
  name: 'Guiness',
  menu_category_id: beers.id
)

Api::ItemSize.create!(
  price: 7.00,
  unit: '12 oz',
  menu_item_id: guiness.id
)

Api::ItemSize.create!(
  price: 11.00,
  unit: '20 oz',
  menu_item_id: guiness.id
)


somersby = Api::MenuItem.create!(
  name: 'Somersby',
  menu_category_id: beers.id
)

Api::ItemSize.create!(
  price: 7.00,
  unit: '12 oz',
  menu_item_id: somersby.id
)

Api::ItemSize.create!(
  price: 11.00,
  unit: '20 oz',
  menu_item_id: somersby.id
)

coke = Api::MenuItem.create!(
  name: 'Coke',
  menu_category_id: soft_drinks.id
)

Api::ItemSize.create!(
  price: 2.50,
  menu_item_id: coke.id
)

coke = Api::MenuItem.create!(
  name: 'Coke',
  menu_category_id: soft_drinks.id
)

Api::ItemSize.create!(
  price: 2.50,
  menu_item_id: coke.id
)

sprite = Api::MenuItem.create!(
  name: 'Sprite',
  menu_category_id: soft_drinks.id
)

Api::ItemSize.create!(
  price: 2.50,
  menu_item_id: sprite.id
)

nestea = Api::MenuItem.create!(
  name: 'Nestea',
  menu_category_id: soft_drinks.id
)

Api::ItemSize.create!(
  price: 2.50,
  menu_item_id: nestea.id
)

puts 'Creating dietary filters 🥖'

Api::Dietary.create!(
  name: 'Gluten',
  menu_item_id: margarita_pizza.id
)

Api::Dietary.create!(
  name: 'Gluten',
  menu_item_id: salami_pizza_lunch.id
)

Api::Dietary.create!(
  name: 'Gluten',
  menu_item_id: margarita_pizza_lunch.id
)

Api::Dietary.create!(
  name: 'Gluten',
  menu_item_id: salami_pizza.id
)

Api::Dietary.create!(
  name: 'Gluten',
  menu_item_id: club_sandwich.id
)

Api::Dietary.create!(
  name: 'Gluten',
  menu_item_id: burger.id
)

Api::Dietary.create!(
  name: 'Gluten',
  menu_item_id: mac_and_cheese.id
)

Api::Dietary.create!(
  name: 'Gluten',
  menu_item_id: mac_and_cheese_lunch.id
)

Api::Dietary.create!(
  name: 'Dairy',
  menu_item_id: mac_and_cheese.id
)

Api::Dietary.create!(
  name: 'Dairy',
  menu_item_id: mac_and_cheese_lunch.id
)

Api::Dietary.create!(
  name: 'Dairy',
  menu_item_id: margarita_pizza.id
)

Api::Dietary.create!(
  name: 'Dairy',
  menu_item_id: salami_pizza_lunch.id
)

Api::Dietary.create!(
  name: 'Dairy',
  menu_item_id: margarita_pizza_lunch.id
)

Api::Dietary.create!(
  name: 'Dairy',
  menu_item_id: salami_pizza.id
)

puts 'All done 🎉🎉🎉'
