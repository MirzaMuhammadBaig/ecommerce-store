import MainSinglePro from "allPages/MainSinglePro";
import { useRouter } from "next/router";
import React from "react";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Navbar from "newCompounts/navbar";
import MainCenterofDeatil from "newCompounts/SingleProduct/MainCenterofDeatil";
import RelatedProduct from "newCompounts/SingleProduct/relatedProduct";
import Newfooter from "newCompounts/newfooter";

const SingleProduct = (prop: any) => {
  const router = useRouter();
  const { slug } = router.query;

  var [dataa, setData] = useState();

  useEffect(() => {
    if (slug !== undefined) {
      axios
        .get(`https://ecommerce-store-rho.vercel.app/api/product/${slug}`)
        .then((response: any) => {
          setData(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [slug]);

  if (!dataa) return <>loading</>;

  return (
    <>
      <Navbar />

      <div className="mt-14">
        <MainCenterofDeatil dataa={dataa} />
      </div>
      <div className="mt-10">
        <RelatedProduct />
      </div>
      <div className="mt-10">
        <Newfooter />
      </div>
    </>
  );
};

export default SingleProduct;
