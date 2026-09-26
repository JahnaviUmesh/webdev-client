export default function YourForm() {
  return (
    <form id="wd-your-form">
      <h5>Your Form</h5>
      <label htmlFor="wd-your-first-name">First name:</label>
      <input
        type="text"
        defaultValue="Jahnavi"
        title="The first name"
        id="wd-your-first-name"
      />
      <br />
      <label htmlFor="wd-your-last-name">Last name:</label>
      <input
        type="text"
        defaultValue="Umesh"
        title="The last name"
        id="wd-your-last-name"
      />
      <br />
      <label htmlFor="wd-your-password">Password:</label>
      <input
        type="password"
        placeholder="002354735"
        id="wd-your-password"
      />
      <br />
      <label htmlFor="wd-your-bio">Bio:</label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={30}
        rows={6}
        defaultValue="I'm a CS grad student learning full-stack web development so I can build interfaces"
      />
      <br />
      <label>Class standing:</label>
      <br />
      <input type="radio" name="radio-your-standing" id="wd-your-radio-freshman" />
      <label htmlFor="wd-your-radio-freshman">Freshman</label>
      <br />
      <input type="radio" name="radio-your-standing" id="wd-your-radio-sophomore" />
      <label htmlFor="wd-your-radio-sophomore">Sophomore</label>
      <br />
      <input type="radio" name="radio-your-standing" id="wd-your-radio-junior" />
      <label htmlFor="wd-your-radio-junior">Junior</label>
      <br />
      <input type="radio" name="radio-your-standing" id="wd-your-radio-senior" />
      <label htmlFor="wd-your-radio-senior">Senior</label>
      <br />
      <input type="radio" name="radio-your-standing" id="wd-your-radio-graduate" />
      <label htmlFor="wd-your-radio-graduate">Graduate</label>
      <br />
      <label>Enrollment:</label>
      <br />
      <input type="radio" name="radio-your-enrollment" id="wd-your-radio-fulltime" />
      <label htmlFor="wd-your-radio-fulltime">Full-time</label>
      <br />
      <input type="radio" name="radio-your-enrollment" id="wd-your-radio-parttime" />
      <label htmlFor="wd-your-radio-parttime">Part-time</label>
      <br />
      <label>Interests:</label>
      <br />
      <input type="checkbox" name="check-your-interests" id="wd-your-chkbox-frontend" />
      <label htmlFor="wd-your-chkbox-frontend">Front-end</label>
      <br />
      <input type="checkbox" name="check-your-interests" id="wd-your-chkbox-backend" />
      <label htmlFor="wd-your-chkbox-backend">Back-end</label>
      <br />
      <input type="checkbox" name="check-your-interests" id="wd-your-chkbox-databases" />
      <label htmlFor="wd-your-chkbox-databases">Databases</label>
      <br />
      <input type="checkbox" name="check-your-interests" id="wd-your-chkbox-design" />
      <label htmlFor="wd-your-chkbox-design">UI Design</label>
      <br />
      <label htmlFor="wd-your-select-major">Major:</label>
      <br />
      <select id="wd-your-select-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="AI">Artificial Intelligence</option>
        <option value="CY">Cybersecurity</option>
      </select>
      <br />
      <label htmlFor="wd-your-select-topics">Topics to learn:</label>
      <br />
      <select multiple id="wd-your-select-topics" defaultValue={["HTML", "REACT"]}>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JS">JavaScript</option>
        <option value="REACT">React</option>
        <option value="NODE">Node.js</option>
      </select>
      <br />
      <label htmlFor="wd-your-email">Email:</label>
      <input
        type="email"
        placeholder="umesh.j@northeastern.edu"
        id="wd-your-email"
      />
      <br />
      <label htmlFor="wd-your-grad-year">Graduation year:</label>
      <input
        type="number"
        defaultValue="2026"
        min={2024}
        max={2035}
        id="wd-your-grad-year"
      />
      <br />
      <label htmlFor="wd-your-start-date">Start date:</label>
      <input
        type="date"
        defaultValue="2024-09-04"
        id="wd-your-start-date"
      />
      <br />
      <label htmlFor="wd-your-rating">Rate this course (0-10):</label>
      <input
        type="range"
        defaultValue="5"
        min="0"
        max="10"
        id="wd-your-rating"
      />
      <br />
      <button id="wd-your-button-save" type="submit">
        Save
      </button>
      <button id="wd-your-button-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
