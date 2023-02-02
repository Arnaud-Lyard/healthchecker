import { useState } from "react";
import {
  useGetProfileQuery,
  useLoginMutation,
  useLogoutMutation,
} from "../graphql/generated/schema";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [login] = useLoginMutation();

  const { data: currentUser, client } = useGetProfileQuery({
    errorPolicy: "ignore",
  });

  const [logout] = useLogoutMutation();

  return (
    <div>
      {currentUser ? (
        <div>
          <div
          // data-testid="logged-in-message"
          >
            Logged in as {currentUser.profile.username}
          </div>

          <button
            onClick={async () => {
              await logout();
              await client.resetStore();
            }}
          >
            Log out
          </button>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            login({ variables: { data: credentials } }).then(client.resetStore);
          }}
        >
          <label htmlFor="email">
            Email
            <input
              // data-testid="login-email"
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
            />
          </label>

          <label htmlFor="password">
            Password
            <input
              // data-testid="login-password"
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
          </label>

          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}
