import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton, CircularProgress } from "@mui/material";
import axios from "axios";

export default function Authentication() {
  const [name, setName] = useState("");
  const [formState, setFormState] = useState(0); // 0 for login, 1 for register
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [formState]);

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let result;
      if (formState === 0) {
        result = await axios.post("http://localhost:3000/api/users/login", { name });
      } else {
        result = await axios.post("http://localhost:3000/api/users/signup", { name });
      }
      localStorage.setItem("internName", result.data.name);
      navigate("/dashboard");
    } catch (err) {
      console.error("Auth failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 p-6"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <IconButton
        onClick={() => navigate("/")}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          color: "white",
        }}
        aria-label="Go Back"
      >
        <ArrowBackIcon />
      </IconButton>

      <Card className="w-full max-w-md md:max-w-lg p-8 shadow-2xl rounded-2xl bg-white/90 backdrop-blur-sm">
        <CardHeader className="text-center mb-4">
          <CardTitle className="text-4xl font-extrabold text-indigo-700">
            Intern Dashboard
          </CardTitle>
          <p className="text-sm text-gray-500 mt-2">
            Track your progress and rewards
          </p>
        </CardHeader>

        <div className="flex justify-center gap-4 mb-6">
          <Button
            variant={formState === 0 ? "default" : "ghost"}
            onClick={() => setFormState(0)}
            className={`w-32 font-semibold text-md transition-all ${
              formState === 0 ? "shadow-md scale-105" : ""
            }`}
            disabled={loading}
          >
            Sign In
          </Button>
          <Button
            variant={formState === 1 ? "default" : "ghost"}
            onClick={() => setFormState(1)}
            className={`w-32 font-semibold text-md transition-all ${
              formState === 1 ? "shadow-md scale-105" : ""
            }`}
            disabled={loading}
          >
            Sign Up
          </Button>
        </div>

        <CardContent>
          <form className="space-y-5" onSubmit={handleAuth}>
            <div>
              <Label htmlFor="name" className="font-medium text-gray-700">
                {formState === 0 ? "Username" : "Full Name"}
              </Label>
              <Input
                id="name"
                name="name"
                placeholder={formState === 0 ? "Enter Username" : "Enter Full Name"}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                ref={inputRef}
                disabled={loading}
                className="mt-1 focus:ring-2 focus:ring-indigo-500 transition-all"
              />
            </div>

            <Button
              type="submit"
              className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-md font-semibold shadow-lg"
              disabled={loading}
              aria-busy={loading}
            >
              {loading ? (
                <>
                  <CircularProgress size={20} color="inherit" />
                  {formState === 0 ? "Signing In..." : "Signing Up..."}
                </>
              ) : (
                formState === 0 ? "Sign In" : "Create Account"
              )}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="text-center text-xs text-gray-500 pt-4">
          &copy; {new Date().getFullYear()} InternHub. All rights reserved.
        </CardFooter>
      </Card>
    </div>
  );
}
