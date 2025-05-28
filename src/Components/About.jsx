
const About = () => {
  return ( 
     
    <section className="about">
<div className="about-txt">
 <h1>POWERING EVERY <b/> DELIVERY WITH TRUST </h1>
 <p>7Express is a logistics company committed to providing secure and seamless shipping solutions for both local and international clients.</p>
 </div>
 
  <section className="cards">

    <div className="card">
      
  <h1 className="c-title">WHO ARE WE</h1>
      <p>A company of smooth and secure experiences,We excel in shipping and safety ,
From 7 Corners to the World 7days 7continents
one connection.</p>
    </div>

    <div className="card-img">
      <img src="../src/assets/delguy.png" alt="card1" />
    </div>

<div className="card" style={{background: "white", color: "black" }}>
     <h1 className="c-title">OUR VISION</h1>
      <p>To be the number one logistics choice in Malaysia .</p>
</div>

    <div className="card">
      
      <h1 className="c-title">OUR MISSION</h1>
      <p>To deliver a seamless and secure experience that our clients can rely on.</p>
    </div>

  </section>

  <section className="overView">

 <div className="overView-num">
<h1>+1000</h1>
<h1>100%</h1>
<h1>+500</h1>
</div>

<div className="overView-item">
<p>PERMANENT CUSTOMERS</p>
<p>DELIVERY GUARANTEE</p>
<p>PARCEL PER DAY</p></div>
  </section>
     </section>
  )
}

export default About