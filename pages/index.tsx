import React from "react";
import "tailwindcss/tailwind.css";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import axios from "axios";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { IUser } from "../models/IUser";
import UserContext from "../context/UserContext";
import { IRepo } from "../models/IRepo";
import ReposContext from "../context/RepoContext";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const fetchUser = async () =>
  await axios
    .get("https://api.github.com/users/deadwing7x")
    .then((res) => ({
      users: res.data as IUser,
    }))
    .catch(() => ({
      users: {},
    }));

const fetchRepos = async () =>
  await axios
    .get("https://api.github.com/users/deadwing7x/repos")
    .then((res) => ({
      repos: res.data as IRepo[],
    }))
    .catch(() => ({
      repos: [],
    }));

export const getStaticProps: GetStaticProps = async () => {
  const user: IUser | {} = await fetchUser();
  const repos: IRepo[] | {} = await fetchRepos();

  return {
    props: {
      user,
      repos,
    },
  };
};

const Home = ({
  user,
  repos,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <UserContext.Provider value={user}>
      <ReposContext.Provider value={repos}>
        <Head>
          <title>deadwing7x</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <script
            src="https://kit.fontawesome.com/35ac73bd6b.js"
            crossOrigin="anonymous"
          ></script>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
            integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu"
            crossOrigin="anonymous"
          ></link>
        </Head>
        <div className="container mx-auto">
          <Navbar />
          <Hero />
          <AboutMe />
          <Projects />
          <Experience />
          <ScrollToTop />
          <Footer />
        </div>
      </ReposContext.Provider>
    </UserContext.Provider>
  );
};

export default Home;
