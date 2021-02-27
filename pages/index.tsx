import React from "react";
import "tailwindcss/tailwind.css";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import axios from "axios";
import Head from "next/head";
import { GraphQLClient, gql } from "graphql-request";
import dynamic from "next/dynamic";

import { IUser } from "../models/IUser";
import { IRepo } from "../models/IRepo";
import { IPost } from "../models/IPost";

import UserContext from "../context/UserContext";
import ReposContext from "../context/RepoContext";
import PostContext from "../context/PostContext";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
const Projects = dynamic(() => import("../components/Projects"));
const Blogs = dynamic(() => import("../components/Blogs"));
const Experience = dynamic(() => import("../components/Experience"));
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

const fetchPosts = async () => {
  const endpoint: string = "https://api.hashnode.com/";
  const query: string = gql`
    {
      user(username: "deadwing7x") {
        publication {
          posts(page: 0) {
            _id
            title
            dateAdded
            cuid
            slug
            coverImage
          }
        }
      }
    }
  `;

  const graphQlClient = new GraphQLClient(endpoint, {
    headers: {
      Authorization: "b4b4dd91-e469-435b-8702-eae9dc1881e5",
    },
  });

  const {
    user: {
      publication: { posts },
    },
  } = await graphQlClient.request(query);

  return posts;
};

export const getStaticProps: GetStaticProps = async () => {
  const user: IUser | {} = await fetchUser();
  const repos: IRepo[] | {} = await fetchRepos();
  const posts: IPost[] = await fetchPosts();

  return {
    props: {
      user,
      repos,
      posts,
    },
  };
};

const Home = ({
  user,
  repos,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>anubhav7x</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
      <UserContext.Provider value={user}>
        <ReposContext.Provider value={repos}>
          <PostContext.Provider value={posts}>
            <div className="container mx-auto">
              <Navbar />
              <Hero />
              <AboutMe />
              <Projects />
              <Blogs />
              <Experience />
              <ScrollToTop />
              <Footer />
            </div>
          </PostContext.Provider>
        </ReposContext.Provider>
      </UserContext.Provider>
    </>
  );
};

export default Home;
