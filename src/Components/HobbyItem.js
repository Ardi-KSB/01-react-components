function HobbiesItem(props) {
  let {listHobbies} = props;


  return (
    <div className="hobby-item" onClick={() => alert(listHobbies.name)}>
           <img src={listHobbies.img} alt="" width="300px" />
      <h2>{listHobbies.name}</h2>
       </div>
  );
}
export default HobbiesItem;
