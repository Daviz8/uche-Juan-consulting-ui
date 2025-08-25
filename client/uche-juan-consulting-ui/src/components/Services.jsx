
import './App.css';


function Services() {
  return (
    <>
     <div  className="relative">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="images/bg blue.mp4" type="video/mp4" />
  
        </video>

        {/* Overlay Container */}
        <div className="bg-blue-800 text-white bg-opacity-80 relative z-10">
          
          {/* Container for content */}
          <div className="container mx-auto px-4 py-8">
            
      {/* Body Section */}
      <div className="body-service">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-white">Juan Consulting</h1>
          <p className="text-xl px-9 font-bold mb-2 py-8 text-white font-serif">
          Juan Consulting, specializes in empowering individuals and organizations to thrive in capital city development with cutting-edge consulting programs tailored to enhance personal and professional growth.<br/><br/>

Explore what our core services is all about <br/><br/>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <img src="images/value.Webp" alt="Self Leadership" className="w-full mb-4" />
              <h2 className="text-2xl text-black font-semibold mb-2 ">Self Leadership</h2>
              <p className="text-black font-serif font-bold py-9 leading-8">
              Our self-leadership programs are designed to help you take control of your life, make better decisions, and achieve your goals.<br/> <br/> Through workshops and one-on-one coaching sessions, you'll learn to identify your values, set priorities, and develop the <span className='text-red-600'> self-discipline </span>  to overcome obstacles. <br/><br/> Whether you're looking to improve your career, relationships, or personal well-being, our programs will help you build the confidence and resilience to succeed.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
             <div className='star-wars'>
              <img
                src="/images/love.Webp"
                alt="Marriage Counselling"
                className="w-full mb-4 "
              />
               </div>
              <h2 className="text-2xl text-black font-semibold mb-2">Mastering MSCLI: Building Stronger Relationships </h2>
              <p className="text-black font-bold leading-8 font-serif py-9">
              Discover the keys to building strong, fulfilling partnerships with our transformative relationship consulting programs.<br/><br/>
  Learn how to spot the right partner for you by understanding compatibility, shared values, and long-term goals.<br/><br/>
  Equip yourself to become the ideal partner by developing emotional maturity, effective communication skills, and self-awareness.<br/><br/>
  Relationships and marriages often crumble under the weight of unresolved challenges in  <span className='text-red-600' > Money, Sex and Soul Ties, Communication and Children, Love, and In-Laws—the </span> leading causes of broken partnerships.<br/><br/>
Our MSCLI course dives deep into these critical areas, equipping you with the knowledge and tools to navigate them successfully.<br/><br/>
Whether you're preparing for a lifelong commitment or looking to strengthen your current relationship, understanding MSCLI is essential for building trust, harmony, and resilience. Don’t leave your relationship to chance—empower yourself with the skills to create lasting love and connection.

              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <img src="/images/eq.Webp" alt="Emotional Intelligence" className="w-full mb-4" />
              <h2 className="text-2xl text-black  font-semibold mb-2">Emotional Intelligence</h2>
              <p className="text-black font-bold font-serif leading-8 py-9">
              Transform the way you connect with others through our emotional intelligence consulting. <br/><br/> We help you recognize and <span className='text-red-600'> manage your emotions, foster empathy, and strengthen relationships—skills </span>  essential for thriving in the dynamic landscape of capital cities. Whether you’re a leader, team member, or entrepreneur, our programs will equip you with the tools to navigate diverse interactions with clarity and poise.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <img
                src="/images/public speaking.Webp"
                alt="Public Speaking"
                className="w-full mb-4"
              />
              <h2 className="text-2xl text-black font-semibold mb-2">Public Speaking</h2>
              <p className="text-black font-bold font-serif leading-8 py-9">
              Speak with confidence and inspire your audience with our public speaking programs. <br/><br/> Designed to help you articulate your vision, engage listeners, and leave a lasting impact, our workshops and one-on-one coaching sessions focus on voice control, storytelling, stage presence and most importantly the <span className='text-red-600' >act and art of public speaking</span>. <br/><br/> Whether presenting in boardrooms, conferences, or public forums, you'll gain the skills to command any audience.
              </p>
            </div>
          
          </div>
        </div>
      </div>
      </div>
</div>
</div>
    </>
  );
}

export default Services;
