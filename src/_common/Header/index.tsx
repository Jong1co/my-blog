"use client";
import React from "react";
import * as Style from "./index.styles";
import { useRouter } from "next/router";

export const Header = () => {
  //   const router = useRouter();

  //   console.log(router.pathname);
  return (
    <Style.Header>
      <Style.Logo>JongHyun</Style.Logo>
      <Style.Nav>
        <Style.List>Home</Style.List>
        <Style.List>Posts</Style.List>
        <Style.List>Contact</Style.List>
        <Style.List>다크</Style.List>
      </Style.Nav>
    </Style.Header>
  );
};
