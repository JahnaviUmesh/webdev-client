export default function Dimensions() {
    return (
      <div id="wd-css-dimensions">
        <h2>Dimension</h2>
        <div>
          <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
          <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
            Landscape
          </div>
          <div className="wd-dimension-square wd-bg-color-red">Square</div>
          <div id="wd-ai-dimension" className="wd-ai-dimension">
            This box is declared as 120px wide and 60px tall, so this long sentence spills past its yellow background instead of stretching the box.
          </div>
          <div className="wd-dimension-wide wd-bg-color-green wd-fg-color-yellow">
            My personal box that has a fixed width and height so even this long sentence does not make the box grow but the text just overflows over it's actual size.
          </div>
        </div>
      </div>
    );
  }