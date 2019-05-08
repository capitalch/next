const About = ({stars}) => {
    // console.log(props);
    return <div>
      <p>This is about me</p>
      <p>Next stars:{stars}</p>
    </div>
}

About.getInitialProps = async ({ req }) => {
	return { stars: 'Somthing about' };
};
  
  export default About;