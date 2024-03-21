import { useEffect, useState } from "react";
import { activeSkillProgress, fatchData, fetchDynamicData } from "../utilits";

const Skills = ({ dark }) => {
  const [dynamicData, setDynamicData] = useState([]);

  useEffect(async () => {
    const responseData = await fetchDynamicData(
      `https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae`
    );
    setDynamicData(responseData?.user?.skills);
    // console.log(responseData?.user?.skills);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);
  // {
  //   dynamicData?.map((skill, i) => console.log(skill?.name));
  // }
  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_skills">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div
                className="dizme_tm_main_title wow fadeInUp"
                data-wow-duration="1s"
                data-align="left"
              >
                <span>Design is Life</span>
                <h3>I Develop Skills Regularly to Keep Me Update</h3>
                <p>
                  Most common methods for designing websites that work well on
                  desktop is responsive and adaptive design
                </p>
              </div>
              <div
                className="dodo_progress wow fadeInUp"
                data-wow-duration="1s"
              >
                {dynamicData &&
                  dynamicData.map((skill, i) => (
                    <div
                      className="progress_inner skillsInner___"
                      data-value={skill?.percentage}
                      data-color="rgb(28, 190, 89)"
                      key={i}
                    >
                      <span>
                        <span className="label">{skill?.name}</span>
                        <span className="number">{skill?.percentage}%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="right">
              <img src={`img/skills/${dark ? 2 : 1}.jpg`} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
