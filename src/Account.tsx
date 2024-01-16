import {
  useState,
  useEffect,
  SetStateAction,
  FormEventHandler,
  FormEvent,
} from "react";
import { supabase } from "./supabaseClient";

export default function Account({ session }: { session: any }) {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [organisation, setOrganisation] = useState<string | null>(null);
  const [purpose, setPurpose] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;
    async function getProfile() {
      setLoading(true);
      const { user } = session;

      const { data, error } = await supabase
        .from("profiles")
        .select(`email`)
        .eq("id", user.id)
        .single();

      if (!ignore) {
        if (error) {
          console.warn(error);
        } else if (data) {
          setEmail(data.email);
        }
      }

      setLoading(false);
    }

    getProfile();

    return () => {
      ignore = true;
    };
  }, [session]);

  async function updateProfile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    const { user } = session;

    const updates = {
      id: user.id,
      email: user.email,
      first_name: firstName,
      last_name: lastName,
      organisation,
      purpose,
      updated_at: new Date(),
    };

    const { error } = await supabase.from("profiles").upsert(updates);

    if (error) {
      alert(error.message);
    }
    setLoading(false);
  }

  return (
    <form onSubmit={updateProfile} className="form-widget">
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" value={session.user.email} disabled />
      </div>
{/*      <div>
        <label htmlFor="username">Username</label>
        <input
          id="name"
          type="text"
          required
          value={username || ""}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>*/}
      <div>
        <label htmlFor="firstName">First name</label>
        <input
          id="firstName"
          type="text"
          required
          value={firstName || ""}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last name</label>
        <input
          id="lastName"
          type="text"
          required
          value={lastName || ""}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="Organisation">Organisation</label>
        <input
          id="organisation"
          type="text"
          value={organisation || ""}
          onChange={(e) => setOrganisation(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="Purpose">What are you using Future Labour MPs for?</label>
        <input
          id="purpose"
          type="text"
          required
          value={purpose || ""}
          onChange={(e) => setPurpose(e.target.value)}
        />
      </div>

      <div>
        <button
          className="button block primary"
          type="submit"
          disabled={loading}
        >
          {loading ? "Loading ..." : "Update"}
        </button>
      </div>

      <div>
        <button
          className="button block"
          type="button"
          onClick={() => supabase.auth.signOut()}
        >
          Sign Out
        </button>
      </div>
    </form>
  );
}
