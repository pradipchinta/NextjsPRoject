import Image from "next/image";
function Home() {
  return (
    <>
      <h1>this is index page </h1>
      <Image
        src="https://pbs.twimg.com/profile_images/1424343459150790660/MAGT20PI_400x400.jpg"
        alt="this is mb image"
        height="300"
        width="300"
      />
    </>
  );
}

export default Home;
