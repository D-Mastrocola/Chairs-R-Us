import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from './styles';

const products = [
  { id: 1, name: "Shoes", description: "Running Shoes.", price: "$5", image: 'https://images.vans.com/is/image/Vans/D3HY28-HERO' },
  {
    id: 2,
    name: "Gaming PC",
    description: "High End Gaming PC.",
    price: "$10",
    image: 'http://avadirect-freedomusainc1.netdna-ssl.com/pictures/750/13515225_13.png'
  },
];

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar}/>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
