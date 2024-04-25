import ContentCard from "./component/ContentCard/ContentCard";
import { cardData, country, lightColors, timelineData } from "./dummy";
import DateCard from "./component/DateCard/DateCard";
import Banner from "./component/Banner/Banner";
import SideMenu from "./component/SideMenu/SideMenu";
import { Event, Timeline } from "./component/Timeline/Timeline";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
function App() {
  return (
    <div className="page">
      <nav>
        <SideMenu />
      </nav>
      <main>
        <Banner />
        <div className="timedates">
          {lightColors.map((color, index) => (
            <DateCard key={index} index={index} color={color} />
          ))}
        </div>
        <div className="components">
          <div
            style={{
              width: "400px",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <Carousel
              infiniteLoop={true}
              showThumbs={true}
              showStatus={false}
              thumbWidth={100}
              centerMode
              interval={4}
              showArrows={true}
              emulateTouch
              className="carousel"
              // width={"80%"}
            >
              {cardData.map((data, index) => (
                <ContentCard
                  key={index}
                  content={data.content}
                  image={data.imageSrc}
                  title={data.title}
                />
              ))}
            </Carousel>
          </div>
          <div className="timelines">
            <header>
              <h4>Recent release</h4>
              <select name={country[0]} id="country">
                {country.map((c) => (
                  <option value={c}>{c}</option>
                ))}
              </select>
              <hr />
            </header>
            <Timeline>
              {timelineData.map((data, index) => (
                <Event
                  key={index}
                  title={data.title}
                  subtitle={""}
                  description={data.description}
                  interval={data.date}
                />
              ))}
            </Timeline>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
