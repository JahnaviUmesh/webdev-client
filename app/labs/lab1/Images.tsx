export default function Images() {
    return (
      <div id="wd-images">
        <h4>Image tag</h4>
        Loading an image from the internet:
        <br />
        <img
          id="wd-starship"
          width="400px"
          alt="Starship"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
        />
        <br />
        Loading a local image:
        <br />
        <img
          id="wd-teslabot"
          src="/images/teslabot.jpeg"
          height="200px"
          alt="Tesla Bot (Optimus) humanoid robot"
        />
        <br />
        Loading another image from the internet:
        <br />
        <img
          id="wd-ai-image"
          width="200px"
          alt="Earth seen from Apollo 17"
          src="https://images-assets.nasa.gov/image/as17-148-22727/as17-148-22727~medium.jpg"
        />
         <br />
         Loading my image:
         <br />
         <img
          id="wd-your-image"
          src="/images/tiramisu.jpeg"
          width="250px"
          height="350px"
          alt="A delicious tiramisu!"
        />
      </div>
    );
  }