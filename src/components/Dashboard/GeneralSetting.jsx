import "./Dashboard.css";

export const GeneralSetting = () => {
  return (
      <>
          <div className="general-setting" >
              <div>
                  <h2>General Setting</h2>
              </div>
              <div>
                  <label for="">Publication Name</label>
                  <input type="text" placeholder="Publication Name" value="" />
              </div>
              <div>
                  <label for="">About</label>
                  <input
                      type="text"
                      placeholder="Tell the world the best thing about you..."
                      value=""
                  />
              </div>
              <div>
                  <label for="">Impressum</label>
                  <br />
                  <small>
                      Markdown supported. If you are not sure about adding an
                      impressum, please leave it blank.
                      <span style={{ color: "blue" }}>More details.</span>
                  </small>
                  <input
                      type="text"
                      placeholder="Enter the impressum here"
                      value=""
                  />
              </div>
              <div>
                  <label for="">Twitter Profile</label>
                  <input
                      type="text"
                      placeholder="http://twitter.com/username"
                      value=""
                  />
              </div>
              <div>
                  <label for="">Youtube Channel</label>
                  <input
                      type="text"
                      placeholder="http://www.youtube.com/channel.channel-name"
                      value=""
                  />
              </div>
              <div>
                  <label for="">Github Profile</label>
                  <input
                      type="text"
                      placeholder="http://github.com/username"
                      value=""
                  />
              </div>
              <div>
                  <label for="">Your Website</label>
                  <input
                      type="text"
                      placeholder="http://something.com"
                      value=""
                  />
              </div>
              <div>
                  <label for="">Hashnode profile</label>
                  <input
                      type="text"
                      placeholder="http://hashnode.com/@username"
                      value=""
                  />
              </div>
              <div>
                  <label for="">Daily.dev profile</label>
                  <input
                      type="text"
                      placeholder="http://app.daily.dev/username"
                      value=""
                  />
              </div>
              <div>
                  <label for="">LinkedIn profile</label>
                  <input
                      type="text"
                      placeholder="http://www.linkedin.com/in/johndoe"
                      value=""
                  />
              </div>
              <div>
                  <button>
                      <svg viewBox="0 0 512 512">
                          <path d="M433.941 129.941l-83.882-83.882A48 48 0 00316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 00-14.059-33.941zM288 64v96H96V64h192zm128 368c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V80c0-8.822 7.178-16 16-16h16v104c0 13.255 10.745 24 24 24h208c13.255 0 24-10.745 24-24V64.491a15.888 15.888 0 017.432 4.195l83.882 83.882A15.895 15.895 0 01416 163.882V432zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 144c-30.879 0-56-25.121-56-56s25.121-56 56-56 56 25.121 56 56-25.121 56-56 56z"></path>
                      </svg>
                      <span>UPDATE</span>
                  </button>
              </div>
          </div>
      </>
  );
};
