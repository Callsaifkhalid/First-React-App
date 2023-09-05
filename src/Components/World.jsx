import React from "react";
import worldimg from "../Assests/world.svg";
export default function World() {
  return (
    <div>
      <div className="main10">
        <div className="w-img">
          <img src={worldimg} alt="" />
        </div>
        <div className="access">
          <h1 className="h2-a colo">Accessibility</h1>
          <p className="lor">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <ul className="doot">
            <li className="laf">
              Lorem Ipsum is simply dummy text of the printing typesetting.
            </li>
            <li className="laf">
              Lorem Ipsum is simply dummy text of the printing industry
            </li>
            <li className="laf">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
