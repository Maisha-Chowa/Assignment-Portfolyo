import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { fatchData, fetchDynamicData } from "../utilits";
// await fatchData("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"

const Home = ({ dark }) => {
  const [data, setData] = useState({});
  const [dynamicData, setDynamicData] = useState({});

  useEffect(async () => {
    setData(await fatchData("/static/info.json"));
  }, []);

  useEffect(async () => {
    const responseData = await fetchDynamicData(
      `https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae`
    );
    // console.log(responseData?.user);
    // console.log(responseData?.user?.about);
    setDynamicData(responseData?.user);
    // console.log(dynamicData);
    // console.log(`${dynamicData?.skills}`);

    // dynamicData?.skills?.slice(0, 2).map((skill, i) => {
    //   console.log(` ${skill?.name}`);
    //   console.log(`${skill?.image?.url}`);
    // });

    // console.log(dynamicData?.social_handles);
    // dynamicData?.social_handles.map((social, i) =>
    //   console.log(`${social?.image?.url}`)
  }, []);

  return (
    <div className="dizme_tm_section" id="home">
      <div className="dizme_tm_hero">
        <div
          className="background"
          data-img-url={`img/slider/${dark ? 2 : 1}.jpg`}
          // style={{ backgroundImage: `img/slider/${dark ? 2 : 1}.jpg` }}
        />
        <div className="container">
          <div className="content">
            <div className="details">
              <div className="hello">
                <h3 className="orangeText">{`Hello, I'm`}</h3>
              </div>
              <div className="name">
                <h3>{dynamicData?.about?.name}</h3>
              </div>
              <div className="job">
                <p>
                  A{" "}
                  <span className="greenText">
                    {dynamicData && dynamicData?.about?.title}
                  </span>{" "}
                  From{" "}
                  <span className="purpleText">
                    {dynamicData?.about?.address}
                  </span>
                </p>
              </div>
              <div className="text">
                <p>{dynamicData?.about?.subTitle}</p>
              </div>
              <div className="button">
                <div className="dizme_tm_button">
                  <a className="anchor" href="#about">
                    <span>About Me</span>
                  </a>
                </div>
                <div className="social">
                  {dynamicData &&
                    dynamicData?.social_handles &&
                    dynamicData?.social_handles?.map((social, i) => (
                      <li key={i}>
                        <a href="#">
                          <img src={social?.image?.url} width="20px" />
                        </a>
                      </li>
                    ))}
                </div>
              </div>
            </div>
            <div className="avatar">
              <div className="image ">
                <img src={dynamicData?.about?.avatar?.url} alt="image" />

                {dynamicData &&
                  dynamicData?.skills &&
                  dynamicData?.skills.slice(0, 3)?.map(
                    (skill, i) =>
                      skill?.image?.url && (
                        // eslint-disable-next-line react/jsx-key
                        <img
                          className="skills anim_moveBottom"
                          src={skill?.image?.url}
                        />
                      )
                  )}
              </div>
            </div>
          </div>
        </div>

        <div className="dizme_tm_down">
          <a className="anchor" href="#process">
            <svg
              width="26px"
              height="100%"
              viewBox="0 0 247 390"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: "1.5",
              }}
            >
              <path
                id="wheel"
                d="M123.359,79.775l0,72.843"
                style={{
                  fill: "none",
                  stroke: dark ? "#fff" : "#000",
                  strokeWidth: 20,
                }}
              />
              <path
                id="mouse"
                d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                style={{
                  fill: "none",
                  stroke: dark ? "#fff" : "#000",
                  strokeWidth: 20,
                }}
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
