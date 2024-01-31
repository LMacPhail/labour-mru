import { useState } from "react";
import { supabase } from "../../supabaseClient";
import { MODAL_DISMISSED_KEY } from "../../state/store";
import Link from "../atoms/Link";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    localStorage.setItem(MODAL_DISMISSED_KEY, "false");

    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) {
      alert(error.message);
    } else {
      alert("Check your email for the login link!");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-8 my-8">
      <div>
        <p className="description">
          We're trying to understand how people are using Future Labour MPs so
          we can add more data and improve it.
        </p>
        <p>Could you help us by signing up?</p>
      </div>
      <form className="form-widget" onSubmit={handleLogin}>
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4">
          <label htmlFor="sign_up_input" className="sr-only">
            Sign up email here
          </label>
          <input
            className="input input-bordered input-sm w-4/5 mx-auto"
            type="email"
            placeholder="Your email"
            id="sign_up_input"
            value={email}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className={"btn btn-accent btn-sm block w-24"}
            disabled={loading}
          >
            {loading ? <span>Loading</span> : <span>Sign Up</span>}
          </button>
        </div>
        <p className="text-xs italic mt-2">
          You can see how we handle user data in{" "}
          <Link link="https://www.mvmtresearch.org/privacy-policy">
            our privacy policy.
          </Link>
        </p>
      </form>
    </div>
  );
}
