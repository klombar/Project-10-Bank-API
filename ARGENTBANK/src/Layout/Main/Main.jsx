import Banner from '../../components/Banner/Banner';
import bannerImage from '../../assets/img/bank-tree.jpeg';
import Features from '../../components/Features/Features';
import chat from '../../assets/img/icon-chat.png';
import money from '../../assets/img/icon-money.png';
import security from '../../assets/img//icon-security.png';
import "./Main.css"

function Main() {
  return (
    <div>
      <Banner image={bannerImage}/>
      <section className='section-features'>
      <Features icon={chat} title="You are our #1 priority" text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."/>
      <Features icon={money} title="More savings means higher rates" text="The more you save with us, the higher your interest rate will be!"/>
      <Features icon={security} title="Security you can trust" text="We use top of the line encryption to make sure your data and money is always safe."/>
      </section>
    </div>
  );
}

export default Main;