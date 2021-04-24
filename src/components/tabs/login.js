import VisuallyHidden from "@reach/visually-hidden";
import React from "react";
import { FaSignInAlt } from "react-icons/fa";

function LoginForm() {
  return (
    <form>
      <VisuallyHidden>
        <label htmlFor="login:email">Email:</label>
      </VisuallyHidden>
      <input
        type="text"
        id="login:email"
        className="inputField"
        placeholder="email@examle.com"
      />
      <VisuallyHidden>
        <label htmlFor="login:password">Email:</label>
      </VisuallyHidden>
      <input
        type="password"
        id="login:password"
        className="inputField"
        placeholder="Password"
      />

      <div>
        <label>
          <input
            className="passwordCheckbox"
            type="checkbox"
            defaultChecked={false}
          />
          show password
        </label>
      </div>
      <button>
        <FaSignInAlt />
        <span>login</span>
      </button>
    </form>
  );
}

export default LoginForm;
