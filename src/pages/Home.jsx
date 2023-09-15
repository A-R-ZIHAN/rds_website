import Testimonials from "../components/Testimonials";

const Home = ()=>{
  return(
    <>
    <div id="home">
      <div className="upper-content">
        <div id="logo">
          <img src="assets/images/logo-white.png" alt="" />
        </div>
        <div id="welcome-writing">
          <h1>Welcome</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, dolor mollitia nam nobis  deleniti nulla, nihil ut reiciendis aut eveniet itaque nisi voluptatibus repellendus debitis. Quas nam quasi labore velit.</p>
        </div>
        <div className="overlay"></div>

      </div>
      <div className="all-testimonials-div">
        <h1>Testimonials</h1>
        <Testimonials reverse={false} link="assets/images/tareq-sir.jpg" name="Tareq Ahmed" testimonial="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, dolor mollitia nam nobis  deleniti nulla, nihil ut reiciendis aut eveniet itaque nisi voluptatibus repellendus debitis. Quas nam quasi labore velit"/>

        <Testimonials reverse={true} link="assets/images/nayeen-bhai.jpg" name="Tareq Ahmed" testimonial="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, dolor mollitia nam nobis  deleniti nulla, nihil ut reiciendis aut eveniet itaque nisi voluptatibus repellendus debitis. Quas nam quasi labore velit"/>
        

      </div>

    </div>
      
    </>
  )
}

export default Home;