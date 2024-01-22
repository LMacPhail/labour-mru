import { useState, useEffect, FormEvent } from "react";
import { supabase } from "../../supabaseClient";
import { TextInput } from "../atoms/TextInput";

type FormData = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  organisation: string | null;
  purpose: string | null;
};

const initForm = {
  email: null,
  firstName: null,
  lastName: null,
  organisation: null,
  purpose: null,
};

export function Account({ session }: { session: any }) {
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState<FormData>(initForm);

  useEffect(() => {
    let ignore = false;
    async function getProfile() {
      setLoading(true);
      const { user } = session;

      const { data, error } = await supabase
        .from("profiles")
        .select(`email, first_name, last_name, organisation, purpose`)
        .eq("id", user.id)
        .single();

      if (!ignore) {
        if (error) {
          console.warn(error);
        } else if (data) {
          const { first_name, last_name } = data;
          setForm({ ...data, firstName: first_name, lastName: last_name });
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
    const { firstName, lastName, organisation, purpose } = form;

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
    <form
      onSubmit={updateProfile}
      className="form-widget flex flex-col max-w-72 gap-2"
    >
      <TextInput label="Email" id="email" value={session.user.email} disabled />

      <TextInput
        label="First Name"
        id="firstName"
        value={form.firstName || ""}
        required
        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
      />

      <TextInput
        label="Last Name"
        id="lastName"
        required
        value={form.lastName || ""}
        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
      />

      <TextInput
        label="Organisation"
        id="organisation"
        value={form.organisation || ""}
        onChange={(e) => setForm({ ...form, organisation: e.target.value })}
      />

      <TextInput
        label="Purpose"
        id="purpose"
        value={form.purpose || ""}
        onChange={(e) => setForm({ ...form, purpose: e.target.value })}
      />

      <div>
        <button
          className="btn btn-sm primary mt-8"
          type="submit"
          disabled={loading}
        >
          {loading ? "Loading ..." : "Update"}
        </button>
      </div>
    </form>
  );
}
