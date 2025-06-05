"use client";

import { useState } from "react";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";

type AuthPopupType = {
  authOpen: boolean;
  setAuthOpen: (vaue: boolean) => void;
};

export default function AuthPopup({ authOpen, setAuthOpen }: AuthPopupType) {
  //   const baseURL = import.meta.env.VITE_APP_BACKEND_BASE_URL;
  const roles = ["ROLE_AGENT", "ROLE_RESALER", "ROLE_USER"];

  //   const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("login");
  const [user, setUser] = useState({});
  const [resetStep, setResetStep] = useState("email");
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();

  console.log(user);

  //   useEffect(() => {
  //     const token = localStorage.getItem("token");
  //     if (open === true) {
  //       setIsOpen(true);
  //     }
  //     if (token !== null && open === true) {
  //       setIsOpen(false);
  //     }
  //   }, [open]);

  const registerSchema = Yup.object({
    firstName: Yup.string()
      .min(5, "First name must be at least 5 characters")
      .max(15, "First name is too long")
      .required("Required"),
    lastName: Yup.string()
      .min(5, "Last name must be at least 5 characters")
      .max(15, "Last name is too long")
      .required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    role: Yup.mixed().oneOf(roles, "Invalid role"),
  });

  const loginSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });

  const forgotPasswordSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
  });

  const otpSchema = Yup.object({
    otp: Yup.string().length(6, "OTP must be 6 digits").required("Required"),
  });

  // const newPasswordSchema = Yup.object({
  //   password: Yup.string()
  //     .min(6, "Password must be at least 6 characters")
  //     .required("Required"),
  //   confirmPassword: Yup.string()
  //     .oneOf([Yup.ref("password"), ""], "Passwords must match")
  //     .required("Required"),
  // });

  async function handleRegister(values: any) {
    try {
      console.log("Resister User : ", values);
      values.role = "ROLE_USER";
      const response = await axios.post(
        // `${baseURL}/v1/api/auth/register`,
        values
      );
      if (response.status === 201) {
        setUser(response.data.user);
        setActiveTab("login");
        // console.log("User registered Successfully", user);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function handleLogin(values: any) {
    try {
      const response = await axios.post(
        `
        // ${"h11"}/v1/api/auth/login`,
        values
      );
      if (response.status === 200) {
        const token = localStorage.getItem("token");
        if (!token || token !== response.data.jwtToken) {
          localStorage.setItem("token", response.data.jwtToken);
        }
        // setIsOpen(false);
        const data = response.data;
        if (data.role === "ROLE_USER") {
          router.push("/");
        } else {
          router.push("/dashboard/hospital/add");
        }
        // console.log("User Logged in Successfully");
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function handleForgotPassword(values: any) {
    try {
      // console.log("Sending reset email to:", values.email);
      const response = await axios.post(
        `${"hii"}/v1/api/auth/send-otp?email=${values.email}`
      );
      if (response.status === 200) {
        toast.success(`OTP sent successfully`, {
          position: "bottom-right",
          duration: 3000,
        });
        setResetStep("otp");
      } else {
        toast.error(`Couldn't send Otp , Try again`, {
          position: "bottom-right",
          duration: 3000,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function handleOTPVerification(values: any) {
    try {
      // console.log("Verifying OTP:", values.otp);
      const response = await axios.post(
        `${"hii"}/v1/api/auth/verify-otp?email=${values.email}&otp=${
          values.otp
        }&newPass=${values.confirmPassword}`
      );
      if (response.status === 200) {
        // console.log("Resetting password");
        setActiveTab("login");
        setResetStep("email");
        toast.success(`Password Reset successful`, {
          position: "bottom-right",
          duration: 3000,
        });
      } else {
        toast.error(`Couldn't send Otp , Try again`, {
          position: "bottom-right",
          duration: 3000,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  // const togglePopup = (tab: string) => {
  //   setActiveTab(tab);
  //   setIsOpen(!isOpen);
  // };

  return (
    <div className="relative">
      {authOpen && (
        <div className="fixed z-50 inset-0 bg-black/50 flex justify-center items-center">
          <Card className="w-full max-w-md">
            <CardHeader>
              <div className="grid grid-cols-9 items-center">
                <CardTitle className="col-start-1 col-span-1 text-2xl font-bold text-blue-500">
                  Welcome
                </CardTitle>
                <Button
                  variant="default"
                  className="col-start-9 justify-self-end"
                  onClick={() => setAuthOpen(false)}
                >
                  ✕
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {activeTab !== "forgotPassword" && (
                <>
                  <p className="text-center text-gray-600 mb-6">
                    {activeTab === "login"
                      ? "Sign in to your account"
                      : "Sign Up to create a new account"}
                  </p>

                  <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="register">Register</TabsTrigger>
                      <TabsTrigger value="login">Login</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login">
                      <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={loginSchema}
                        onSubmit={(values) => handleLogin(values)}
                      >
                        {({ isSubmitting }) => (
                          <Form className="space-y-2">
                            <div className="space-y-1">
                              <Label htmlFor="email">
                                Email{" "}
                                <span className="text-red-400 text-xl">*</span>
                              </Label>
                              <Field
                                as={Input}
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                              />
                              <ErrorMessage
                                name="email"
                                component="div"
                                className="text-sm text-red-500"
                              />
                            </div>
                            <div className="space-y-0">
                              <Label htmlFor="password">
                                Password{" "}
                                <span className="text-red-400 text-xl">*</span>
                              </Label>
                              <Field
                                as={Input}
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                              />
                              <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="relative bottom-8 left-[90%] items-center text-gray-500"
                              >
                                {showPassword ? <Eye /> : <EyeOff />}
                              </button>
                              <ErrorMessage
                                name="password"
                                component="div"
                                className="text-sm text-red-500"
                              />
                            </div>
                            <div className="text-right">
                              <Button
                                type="button"
                                onClick={() => setActiveTab("forgotPassword")}
                              >
                                Forgot password?
                              </Button>
                            </div>
                            <Button
                              type="submit"
                              className="w-full bg-blue-500 hover:bg-blue-800 justify-center"
                              disabled={isSubmitting}
                            >
                              Sign in
                            </Button>
                          </Form>
                        )}
                      </Formik>
                    </TabsContent>
                    <TabsContent value="register">
                      <Formik
                        initialValues={{
                          firstName: "",
                          lastName: "",
                          email: "",
                          password: "",
                          role: "",
                        }}
                        validationSchema={registerSchema}
                        onSubmit={(values) => {
                          console.log("Register User : ", values);
                          handleRegister(values);
                        }}
                      >
                        {({ isSubmitting }) => (
                          <Form className="space-y-2">
                            <div className="space-y-2">
                              <Label htmlFor="firstName">
                                First Name{" "}
                                <span className="text-red-400 text-xl">*</span>
                              </Label>
                              <Field
                                as={Input}
                                id="firstName"
                                name="firstName"
                                placeholder="Enter your first name"
                              />
                              <ErrorMessage
                                name="firstName"
                                component="div"
                                className="text-sm text-red-500"
                              />
                            </div>
                            <div className="space-y-1">
                              <Label htmlFor="lastName">
                                Last Name{" "}
                                <span className="text-red-400 text-xl">*</span>
                              </Label>
                              <Field
                                as={Input}
                                id="lastName"
                                name="lastName"
                                placeholder="Enter your last name"
                              />
                              <ErrorMessage
                                name="lastName"
                                component="div"
                                className="text-sm text-red-500"
                              />
                            </div>
                            <div className="space-y-1">
                              <Label htmlFor="email">
                                Email{" "}
                                <span className="text-red-400 text-xl">*</span>
                              </Label>
                              <Field
                                as={Input}
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                              />
                              <ErrorMessage
                                name="email"
                                component="div"
                                className="text-sm text-red-500"
                              />
                            </div>

                            <div className="space-y-0">
                              <Label htmlFor="password">
                                Password{" "}
                                <span className="text-red-400 text-xl">*</span>
                              </Label>
                              <Field
                                as={Input}
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                              />
                              <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="relative bottom-7 left-[90%] items-center text-gray-500"
                              >
                                {showPassword ? <Eye /> : <EyeOff />}
                              </button>
                              <ErrorMessage
                                name="password"
                                component="div"
                                className="text-sm text-red-500"
                              />
                            </div>
                            <Button
                              type="submit"
                              className="w-full justify-center bg-blue-500 hover:bg-blue-800"
                              disabled={isSubmitting}
                            >
                              Register
                            </Button>
                          </Form>
                        )}
                      </Formik>
                    </TabsContent>
                  </Tabs>
                </>
              )}

              {activeTab === "forgotPassword" && (
                <div>
                  <Button
                    onClick={() => setActiveTab("login")}
                    className="mb-4 flex items-center text-sm"
                  >
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Back to Login
                  </Button>
                  {resetStep === "email" && (
                    <Formik
                      initialValues={{ email: "" }}
                      validationSchema={forgotPasswordSchema}
                      onSubmit={(values) => handleForgotPassword(values)}
                    >
                      {({ isSubmitting }) => (
                        <Form className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Field
                              as={Input}
                              id="email"
                              name="email"
                              type="email"
                              placeholder="Enter your email"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="text-sm text-red-500"
                            />
                          </div>
                          <Button
                            type="submit"
                            className="w-full justify-center bg-blue-500 hover:bg-blue-800"
                            disabled={isSubmitting}
                          >
                            Send Reset Email
                          </Button>
                        </Form>
                      )}
                    </Formik>
                  )}
                  {resetStep === "otp" && (
                    <Formik
                      initialValues={{
                        otp: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                      }}
                      validationSchema={otpSchema}
                      onSubmit={(values) => handleOTPVerification(values)}
                    >
                      {({ isSubmitting }) => (
                        <Form className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Field
                              as={Input}
                              id="email"
                              name="email"
                              type="email"
                              placeholder="Enter your email"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="text-sm text-red-500"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="otp">Enter OTP</Label>
                            <InputOTP maxLength={6}>
                              <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                              </InputOTPGroup>
                            </InputOTP>
                            <ErrorMessage
                              name="otp"
                              component="div"
                              className="text-sm text-red-500"
                            />
                          </div>
                          <div className="space-y-0">
                            <Label htmlFor="password">New Password</Label>
                            <Field
                              as={Input}
                              id="password"
                              name="password"
                              type={showNewPassword ? "text" : "password"}
                              placeholder="Enter new password"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setShowNewPassword(!showNewPassword)
                              }
                              className="relative bottom-7 left-[90%] items-center text-gray-500"
                            >
                              {showNewPassword ? <Eye /> : <EyeOff />}
                            </button>
                            <ErrorMessage
                              name="password"
                              component="div"
                              className="text-sm text-red-500"
                            />
                          </div>
                          <div className="space-y-0">
                            <Label htmlFor="confirmPassword">
                              Confirm New Password
                            </Label>
                            <Field
                              as={Input}
                              id="confirmPassword"
                              name="confirmPassword"
                              type={showConfirmPassword ? "text" : "password"}
                              placeholder="Confirm new password"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                              className="relative bottom-7 left-[90%] items-center text-gray-500"
                            >
                              {showConfirmPassword ? <Eye /> : <EyeOff />}
                            </button>
                            <ErrorMessage
                              name="confirmPassword"
                              component="div"
                              className="text-sm text-red-500"
                            />
                          </div>
                          <Button
                            type="submit"
                            className="w-full justify-center bg-blue-500 hover:bg-blue-800"
                            disabled={isSubmitting}
                          >
                            Verify OTP
                          </Button>
                        </Form>
                      )}
                    </Formik>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
