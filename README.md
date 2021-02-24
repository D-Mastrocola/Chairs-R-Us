# Chairs R Us
A mockup ecommerce website for Chairs.

## Features
- Commerce JS handles all of the backend
- Home page makes an API call to retrieve products
- When you click the add to cart button it makes another api call to CommerceJS to add it to the cart. It returns a response and updates the cart icon amount in the top left corner.
- When you click the cart icon using react routers it takes you the the cart page; Request Cart data from the commerceJS API then updates the page. You can add, subtract, remove, and/or completely empty the cart.
- When you click checkout it calls the api asking for a checkout. It makes an api call for shipping price based on user input. Then using stripe you enter your card and when confrimed it sends an email confrimation and empties the cart

## Live
- https://serene-kowalevski-3184b4.netlify.app/
