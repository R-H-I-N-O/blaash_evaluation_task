import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../apiClient";
import { useAppContext } from "../contexts/appContext";
import { Navigate, useLocation } from "react-router-dom";
import { useState } from "react";

const SignInPage = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const { showToast } = useAppContext();
  const queryClient = useQueryClient();
  const location = useLocation();
  const [redirect, setRedirect] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [email, setEmail] = useState("");

  // Mutation for sending OTP
  const sendOtpMutation = useMutation(apiClient.sendOtp, {
    onSuccess: () => {
      showToast({ type: "SUCCESS", message: "OTP sent successfully" });
      setOtpSent(true);
    },
    onError: (error) => {
      showToast({ type: "ERROR", message: error.message });
    },
  });

  // Mutation for signing in with OTP
  const signInMutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      showToast({ type: "SUCCESS", message: "Logged in successfully" });
      await queryClient.invalidateQueries("validateToken");
      setRedirect(true);
    },
    onError: (error) => {
      showToast({ type: "ERROR", message: error.message });
    },
  });

  if (redirect) {
    return <Navigate to={location.state?.from?.pathname || "/dashboard"} replace />;
  }

  const onSubmit = handleSubmit((data) => {
    if (!otpSent) {
      setEmail(data.email);
      sendOtpMutation.mutate({ email: data.email });
    } else {
      signInMutation.mutate({ email, otp: data.otp });
    }
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="flex flex-col gap-5 w-full max-w-sm p-8 bg-white rounded-lg shadow-lg"
        onSubmit={onSubmit}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <label className="relative">
          <span className="text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2">
            <i className="fas fa-envelope"></i>
          </span>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your Email"
            {...register("email", { required: "This field is required" })}
            disabled={otpSent}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </label>

        {otpSent && (
          <label className="relative">
            <span className="text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2">
              <i className="fas fa-key"></i>
            </span>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter OTP"
              {...register("otp", { required: "This field is required" })}
            />
            {errors.otp && (
              <span className="text-red-500 text-sm">{errors.otp.message}</span>
            )}
          </label>
        )}

        <button
          type="submit"
          className={`w-full py-2 rounded-lg font-bold ${
            otpSent
              ? "bg-green-500 hover:opacity-90"
              : "bg-blue-500 hover:opacity-90"
          } text-white`}
          disabled={sendOtpMutation.isLoading || signInMutation.isLoading}
        >
          {sendOtpMutation.isLoading
            ? "Sending OTP..."
            : signInMutation.isLoading
            ? "Logging in..."
            : otpSent
            ? "Verify OTP"
            : "Send OTP"}
        </button>

        {otpSent && (
          <button
            type="button"
            onClick={() => {
              setOtpSent(false);
              reset();
            }}
            className="w-full text-sm text-gray-500 mt-2 hover:underline"
          >
            Resend OTP / Edit Email
          </button>
        )}
      </form>
    </div>
  );
};

export default SignInPage;
