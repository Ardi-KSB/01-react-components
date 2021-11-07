function SkillItem(props) {
    let { skills } = props;
  
    return (
      <div className = "SkillItem">
        <div className="skills-item" onClick={() => alert(skills.name)}> {/* <button onClick = {() => hobbies.name()}></button> */}
          
          <h2>{skills.name}</h2>
          <img src={skills.img} alt="" width="300px" />
        </div>
      </div>
    );
  }
  export default SkillItem;