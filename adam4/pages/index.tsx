import React from "react";
import Head from "../components/head";
import Layout from "../components/layout";
import GlobalStyle from "../handy/globalStyle";
import Contact from "../components/contact";
import Skillset from "../components/skillset";
import axios from "axios";
import settings from "../settings.json";
import Comments from "../components/comments";

const slugMapping: any = {
  home: "Contact Sushant Agrawal for React.js development",
  about: "About node.js development by Sushant Agrawal",
  contact: "Contact Sushant Agrawal for Flutter development",
  resume: "Resume of Sushant Agrawal, full stack software developer",
  skillset: "Skills of full stack software consultant Sushant Agrawal",
  academics: "Academics of full stack software consultant Sushant Agrawal",
  projects: "Projects done by Sushant Agrawal, full stack software developer",
  qa: "Interview of full stack software consultant Sushant Agrawal",
};
const IndexPage = ({ content, slug, pageComments, skills }: any) => {
  return (
    <div>
      <GlobalStyle />
      <Head title={slugMapping[slug]} />
      {getPageContent({ content, slug, pageComments, skills })}
    </div>
  );
};

IndexPage.getInitialProps = async ({ res, asPath }: any) => {
  let slug = asPath.slice(1) || "home"; // remove first char (/) from asPath

  !allPages[slug] && (slug = "home");
  let content;
  allPages[slug].isMDFile &&
    (content = (await import(`../docs/pages/${slug}.md`)).default);

  let skills = {};
  if (res) {
    if (slug === "skillset") {
      skills = JSON.parse(res.locals.skills);
    }
  } else {
    if (slug === "skillset") {
      const d = (await axios.get("/skillset?client=true")).data;
      skills = JSON.parse(d.skills);
    }
  }

  const url = `${settings.commentsUrl}/${slug}`;
  const params = {
    token: settings.token,
  };
  let pageComments;
  try {
    pageComments = (
      await axios.get(url, {
        params: params,
      })
    ).data;
  } catch (e: any) {
    console.log((e.response && e.response.data.message) || e.message);
  }

  return {
    content,
    slug,
    pageComments,
    skills,
  };
};

function getPageContent({ content, slug, pageComments, skills }:any):any {
  let Ret;
  if (allPages[slug].isMDFile) {
    Ret = (
		<></>
    //   <Layout
    //     isBanner={allPages[slug].isBanner}
    //     currentPage={slug}
    //     content={content}>
    //     <Comments pageComments={pageComments} slug={slug}></Comments>
    //   </Layout>
    );
  } else {
    Ret = (
		<div>Placeholder</div>
    //   <Layout isBanner={allPages[slug].isBanner} currentPage={slug} >
    //     {allPages[slug].component(skills)}{" "}
    //     <Comments pageComments={pageComments} slug={slug}></Comments>
    //   </Layout>
    );
  }
  return Ret;
}

const allPages: any = {
  home: { isBanner: true, isMDFile: true },
  about: { isBanner: true, isMDFile: true },
  contact: {
    isBanner: true,
    isMDFile: false,
    component: () => <Contact></Contact>,
  },
  resume: { isBanner: false, isMDFile: true },
  skillset: {
    isBanner: false,
    isMDFile: false,
    component: (skills: any) => <Skillset skills={skills}></Skillset>,
  },
  academics: { isBanner: false, isMDFile: true },
  projects: { isBanner: false, isMDFile: true },
  qa: { isBanner: false, isMDFile: true }, //,
  
};

export default IndexPage;

/*

*/
