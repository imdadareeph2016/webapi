export class Restaurants {
  id: number;
  name = '';
  category = '';
  deliveryEstimate = '';
  rating = '';
  imagePath = '';
  about = '';
  hours = '';
  
constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}