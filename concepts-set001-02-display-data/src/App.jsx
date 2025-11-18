import "./App.css";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageUrl_2: "/yXOvdOSs.jpg",
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: "50%",
          marginRight: "4px",
          border: "2px solid white",
        }}
      />

      <img
        className="avatar"
        src={user.imageUrl_2}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: "50%",
          marginLeft: "4px",
          border: "2px solid white",
        }}
      />
    </>
  );
}

function App() {
  return (
    <>
      <div>
        <h2>Welcome to my app</h2>
        <Profile />
      </div>
    </>
  );
}

export default App;
