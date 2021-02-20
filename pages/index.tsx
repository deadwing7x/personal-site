import React from "react";
import "tailwindcss/tailwind.css";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import axios from "axios";
import Head from 'next/head';

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { IUser } from "../models/IUser";
import UserContext from "../context/UserContext";
import { IRepo } from "../models/IRepo";
import ReposContext from "../context/RepoContext";

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
        </Head>
        <div className="container mx-auto">
          <Navbar />
          <Hero />
        </div>
      </ReposContext.Provider>
    </UserContext.Provider>
  );
};

export default Home;
