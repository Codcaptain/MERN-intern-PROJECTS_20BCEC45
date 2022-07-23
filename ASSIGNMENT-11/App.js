import {Product} from './components/product/Product';
function App() {
  const product_arr=[
    {
      product_name:"Furniture Set",
      product_image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSII_CYzQGgdSbXH_HKYQIJB6DOro62J31hyw&usqp=CAU",
      product_price:"$100",
      product_conducted_by:"American Wakefit company"
    },
    {
      product_name:"Gadgets",
      product_image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgWks2yJj6Y6_1GOgrhmUVgwJwP5tv8IZPWA&usqp=CAU",
      product_price:"$90",
      product_conducted_by:"LG,HTC"
    },
    {
      product_name:"medicines",
      product_image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9j_yu0z0OpRZK4TMj9W33YdK49E_UaDk_g&usqp=CAU",
      product_price:"$50",
      product_conducted_by:"Drugpharmatical chemist"
    }
  ]
  return (
    <div className="App">
      <h1>Listed Products Are </h1> 
      <Product name={product_arr[0].product_name} image={product_arr[0].product_image}  price={product_arr[0].product_price} product_conducted_by={product_arr[0].product_conducted_by}/>
      <Product name={product_arr[1].product_name} image={product_arr[1].product_image} price={product_arr[1].product_price} product_conducted_by={product_arr[1].product_conducted_by}/>
      <Product name={product_arr[2].product_name} image={product_arr[2].product_image}  price={product_arr[2].product_price} product_conducted_by={product_arr[2].product_conducted_by}/>
    </div>
  );
}

export default App;

