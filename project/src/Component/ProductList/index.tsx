import React from "react";

interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
}

const ProductList = ({ titleContainer }: { titleContainer: string }) => {
  let [products, setProducts] = React.useState<[ProductType] | null>(null);
  //   console.log(products);

  React.useEffect(() => {
    let fetchedProducts = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products?offset=0&limit=4"
        );
        let result = await response.json();
        // console.log(result);
        setProducts(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedProducts();
  }, []);

  return (
    <section className="sections">
      <h2 className="section_title text-center">{titleContainer}</h2>
      <div className="product_wrapper flex">
        {products &&
          products.length > 0 &&
          products.map((product) => {
            return (
              <div className="product_item" key={product.id}>
                {/* <span className="discount">-6%</span> */}
                <img src={product.images[0]} alt={product.title} />
                <h3>{product.title}</h3>
                <div className="price">
                  <strong>{product.price}đ</strong>
                  {/* <del>1.725.000đ</del> */}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default ProductList;
