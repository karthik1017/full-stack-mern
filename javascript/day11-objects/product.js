var product = {
    name:'marker',
    price:'INR 15',
    description:'White board marker',
    details: function(){
          return `${name}-${this.price}-${this.description}`
    }
};
console.log(product);
console.log(product.details());