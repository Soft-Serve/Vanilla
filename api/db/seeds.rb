puts 'Destroying current DB 🔥'

User.destroy_all
 Restaurant.destroy_all

puts 'Creating new restaurant 🍽'

restaurant =  Restaurant.create!(
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

lunch = Menu.create!(
  name: 'Lunch menu',
  restaurant_id: restaurant.id
)

dinner = Menu.create!(
  name: 'Dinner menu',
  restaurant_id: restaurant.id
)

dessert = Menu.create!(
  name: 'Dessert menu',
  restaurant_id: restaurant.id
)

drinks = Menu.create!(
  name: 'Drinks menu',
  restaurant_id: restaurant.id
)

puts 'Creating menus categories 🍷'

lunch_apps = MenuCategory.create!(
  name: 'Apps',
  category_type: 'food',
  menu_id: lunch.id
)

dinner_apps = MenuCategory.create!(
  name: 'Apps',
  category_type: 'food',
  menu_id: dinner.id
)

lunch_mains = MenuCategory.create!(
  name: 'Mains',
  category_type: 'food',
  menu_id: lunch.id
)

dinner_mains = MenuCategory.create!(
  name: 'Mains',
  category_type: 'food',
  menu_id: dinner.id
)

desserts = MenuCategory.create!(
  name: 'Desserts',
  category_type: 'food',
  menu_id: dessert.id
)

cocktails = MenuCategory.create!(
  name: 'Cocktails',
  category_type: 'beverage',
  menu_id: drinks.id
)

wines = MenuCategory.create!(
  name: 'Wines',
  category_type: 'beverage',
  menu_id: drinks.id
)

beers = MenuCategory.create!(
  name: 'Beers',
  category_type: 'beverage',
  menu_id: drinks.id
)

soft_drinks = MenuCategory.create!(
  name: 'Non-alcoholic',
  category_type: 'beverage',
  menu_id: drinks.id
)

puts 'Creating menus items with item sizes 🥘'

potstickers_lunch = MenuItem.create!(
  name: 'Potstickers',
  description: 'Pan-fried pork potstickers',
  menu_category_id: lunch_apps.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600714709/yuxiang-zhang-67mdthfNa1Y-unsplash_pz8dpg.jpg'
)

 ItemSize.create!(
  price: 9.00,
  unit: '6',
  menu_item_id: potstickers_lunch.id
)

potstickers_dinner =  MenuItem.create!(
  name: 'Potstickers',
  description: 'Pan-fried pork potstickers',
  menu_category_id: dinner_apps.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600714709/yuxiang-zhang-67mdthfNa1Y-unsplash_pz8dpg.jpg'
)

 ItemSize.create!(
  price: 9.00,
  unit: '12',
  menu_item_id: potstickers_dinner.id
)

garden_salad_lunch =  MenuItem.create!(
  name: 'Garden salad',
  description: 'Tomatos, argula, balsamic vinegar',
  menu_category_id: lunch_apps.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600714807/nadine-primeau--ftWfohtjNw-unsplash_pmknmk.jpg'
)

 ItemSize.create!(
  price: 9.00,
  unit: 'small',
  menu_item_id: garden_salad_lunch.id
)

garden_salad_dinner =  MenuItem.create!(
  name: 'Garden salad',
  description: 'Tomatos, argula, balsamic vinegar',
  menu_category_id: dinner_apps.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600714807/nadine-primeau--ftWfohtjNw-unsplash_pmknmk.jpg'
)

 ItemSize.create!(
  price: 9.00,
  unit: 'large',
  menu_item_id: garden_salad_dinner.id
)

mushroom_soup =  MenuItem.create!(
  name: 'Mushroom soup',
  description: 'Homemade wild mushroom soup',
  menu_category_id: dinner_apps.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600714856/jonathan-borba-3mS4I0GJ3TQ-unsplash_vrif1v.jpg'
)

 ItemSize.create!(
  price: 9.00,
  menu_item_id: mushroom_soup.id
)

tomato_soup =  MenuItem.create!(
  name: 'Tomato soup',
  description: 'Homemade fresh tomato soup',
  menu_category_id: lunch_apps.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600714928/jennifer-burk-8uC3b-unoSE-unsplash_aknxvr.jpg'
)

 ItemSize.create!(
  price: 9.00,
  menu_item_id: tomato_soup.id
)

mac_and_cheese_lunch =  MenuItem.create!(
  name: 'Mac & Cheese',
  description: 'Fresh maccaroni, panchetta, topped with goldfish crumbs',
  menu_category_id: lunch_mains.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600714991/ronaldo-de-oliveira-tf2dNkqagyc-unsplash_zigoko.jpg'
)

 ItemSize.create!(
  price: 9.00,
  menu_item_id: mac_and_cheese_lunch.id
)

mac_and_cheese =  MenuItem.create!(
  name: 'Mac & Cheese',
  description: 'Fresh maccaroni, panchetta, topped with goldfish crumbs',
  menu_category_id: dinner_mains.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600714991/ronaldo-de-oliveira-tf2dNkqagyc-unsplash_zigoko.jpg'
)

 ItemSize.create!(
  price: 9.00,
  menu_item_id: mac_and_cheese.id
)

margarita_pizza_lunch =  MenuItem.create!(
  name: 'Margarita Pizza',
  description: 'Mozzarella, oregano, basl',
  menu_category_id: lunch_mains.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600715048/pierre-antoine-caisso-3z1ifS7ERVY-unsplash_pnf8dv.jpg'
)

 ItemSize.create!(
  price: 9.00,
  menu_item_id: margarita_pizza_lunch.id
)


margarita_pizza =  MenuItem.create!(
  name: 'Margarita Pizza',
  description: 'Mozzarella, oregano, basl',
  menu_category_id: dinner_mains.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600715048/pierre-antoine-caisso-3z1ifS7ERVY-unsplash_pnf8dv.jpg'
)

 ItemSize.create!(
  price: 9.00,
  menu_item_id: margarita_pizza.id
)

salami_pizza_lunch =  MenuItem.create!(
  name: 'Salami Pizza',
  description: 'Italian salami, mozzarella, tomato sauce',
  menu_category_id: dinner_mains.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600715106/engin-akyurt-IfAb0bjhHlc-unsplash_rpm5wd.jpg'
)

 ItemSize.create!(
  price: 9.00,
  menu_item_id: salami_pizza_lunch.id
)

salami_pizza =  MenuItem.create!(
  name: 'Salami Pizza',
  description: 'Italian salami, mozzarella, tomato sauce',
  menu_category_id: lunch_mains.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600715106/engin-akyurt-IfAb0bjhHlc-unsplash_rpm5wd.jpg'
)

 ItemSize.create!(
  price: 9.00,
  menu_item_id: salami_pizza.id
)

club_sandwich =  MenuItem.create!(
  name: 'Club Sandwich',
  description: 'Chicken, bacon, tomato, lettuce & mayo',
  menu_category_id: lunch_mains.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600715168/suea-sivilaisith-foHj73zCV3Y-unsplash_xsdlc3.jpg'
)

 ItemSize.create!(
  price: 9.00,
  menu_item_id: club_sandwich.id
)

burger =  MenuItem.create!(
  name: 'Cheese Burger',
  description: 'Angus Beef, cheddar, lettuce & tomato',
  menu_category_id: lunch_mains.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600715207/amirali-mirhashemian-Tht2Sdwqey8-unsplash_ypahgc.jpg'
)

 ItemSize.create!(
  price: 9.00,
  menu_item_id: burger.id
)

rib_eye =  MenuItem.create!(
  name: 'Rib-eye Steak',
  description: 'Waygu beef, 16 oz with red wine sauce',
  menu_category_id: dinner_mains.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600715269/alex-munsell-auIbTAcSH6E-unsplash_qwsnyc.jpg'
)

 ItemSize.create!(
  price: 9.00,
  menu_item_id: rib_eye.id
)

salmon = MenuItem.create!(
  name: 'Maple Glaze Salmon',
  description: 'Atlantic Salmon with maple syrup glaze',
  menu_category_id: dinner_mains.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600715307/sebastian-coman-photography-Co-T6odt0es-unsplash_n8oxnp.jpg'
)

 ItemSize.create!(
  price: 9.00,
  menu_item_id: salmon.id
)

gnocchi = MenuItem.create!(
  name: 'Vegetarian Gnocchi',
  description: 'Homemade gnocchi with pesto sauce',
  menu_category_id: dinner_mains.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600715350/sebastian-coman-photography-Zmhi-OMDVbw-unsplash_p7bhqn.jpg'
)

 ItemSize.create!(
  price: 9.00,
  menu_item_id: gnocchi.id
)

sorbet = MenuItem.create!(
  name: 'Sorbet Trio',
  description: 'Strawberry, mango, blueberry',
  menu_category_id: desserts.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600715399/sebastian-coman-photography--hM0-PSO3FY-unsplash_viiw5w.jpg'
)

 ItemSize.create!(
  price: 9.00,
  menu_item_id: sorbet.id
)

brownie = MenuItem.create!(
  name: 'Chocolate Brownie',
  description: 'Dark chocolate brownie',
  menu_category_id: desserts.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600715446/alena-ganzhela-MONzTP2XxUE-unsplash_jypjog.jpg'
)

 ItemSize.create!(
  price: 9.00,
  menu_item_id: brownie.id
)

creme_brulee = MenuItem.create!(
  name: 'Creme Brulee',
  description: 'Classic cream brulee',
  menu_category_id: desserts.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1600715487/alex-munsell-wiTWDYLURr8-unsplash_lua4p5.jpg'
)

 ItemSize.create!(
  price: 9.00,
  menu_item_id: creme_brulee.id
)

whiskey_sour = MenuItem.create!(
  name: 'Whiskey Sour',
  description: 'Jameson, lemon, egg white',
  menu_category_id: cocktails.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1558087280/frapzo3jjewuo3xkfpcb.jpg'
)

 ItemSize.create!(
  price: 9.00,
  menu_item_id: whiskey_sour.id
)

french_martini = MenuItem.create!(
  name: 'French Martini',
  description: 'Grey goose, Chambord, pineapple',
  menu_category_id: cocktails.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1558109315/cb1cxjvngzz7cdv3gosy.jpg'
)

 ItemSize.create!(
  price: 9.00,
  menu_item_id: french_martini.id
)

japanese_slipper = MenuItem.create!(
  name: 'Japanese Slipper',
  description: 'Midori, Cointreau & lemon',
  menu_category_id: cocktails.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1558109563/ezn9k4l4iqg3xtdsy9wr.jpg'
)

 ItemSize.create!(
  price: 9.00,
  menu_item_id: japanese_slipper.id
)

margarita = MenuItem.create!(
  name: 'Classic Margarita',
  description: 'Don Julio, Cointreau & lime',
  menu_category_id: cocktails.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1558087299/acfhxpjk7eiwryqdwwfs.jpg'
)

 ItemSize.create!(
  price: 9.00,
  menu_item_id: margarita.id
)

mojito = MenuItem.create!(
  name: 'Classic Mojito',
  description: 'Bacardi, mint & lime',
  menu_category_id: cocktails.id,
  photo: 'https://res.cloudinary.com/dnyjzmdsk/image/upload/v1558087255/tvsdmyyvblwt1u5tbhep.jpg'
)

 ItemSize.create!(
  price: 9.00,
  menu_item_id: mojito.id
)

pinot_noir = MenuItem.create!(
  name: 'Pinot Noir',
  description: 'Kim Crawford, NZ',
  menu_category_id: wines.id
)

 ItemSize.create!(
  price: 9.00,
  unit: '6 oz',
  menu_item_id: pinot_noir.id
)

 ItemSize.create!(
  price: 12.00,
  unit: '9 oz',
  menu_item_id: pinot_noir.id
)

 ItemSize.create!(
  price: 60.00,
  unit: 'Bottle',
  menu_item_id: pinot_noir.id
)

cab_sauv = MenuItem.create!(
  name: 'Cabernet Sauvignon',
  description: 'Kim Crawford, NZ',
  menu_category_id: wines.id
)

 ItemSize.create!(
  price: 11.00,
  unit: '6 oz',
  menu_item_id: cab_sauv.id
)

 ItemSize.create!(
  price: 15.00,
  unit: '9 oz',
  menu_item_id: cab_sauv.id
)

 ItemSize.create!(
  price: 72.00,
  unit: 'Bottle',
  menu_item_id: cab_sauv.id
)

shiraz = MenuItem.create!(
  name: 'Shiraz',
  description: "Jacob's Creek, AUS",
  menu_category_id: wines.id
)

 ItemSize.create!(
  price: 9.00,
  unit: '6 oz',
  menu_item_id: shiraz.id
)

 ItemSize.create!(
  price: 12.00,
  unit: '9 oz',
  menu_item_id: shiraz.id
)

 ItemSize.create!(
  price: 60.00,
  unit: 'Bottle',
  menu_item_id: shiraz.id
)

pinot_grigio = MenuItem.create!(
  name: 'Pinot Grigio',
  description: 'Ernest and Julio, CA',
  menu_category_id: wines.id
)

 ItemSize.create!(
  price: 9.00,
  unit: '6 oz',
  menu_item_id: pinot_grigio.id
)

 ItemSize.create!(
  price: 12.00,
  unit: '9 oz',
  menu_item_id: pinot_grigio.id
)

 ItemSize.create!(
  price: 60.00,
  unit: 'Bottle',
  menu_item_id: pinot_grigio.id
)

riesling = MenuItem.create!(
  name: 'Riesling',
  description: 'Mission Hill, BC',
  menu_category_id: wines.id
)

 ItemSize.create!(
  price: 10.00,
  unit: '6 oz',
  menu_item_id: riesling.id
)

 ItemSize.create!(
  price: 14.00,
  unit: '9 oz',
  menu_item_id: riesling.id
)

 ItemSize.create!(
  price: 66.00,
  unit: 'Bottle',
  menu_item_id: riesling.id
)

sauv_blanc = MenuItem.create!(
  name: 'Sauvignon Blanc',
  description: 'Peller Estates, Niagara',
  menu_category_id: wines.id
)

 ItemSize.create!(
  price: 10.00,
  unit: '6 oz',
  menu_item_id: sauv_blanc.id
)

 ItemSize.create!(
  price: 14.00,
  unit: '9 oz',
  menu_item_id: sauv_blanc.id
)

 ItemSize.create!(
  price: 66.00,
  unit: 'Bottle',
  menu_item_id: sauv_blanc.id
)

millstreet = MenuItem.create!(
  name: 'Millstreet',
  menu_category_id: beers.id
)

 ItemSize.create!(
  price: 7.00,
  unit: '12 oz',
  menu_item_id: millstreet.id
)

 ItemSize.create!(
  price: 11.00,
  unit: '20 oz',
  menu_item_id: millstreet.id
)

guiness = MenuItem.create!(
  name: 'Guiness',
  menu_category_id: beers.id
)

 ItemSize.create!(
  price: 7.00,
  unit: '12 oz',
  menu_item_id: guiness.id
)

 ItemSize.create!(
  price: 11.00,
  unit: '20 oz',
  menu_item_id: guiness.id
)


somersby = MenuItem.create!(
  name: 'Somersby',
  menu_category_id: beers.id
)

 ItemSize.create!(
  price: 7.00,
  unit: '12 oz',
  menu_item_id: somersby.id
)

 ItemSize.create!(
  price: 11.00,
  unit: '20 oz',
  menu_item_id: somersby.id
)

coke = MenuItem.create!(
  name: 'Coke',
  menu_category_id: soft_drinks.id
)

 ItemSize.create!(
  price: 2.50,
  menu_item_id: coke.id
)

coke = MenuItem.create!(
  name: 'Coke',
  menu_category_id: soft_drinks.id
)

 ItemSize.create!(
  price: 2.50,
  menu_item_id: coke.id
)

sprite = MenuItem.create!(
  name: 'Sprite',
  menu_category_id: soft_drinks.id
)

 ItemSize.create!(
  price: 2.50,
  menu_item_id: sprite.id
)

nestea = MenuItem.create!(
  name: 'Nestea',
  menu_category_id: soft_drinks.id
)

 ItemSize.create!(
  price: 2.50,
  menu_item_id: nestea.id
)

puts 'Creating dietaries 🥖'

gluten = Dietary.create!(
  name: 'Gluten',
  restaurant_id: restaurant.id
)

dairy = Dietary.create!(
  name: 'Dairy',
  restaurant_id: restaurant.id
)

meat = Dietary.create!(
  name: 'Meat',
  restaurant_id: restaurant.id
)

soy = Dietary.create!(
  name: 'Soy',
  restaurant_id: restaurant.id
)

puts 'Creating dietary intances 🥖'

 DietaryInstance.create!(
  dietary_id: gluten.id,
  menu_item_id: margarita_pizza.id
)

 DietaryInstance.create!(
  dietary_id: gluten.id,
  menu_item_id: salami_pizza_lunch.id
)

 DietaryInstance.create!(
  dietary_id: gluten.id,
  menu_item_id: margarita_pizza_lunch.id
)

 DietaryInstance.create!(
  dietary_id: gluten.id,
  menu_item_id: salami_pizza.id
)

 DietaryInstance.create!(
  dietary_id: meat.id,
  menu_item_id: club_sandwich.id
)

 DietaryInstance.create!(
  dietary_id: meat.id,
  menu_item_id: burger.id
)

 DietaryInstance.create!(
  dietary_id: soy.id,
  menu_item_id: mac_and_cheese.id
)

 DietaryInstance.create!(
  dietary_id: soy.id,
  menu_item_id: mac_and_cheese_lunch.id
)

 DietaryInstance.create!(
  dietary_id: dairy.id,
  menu_item_id: mac_and_cheese.id
)

 DietaryInstance.create!(
  dietary_id: dairy.id,
  menu_item_id: mac_and_cheese_lunch.id
)

 DietaryInstance.create!(
  dietary_id: dairy.id,
  menu_item_id: margarita_pizza.id
)

 DietaryInstance.create!(
  dietary_id: dairy.id,
  menu_item_id: salami_pizza_lunch.id
)

 DietaryInstance.create!(
  dietary_id: dairy.id,
  menu_item_id: margarita_pizza_lunch.id
)

 DietaryInstance.create!(
  dietary_id: dairy.id,
  menu_item_id: salami_pizza.id
)

 DietaryInstance.create!(
  dietary_id: gluten.id,
  menu_item_id: potstickers_lunch.id
)

 DietaryInstance.create!(
  dietary_id: gluten.id,
  menu_item_id: potstickers_dinner.id
)

puts 'All done 🎉🎉🎉'
