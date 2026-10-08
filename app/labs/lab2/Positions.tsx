export default function Positions() {
    return (
      <div id="wd-css-positions">
        <h2>Positions</h2>
        <div id="wd-css-position-relative">
          <h2>Relative</h2>
          <div className="wd-bg-color-gray">
            <div className="wd-bg-color-yellow wd-dimension-portrait">
              <div className="wd-pos-relative-nudge-down-right">Portrait</div>
            </div>
            <div className="wd-pos-relative-nudge-up-right wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">
              Landscape
            </div>
            <div className="wd-bg-color-red wd-dimension-square">Square</div>
          <div className="wd-pos-relative-my-nudge wd-bg-color-green wd-fg-color-white wd-dimension-landscape">
              My Personal box that is nudged down and right
          </div>
            <div id="wd-ai-relative" className="wd-ai-pos-relative-nudge wd-bg-color-pink wd-dimension-landscape">
              Nudged down and left
            </div>
          </div>
        </div>
        <div id="wd-css-position-absolute">
            <h2>Absolute position</h2>
            <div className="wd-pos-relative" style={{ height: 150 }}>
                <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">
                    Portrait
                </div>
                <div className="wd-pos-absolute-50-50 wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">
                    Landscape
                </div>
                <div className="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">
                    Square
                </div>
                <div id="wd-ai-absolute" className="wd-ai-pos-absolute-br wd-bg-color-pink wd-dimension-landscape">
                    Bottom right
                </div>
                <div className="wd-pos-absolute-br wd-bg-color-green wd-fg-color-white wd-dimension-portrait">
                    My personal box: top right
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br />
        </div>

        <div id="wd-css-position-fixed">
            <h2>Fixed position</h2>
            Checkout the blue square that says &quot;Fixed position&quot; stuck all the way
            on the right and half way down the page. It doesn&apos;t scroll with the
            rest of the page. Its position is &quot;Fixed&quot;.
            <div className="wd-pos-fixed wd-dimension-square wd-bg-color-blue wd-fg-color-white">
                Fixed position
            </div>
            <div id="wd-ai-fixed" className="wd-ai-pos-fixed">
                AI fixed
            </div>
            <h2>My personal fixed position</h2>
            My personal yellow box at the top right in a fixed position
            <div className="wd-pos-fixed-badge wd-dimension-landscape wd-bg-color-yellow wd-fg-color-brown">
                My personal box fixed
            </div>
        </div>

      </div>
    );
}