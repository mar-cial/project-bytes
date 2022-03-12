import React, { FC, useState } from 'react';
import PageTitle from '../../../components/pageTitle';
import Image from 'next/image';
import products from '../../../data/products';
import PageLayout from '../../../layout/pagelayout';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

type CartProductIconProps = {
  image: string;
  key: number;
  action: () => void;
};

const CartProductIcon = (props: CartProductIconProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={'cursor-pointer shadow-md p-2'}
      whileTap={{ y: 0 }}
      onClick={props.action}
    >
      <Image src={props.image} width={900} height={900} layout="responsive" />
    </motion.div>
  );
};

const CartPage: FC = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState([0]);
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    setTotal(subtotal.reduce((p, c) => p + c));
  };

  return (
    <PageLayout>
      <PageTitle title="TypeScript Cart" />

      <section className="grid gap-2 py-4 ">
        {/* Product details */}
        <AnimateSharedLayout>
          <AnimatePresence>
            <div
              className={
                'md:col-span-6  py-4 md:px-4 grid md:grid-cols-2 gap-4'
              }
            >
              <div className={`bg-red-300 rounded-full md:h-2/3`}>
                <Image
                  src={'/box.png'}
                  width={900}
                  height={900}
                  layout="responsive"
                  alt="Cardboard box"
                />
              </div>
              <div>
                <div className="pb-4">
                  <h3 className="font-medium text-gray-600 text-md">
                    Product name
                  </h3>
                  <h2 className="text-5xl font-bold">
                    {products[selectedProduct].name}
                  </h2>
                </div>
                <div className="pb-4">
                  <h3 className="font-medium text-gray-600 text-md">
                    Product info
                  </h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptates corporis harum delectus sequi ipsa veritatis,
                    iure fuga, repellendus saepe rerum esse tempora enim
                    voluptatum explicabo dolorem, debitis dolorum excepturi?
                    Voluptatem.
                  </p>
                </div>
                <div className="pb-4">
                  <h3 className="font-medium text-gray-600 text-md">Price</h3>
                  <p className="text-xl font-medium">{`$${products[
                    selectedProduct
                  ].price.toFixed(2)}`}</p>
                </div>
                <div>
                  <motion.button
                    className="w-full p-4 font-medium bg-red-400 rounded-md"
                    whileHover={{ y: -5 }}
                    whileTap={{ y: 0 }}
                    onClick={() => {
                      setCartItems((oldArr) => [
                        ...oldArr,
                        products[selectedProduct],
                      ]);
                      setSubtotal((oldArr) => [
                        ...oldArr,
                        products[selectedProduct].price,
                      ]);
                      calculateTotal();
                    }}
                  >
                    add to cart
                  </motion.button>
                </div>
              </div>
            </div>
          </AnimatePresence>
        </AnimateSharedLayout>

        {/* Product Icons */}
        <div className={'md:col-span-3 grid grid-cols-3 gap-2 md:h-56'}>
          {products.map((prod, i) => {
            return (
              <CartProductIcon
                image={prod.img}
                key={i}
                action={() => {
                  setSelectedProduct(i);
                }}
              />
            );
          })}
        </div>

        {/* Cart */}
        <div className={'md:col-span-3 grid gap-2'}>
          <h2 className={'font-bold text-3xl'}>Cart</h2>
          <div className="grid gap-2 overflow-scroll max-h-96">
            {cartItems.map((item, i) => (
              <div className="grid gap-2 p-2 border-2 " key={i}>
                <div className="flex flex-row items-center justify-between">
                  <h4 className="text-lg font-bold">{item.name}</h4>
                  <Image src={item.img} width={40} height={40} layout="fixed" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium">Price</span>
                  <span>{`$${item.price.toFixed(2)}`}</span>
                </div>
              </div>
            ))}
            <div className={'flex items-center justify-between'}>
              <span className="text-2xl font-semibold">Total</span>
              <span className="text-2xl font-semibold">{`$${total.toFixed(
                2
              )}`}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <motion.button
              className="py-6 text-lg font-bold bg-red-500 border-2 rounded-md max-h-24"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              onClick={() => {
                setCartItems([]);
                setSubtotal([0]);
                setTotal(0);
              }}
            >
              Clear cart
            </motion.button>
            <motion.button
              className="py-6 text-lg font-bold bg-green-500 border-2 rounded-md max-h-24"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              onClick={() => {
                alert('Thank you for checking out my project!');

                setCartItems([]);
                setSubtotal([0]);
                setTotal(0);
              }}
            >
              Order
            </motion.button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CartPage;
