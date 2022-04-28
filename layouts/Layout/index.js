/*
 * @Description:
 * @Author: lixiaoxin
 * @Date: 2022-04-12 13:47:09
 * @LastEditors: lixiaoxin
 * @LastEditTime: 2022-04-13 08:57:09
 */
import React from "react";
import Header from "../Header";
// import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
