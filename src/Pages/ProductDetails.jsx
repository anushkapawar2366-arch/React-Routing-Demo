import React from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductDetails() {
const params = useParams();

return (
<> <section> <p>Product details are:</p>

    <p>You choose product: {params.pdesc}</p>

    <p>
      <Link to="/product">Product</Link>
    </p>
  </section>
</>


);
}