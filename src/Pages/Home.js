import React from 'react';
import Hero from '../Components/Hero';
import Feature from '../Components/Feature';

const Home = () => {
  return (
    <main>
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Feature
        iconSrc={require('../Assets/icon-chat.png')}
        title="You are our #1 priority"
        description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
      />
      <Feature
        iconSrc={require('../Assets/icon-money.png')}
        title="More savings means higher rates"
        description="The more you save with us, the higher your interest rate will be!"
      />
      <Feature
        iconSrc={require('../Assets/icon-security.png')}
        title="Security you can trust"
        description="We use top of the line encryption to make sure your data and money is always safe."
      />
      </section>
    </main>
  );
};

export default Home;
