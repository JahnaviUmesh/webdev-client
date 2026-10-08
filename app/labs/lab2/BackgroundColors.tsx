export default function BackgroundColors() {
    return (
      <div id="wd-css-background-colors">
        <h2 className="wd-bg-color-blue wd-fg-color-white">Background color</h2>
        <p className="wd-bg-color-red wd-fg-color-black">
          This background of this paragraph is red but{" "}
          <span className="wd-bg-color-green wd-fg-color-white">
            the background of this text is green and the foreground white
          </span>
        </p>
        <p id="wd-ai-bg" className="wd-bg-color-yellow wd-fg-color-black">
          This sample paragraph has a yellow background and a black foreground
        </p>
        <p className="wd-bg-color-brown wd-fg-color-yellow">
          This background of my personal paragraph is brown with a yellow foreground but{" "}
          <span className="wd-bg-color-pink wd-fg-color-purple">
            the background of this part of the personal paragraph is pink and the foreground is purple
          </span>
        </p>
      </div>
    );
}