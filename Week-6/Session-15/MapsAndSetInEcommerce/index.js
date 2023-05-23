/* Start Function of Increment Porduct Views */

const productViews = new WeakMap();
var count = 0;

function incrementProductViews(productId) {

    const product_id = {};

    productViews.set(product_id,`${productId}`);
    
    var productId = productViews.get(product_id);

    count++;

    console.log(`Product ID ${productId} is viewed for the ${count} time`)

    return {productId,count};

}
/* End Function of Increment Porduct Views */



/* Start Function of Add To Cart */
const myWeakSet = new WeakSet();

var set_count = 0;

function addToCart(productId) {
    
    const productcart = {productId};

    if (set_count == 0) {
        set_count++;
        myWeakSet.add(productcart);

        console.log('Product Added to Cart');
   
    } else {
   
        console.log('Product Already in Cart');
        
    }
  
    return productcart.productId;
}
/* End Function of Add To Cart */

console.log(incrementProductViews(123));
console.log(incrementProductViews(123));

console.log(addToCart(123));
console.log(addToCart(123));
