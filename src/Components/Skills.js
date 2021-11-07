import SkillItem from "./SkillItem";
function Skills() {
  let skills = [
    {
      name: "Coding",
      img: "https://th.bing.com/th/id/OIP.itMGCjNIIpQCN8lUKdEt-gHaE8?pid=ImgDet&rs=1",
    },
    {
      name: "Graphic Design",
      img: "https://th.bing.com/th/id/OIP.oUGCTBA0R-ulIETSJeKMXwHaFW?w=229&h=180&c=7&r=0&o=5&pid=1.7",
    },
  ];
  return (
    <div id="skills">
      <h2>My Skills</h2>
      <div className="Skills-list">
        {skills.map((item) => (
          <SkillItem skills={item} />
        ))}
      </div>
    </div>
  );
}
export default Skills;
