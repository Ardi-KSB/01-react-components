import HobbiesItem from "./HobbyItem";
function Hobbies() {
  let listHobbies = [
    {
      name: "Fishing",
      img: "https://th.bing.com/th/id/R.88580235432092719f0aa0fe82b3ecd5?rik=VysCaNM3e3njKA&riu=http%3a%2f%2fwww.fantaseacharters.com%2fmedia%2fattachments%2fview%2fimg%2fdown_rigging_fishing_rod%2fjpg&ehk=7ACdvAM6O8HEhETPZk1jQyK4MhG0qXytAt9YdLyU0RU%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      name: "Running",
      img: "https://th.bing.com/th/id/OIP.r1aTQEVGqiFHbFqvh5H-aQHaHN?pid=ImgDet&rs=1",
    },
    {
      name: "Swimming",
      img: "https://th.bing.com/th/id/OIP.4Aha2vSI3oPu8-fKB2x6EAHaE7?pid=ImgDet&rs=1",
    },
  ];

  return (
    <div id="hobbies">
      <h2>My Hobbies :</h2>
      <div className="hobbies-list">
        {listHobbies.map((item) => (
          <HobbiesItem listHobbies = {item}/>
        ))}
      </div>
    </div>
  );
}

export default Hobbies;
