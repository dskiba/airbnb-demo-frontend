const houseKind = {
  entire_home: 'Entire house',
  private_room: 'Private room',
};

export default function homesData(offset, limit) {
  return fetch(`https://airbnb-demo-api.now.sh/v1/homes?offset=${offset}&limit=${limit}`)
    .then(res => res.json())
    .then(res =>
      res.items.map(home => ({
        id: home.id,
        name: home.name,
        image: home.images[0].picture,
        price: home.price,
        kind: houseKind[home.kind],
        beds: home.bedsCount,
        guests: home.guestsCount,
        host: home.isSuperhost ? 'Superhost' : '',
        rating: home.rating,
        reviews: home.reviewsCount,
        lat: home.lat,
        lng: home.lng,
      })));
}

// API.types  receive
// "id": 1506296,
// "name": "Miamo - Amazing view in Imerovigli",
// "kind": "entire_home",
// "price": 166,
// "bedsCount": 0,
// "guestsCount": 2,
// "isSuperhost": true,
// "rating": 5,
// "reviewsCount": 174
// "lat": 36.43130897867647,
// "lng": 25.42561534122836,
