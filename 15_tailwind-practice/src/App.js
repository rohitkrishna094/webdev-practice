import logo from './assets/logo.svg';
import headerImage from './assets/header-image.png';
import squarespaceImage from './assets/squarespace.png';
import unicefImage from './assets/unicef.png';
import deutscheImage from './assets/deutsche.webp';
import blankImage from './assets/blank.png';
import ozanImage from './assets/ozan.png';
import msftImage from './assets/msft.png';
import blue1Image from './assets/blue1.png';
import blue2Image from './assets/blue2.png';
import blue3Image from './assets/blue3.png';
import pink1Image from './assets/pink1.png';
import pink2Image from './assets/pink2.png';
import pink3Image from './assets/pink3.png';
import orange1Image from './assets/orange1.png';
import orange2Image from './assets/orange2.png';
import orange3Image from './assets/orange3.png';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp, MdOutlineArrowForward } from 'react-icons/md';
import { RiTwitterXLine } from 'react-icons/ri';
import { ImLinkedin2 } from 'react-icons/im';
import { BsArrowRight } from 'react-icons/bs';
import './App.css';

function Navbar() {
  return (
    <div className="nav_container flex justify-evenly bg-slate-50 fixed z-50 mx-auto inset-x-0">
      <a href="/" className="logo flex items-center">
        <img src={logo} alt="logo" className="h-14 w-14" />
        <span className="text-2xl font-bold ml-1">Gleap</span>
      </a>
      <nav className="px-8">
        <div className="nav-inner flex">
          <NavbarItem title="Product" />
          <NavbarItem title="Resources" />
          <NavbarItem title="Pricing" showDropdown={false} />
        </div>
      </nav>
      <div className="menu-right  flex justify-around">
        <div className="menu-item px-1 py-4">
          <button className="px-4 py-1 font-semibold rounded-full hover:bg-gray-100">Log in</button>
        </div>
        <div className="menu-item px-1 py-4">
          <button className="px-4 py-1 font-semibold rounded-full bg-blue-600 text-slate-50 hover:bg-blue-500">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

function NavbarItem({ title, showDropdown = true }) {
  return (
    <div className="group nav-item flex items-center px-6 py-4 cursor-pointer">
      <span className="nav-item-title text-lg mr-1">{title}</span>
      {showDropdown && (
        <>
          <MdOutlineKeyboardArrowDown className="text-xl mt-1 group-hover:hidden" />
          <MdOutlineKeyboardArrowUp className="text-xl mt-1 hidden group-hover:block" />
        </>
      )}
    </div>
  );
}

function Header() {
  return (
    <header className="flex flex-col items-center z-20 pt-40">
      <div className="cta-1 mb-6">
        <div className="animate-gradient rounded-full bg-gradient-to-r from-orange-500 via-blue-500 to-purple-500 p-0.5">
          <span className="rounded-full bg-slate-50 flex w-full px-4 py-2">For apps & websites</span>
        </div>
      </div>
      <div className="head-1 w-1/2 text-5xl font-bold mb-4">
        <h2 className="text-center">Unleash the power of customer success with Gleap.</h2>
      </div>
      <div className="desc-1 w-1/2 text-gray-800 text-xl mb-6">
        <p className="text-center">
          With visual bug reporting, live chat, public roadmaps, and more, we help you improve your product, boost sales and strengthen customer relationships.
        </p>
      </div>
      <div className="cta-2 text-xl text-slate-50 mb-14 z-20">
        <button className="flex items-center rounded-full px-6 py-4 bg-blue-600 hover:bg-blue-500">
          <span className="mr-2">14-day free trial</span>
          <BsArrowRight className="stroke-1" />
        </button>
      </div>
      <div className="fancy-image-container w-full relative">
        <div
          className="fancy-image w-[65%] h-[580px] pt-12 pb-12 blur-[140px] absolute left-[50%] z-10 -translate-x-2/4 bg-gradient-to-r from-amber-400 via-red-400 to-pink-500"
          // style={{ backgroundImage: 'linear-gradient(90deg, rgba(252,187,21,1) 0%, rgba(244,107,93,1) 51%, rgba(234,19,171,1) 100%)' }}
        ></div>
        <div className="header-image-container bg-white rounded-3xl w-3/5 flex justify-center m-auto relative z-20">
          <img src={headerImage} alt="header-image" className="h-[580px]" />
        </div>
      </div>
    </header>
  );
}

function LogoItem({ image, maxH }) {
  return (
    <div className="logo max-h-[40px] h-[40px] flex justify-center items-center p-0">
      <img src={image} className={`max-h-[${maxH}] max-w-[200px]`} />
    </div>
  );
}

function Testimonials() {
  const logos = [squarespaceImage, unicefImage, deutscheImage, blankImage, ozanImage, msftImage];
  return (
    <div className="customers mt-[100px] flex flex-col items-center mb-[100px]">
      <div className="customers-title mb-10">
        <h6 className="font-medium text-gray-800 text-lg">More than 11,500+ worldwide organizations rely on Gleap</h6>
      </div>
      <div className="customers-logos flex justify-center items-center gap-x-12 gap-y-12">
        {logos.map((logoImage) => {
          return <LogoItem key={logoImage} image={logoImage} maxH={logoImage === deutscheImage ? '44px' : '28px'} />;
        })}
      </div>
    </div>
  );
}

function Section({ heading, subHeading, content, cardsData, colors }) {
  return (
    <>
      <div className="section-1 flex flex-col items-center justify-center text-center">
        <div className={`rounded-full border-2 ${colors.borderColor} px-6 py-1 mb-4`}>{heading}</div>
        <h2 className="font-bold text-5xl w-[40%]">{subHeading}</h2>
        <p className="mt-8 text-2xl text-gray-700 w-[40%]">{content}</p>
      </div>
      <div className="card-section-container flex justify-center mt-16 mb-32">
        <div className="card-section w-[70%] gap-x-[40px] gap-y-[40px] grid grid-cols-3 auto-cols-fr">
          {cardsData.map((cardData) => {
            return <CardItem key={cardData.heading} colors={colors} cardHeading={cardData.heading} cardContent={cardData.content} image={cardData.image} />;
          })}
        </div>
      </div>
    </>
  );
}

function CardItem({ cardHeading, cardContent, image, colors }) {
  return (
    <div className={`card ${colors.bgColor} rounded-3xl overflow-hidden`}>
      <div className={`card-image-container bg-gradient-to-b ${colors.imageGradientFrom} ${colors.imageGradientTo} relative justify-center items-end`}>
        <img src={image} className="rounded-3xl" />
        <div
          className={`card-image-gradient w-full h-[70px] absolute bg-gradient-to-b ${colors.combineGradientFrom} ${colors.combineGradientTo} bottom-0`}
          // style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0),#f4f8fe)' }}
        ></div>
      </div>
      <div className="card-content-container px-10 mt-8 mb-4 z-20">
        <h3 className="text-2xl font-bold mb-3 z-20 flex items-center">{cardHeading}</h3>
        <p className="mb-3">{cardContent}</p>
        <a className={`flex items-center cursor-pointer group mb-12 ${colors.textColor}`}>
          <span className="text-lg mr-1 hover:mr-3 font-semibold">Learn More</span>
          <MdOutlineArrowForward className="text-xl" />
        </a>
      </div>
    </div>
  );
}

function FooterRightItem({ heading, items }) {
  return (
    <div className="footer-item-wrapper flex flex-col">
      <div className="footer-item-heading text-md font-bold mb-2">{heading}</div>
      {items.map((item) => (
        <div className="footer-item text-gray-800 mb-2">{item}</div>
      ))}
    </div>
  );
}

function Footer({ data }) {
  return (
    <footer className="footer flex justify-center border-t-[1px] py-10">
      <div className="footer-container flex w-[60%] gap-x-10">
        <div className="f1 flex flex-col">
          <div className="f1-heading">
            <a href="/" className="logo flex items-center">
              <img src={logo} alt="logo" className="h-14 w-14" />
              <span className="text-2xl font-bold ml-1">Gleap</span>
            </a>
          </div>
          <div className="f1-content w-[85%] mt-6 mb-6 text-gray-800">
            <p>Bug reporting & customer feedback software for mobile apps and websites.</p>
          </div>
          <div className="f1-contact flex text-center ">
            <div className="contact-wrapper flex justify-center items-center mr-4 bg-slate-100 p-3 rounded-full">
              <RiTwitterXLine />
            </div>
            <div className="contact-wrapper flex justify-center items-center bg-slate-100 p-3 rounded-full">
              <ImLinkedin2 className="text-xl mb-1" />
            </div>
          </div>
        </div>
        <div className="footer-right flex justify-evenly w-full">
          {data.map((data) => (
            <FooterRightItem key={data.heading} heading={data.heading} items={data.items} />
          ))}
        </div>
      </div>
    </footer>
  );
}

function App() {
  const blueCardsData = [
    {
      heading: 'In-app bug reporting',
      content: 'Every bug report is automatically logged with all the technical and visual data you need to troubleshoot faster than competitors.',
      image: blue1Image,
    },
    {
      heading: 'Live chat',
      content: 'Chat with your users personally and answer their support requests in real time. Heard users are happy users.',
      image: blue2Image,
    },
    {
      heading: (
        <>
          AI bot, Kai
          <span className="bg-gradient-to-r from-blue-700 to-sky-400 text-center px-2 py-1 rounded-full ml-2 inline-flex">
            <span className="text-xs text-white">GPT-4</span>
          </span>
        </>
      ),
      content: 'Revolutionize customer service with the power of our AI bot. Kai automatically answers support questions and delivers human-like service 24/7.',
      image: blue3Image,
    },
  ];
  const blueSectionColors = {
    borderColor: 'border-blue-500',
    bgColor: 'bg-blue-50',
    imageGradientFrom: 'from-blue-400',
    imageGradientTo: 'to-slate-300',
    combineGradientFrom: 'from-blue-50/[.0]',
    combineGradientTo: 'to-blue-50',
    textColor: 'text-blue-600',
  };

  const pinkCardsData = [
    {
      heading: 'Product roadmap',
      content: 'Track and manage feature requests. Empower users to vote on suggestions and bring your next best feature to life with valuable user input.',
      image: pink1Image,
    },
    {
      heading: 'Knowledge base',
      content: 'Proactively resolve customer issues before they reach out. Make it easy for users to access support articles with our SEO-optimized help center.',
      image: pink2Image,
    },
    {
      heading: 'Surveys',
      content: 'Get actionable user insights with in-context surveys. Listen to the valuable voice of your customers to elevate your business.',
      image: pink3Image,
    },
  ];
  const pinkSectionColors = {
    borderColor: 'border-pink-500',
    bgColor: 'bg-pink-50',
    imageGradientFrom: 'from-pink-400',
    imageGradientTo: 'to-slate-300',
    combineGradientFrom: 'from-pink-50/[.0]',
    combineGradientTo: 'to-pink-50',
    textColor: 'text-pink-600',
  };

  const orangeCardsData = [
    {
      heading: 'News & Release notes',
      content: 'Keep your users up to date by informing them about new features and changes with release notes directly integrated in your Gleap widget.',
      image: orange1Image,
    },
    {
      heading: 'Custom bots',
      content: 'Our versatile bots seamlessly help you scale your business, empowering you to create a custom chatbot without any coding.',
      image: orange2Image,
    },
    {
      heading: 'Automated messaging',
      content: "Experience exponential growth with Gleap's automation platform. Drive activation, retention, and conversion through targeted in-app chats and emails.",
      image: orange3Image,
    },
  ];
  const orangeSectionColors = {
    borderColor: 'border-orange-500',
    bgColor: 'bg-orange-50',
    imageGradientFrom: 'from-orange-400',
    imageGradientTo: 'to-slate-300',
    combineGradientFrom: 'from-orange-50/[.0]',
    combineGradientTo: 'to-orange-50',
    textColor: 'text-orange-600',
  };

  const footerData = [
    { heading: 'Resources', items: ['Blog', 'Help Center', 'Contact', 'Alternatives'] },
    { heading: 'Developers', items: ['Documentation', 'System Status', 'Roadmap'] },
    { heading: 'Legal', items: ['Terms of Service', 'Privacy Policy', 'DPA', 'Imprint'] },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-slate-50 min-h-screen">
        <Header />
        <Testimonials />
        <Section
          heading="Support"
          subHeading="Boost customer satisfaction while reducing support volume"
          content="Fix bugs faster, maximize customer happiness and minimize support with GPT-powered customer service. Elevate your support experience."
          colors={blueSectionColors}
          cardsData={blueCardsData}
        />

        <Section
          heading="Build"
          subHeading="Build better products with customer feedback"
          content="Listening to the voice of customers distinguishes good from great companies. Run surveys, share your roadmap and empower users with a comprehensive knowledge base."
          colors={pinkSectionColors}
          cardsData={pinkCardsData}
        />

        <Section
          heading="Engage"
          subHeading="Boost customer satisfaction while reducing support volume"
          content="Fix bugs faster, maximize customer happiness and minimize support with GPT-powered customer service. Elevate your support experience."
          colors={orangeSectionColors}
          cardsData={orangeCardsData}
        />
        <div className="section-bottom flex justify-center text-zinc-800 mb-20">
          <div className="section-bottom-container flex flex-col w-[40%] text-center items-center">
            <h2 className="text-5xl font-bold mb-8">
              “It's like embarking on a
              <strong style={{ backgroundImage: 'linear-gradient(79deg,#fbdc15,#ea12ad)', WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}> magical </strong>
              journey”
            </h2>
            <p className="mb-8 text-2xl text-gray-700">
              Listening to the voice of customers distinguishes good from great companies. Run surveys, share your roadmap and empower users with a comprehensive knowledge base.
            </p>
            <button className="flex items-center rounded-full px-6 py-4 bg-blue-600 hover:bg-blue-500 text-slate-50 text-xl">
              <span className="mr-2">Start your 14-day free trial</span>
            </button>
          </div>
        </div>
        <Footer data={footerData} />
        <div className="copyright py-10 flex justify-center items-center flex-col">
          <div className="divider h-[1px] w-[60%] bg-gray-200 mb-8"></div>
          <p className="text-gray-600 text-xs">© 2023 Gleap GmbH. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default App;
