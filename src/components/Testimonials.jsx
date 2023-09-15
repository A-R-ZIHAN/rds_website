const Testimonials = (props)=>{
  
  return(
    <>
    <div id="testimonials" style={props.reverse ? {flexDirection:'row-reverse'} : {}}>
        <div id="left">
            <img src={props.link} alt="" />
            <p>{props.name}</p>
        </div>
        <div id="right">
            <p><b>"</b> {props.testimonial}</p>
        </div>
    
    
    </div>

    </>
  )

}


export default Testimonials