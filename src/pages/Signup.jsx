import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase/firebase.config";

export default function Signup() {
  const { signup, loginWithGoogle } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [pwError, setPwError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validatePassword = (pwd) => {
    const upper = /[A-Z]/.test(pwd);
    const lower = /[a-z]/.test(pwd);
    if (!upper) return "Password must include at least one uppercase letter.";
    if (!lower) return "Password must include at least one lowercase letter.";
    if (pwd.length < 6) return "Password must be at least 6 characters long.";
    return "";
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setPwError("");
    const errMsg = validatePassword(password);
    if (errMsg) {
      setPwError(errMsg);
      return toast.error(errMsg);
    }

    setLoading(true);
    try {
      await signup(email, password);

      const finalPhoto =
        photo?.trim() !== ""
          ? photo
          : `https://ui-avatars.com/api/?name=${encodeURIComponent(
              name || email
            )}&background=random`;

      await updateProfile(auth.currentUser, {
        displayName: name || email.split("@")[0],
        photoURL: finalPhoto,
      });

      toast.success("Account created successfully!");
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      toast.error(err.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setLoading(true);
    try {
      await loginWithGoogle();
      toast.success("Signed in with Google!");
      navigate("/");
    } catch (err) {
      toast.error(err.message || "Google sign-in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Sign Up
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            placeholder="Photo URL (optional)"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="input input-bordered w-full"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (pwError) setPwError(validatePassword(e.target.value));
              }}
              className={`input input-bordered w-full ${
                pwError ? "input-error" : ""
              }`}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-2 text-sm text-green-700"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {pwError && <p className="text-sm text-red-600">{pwError}</p>}

          <button
            type="submit"
            className="btn btn-success w-full normal-case"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="divider my-4 text-black font-bold">OR</div>

        <button
          onClick={handleGoogleSignup}
          className="btn btn-outline btn-success w-full normal-case"
          disabled={loading}
        >
          {loading ? "Please wait..." : "Continue with Google"}
        </button>

        <p className="text-sm mt-4 text-center text-black">
          Already have an account?{" "}
          <Link to="/login" className="text-green-700 hover:underline font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}