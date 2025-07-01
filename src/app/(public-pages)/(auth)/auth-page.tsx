"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { LiaArrowRightSolid } from "react-icons/lia";

type UserType = "regular" | "marketplace";
type AuthMode = "signin" | "signup";

interface FormField {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
}

// Form configurations for different user types and auth modes
const formConfigs: Record<UserType, Record<AuthMode, FormField[]>> = {
  regular: {
    signin: [
      {
        id: "email",
        label: "Email Address",
        type: "email",
        placeholder: "john@example.com",
        required: true,
      },
      {
        id: "password",
        label: "Password",
        type: "password",
        placeholder: "Enter your password",
        required: true,
      },
    ],
    signup: [
      {
        id: "firstName",
        label: "First Name",
        type: "text",
        placeholder: "John",
        required: true,
      },
      {
        id: "lastName",
        label: "Last Name",
        type: "text",
        placeholder: "Doe",
        required: true,
      },
      {
        id: "email",
        label: "Email Address",
        type: "email",
        placeholder: "john@example.com",
        required: true,
      },
      {
        id: "phone",
        label: "Phone Number",
        type: "tel",
        placeholder: "+1 (555) 123-4567",
        required: true,
      },
      {
        id: "password",
        label: "Password",
        type: "password",
        placeholder: "8+ characters",
        required: true,
      },
      {
        id: "confirmPassword",
        label: "Confirm Password",
        type: "password",
        placeholder: "Confirm your password",
        required: true,
      },
    ],
  },
  marketplace: {
    signin: [
      {
        id: "email",
        label: "Email Address",
        type: "email",
        placeholder: "business@example.com",
        required: true,
      },
      {
        id: "password",
        label: "Password",
        type: "password",
        placeholder: "Enter your password",
        required: true,
      },
    ],
    signup: [
      {
        id: "companyName",
        label: "Company or Marketplace Name",
        type: "text",
        placeholder: "Your Business Name",
        required: true,
      },
      {
        id: "representativeName",
        label: "Representative's First and Last Name",
        type: "text",
        placeholder: "John Doe",
        required: true,
      },
      {
        id: "email",
        label: "Email Address",
        type: "email",
        placeholder: "business@example.com",
        required: true,
      },
      {
        id: "phone",
        label: "Phone Number",
        type: "tel",
        placeholder: "+1 (555) 123-4567",
        required: true,
      },
      {
        id: "password",
        label: "Password",
        type: "password",
        placeholder: "8+ characters",
        required: true,
      },
      {
        id: "confirmPassword",
        label: "Confirm Password",
        type: "password",
        placeholder: "Confirm your password",
        required: true,
      },
    ],
  },
};

// Reusable Input Component
function FormInput({
  field,
  showPassword,
  onTogglePassword,
}: {
  field: FormField;
  showPassword?: boolean;
  onTogglePassword?: () => void;
}) {
  const isPasswordField = field.type === "password";

  return (
    <div className="mb-4">
      <label
        htmlFor={field.id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {field.label}
      </label>
      <div className="relative">
        <input
          type={isPasswordField && showPassword ? "text" : field.type}
          id={field.id}
          name={field.id}
          placeholder={field.placeholder}
          required={field.required}
          className={`w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm text-sm placeholder-gray-400 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors
            ${isPasswordField ? "pr-10" : ""}`}
        />
        {isPasswordField && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <span className="sr-only">Toggle password visibility</span>
            {showPassword ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

// Reusable Auth Form Component
function AuthForm({
  userType,
  authMode,
}: {
  userType: UserType;
  authMode: AuthMode;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const fields = formConfigs[userType][authMode];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(`${authMode} form submitted for ${userType} user`);
  };

  return (
    <div className="space-y-4">
      {fields.map((field) => (
        <FormInput
          key={field.id}
          field={field}
          showPassword={
            field.id === "password"
              ? showPassword
              : field.id === "confirmPassword"
              ? showConfirmPassword
              : undefined
          }
          onTogglePassword={
            field.id === "password"
              ? () => setShowPassword(!showPassword)
              : field.id === "confirmPassword"
              ? () => setShowConfirmPassword(!showConfirmPassword)
              : undefined
          }
        />
      ))}

      {authMode === "signup" && (
        <div className="flex items-start space-x-3 py-3">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            required
            className="mt-0.5 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
          />
          <label htmlFor="terms" className="text-sm text-gray-600 leading-5">
            I agree to Clicon{" "}
            <Link
              href="/terms"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Terms of Condition
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </label>
        </div>
      )}

      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors duration-200 flex items-center justify-center space-x-2 mt-6"
      >
        <span>{authMode === "signin" ? "Sign In" : "Sign Up"}</span>
        <LiaArrowRightSolid className="text-lg" />
      </button>
    </div>
  );
}

// Social Auth Buttons Component
function SocialAuthButtons({ authMode }: { authMode: AuthMode }) {
  return (
    <div className="mt-6">
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">or</span>
        </div>
      </div>

      <button
        type="button"
        className="w-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 font-medium py-2.5 px-4 rounded-md transition-colors duration-200 flex items-center justify-center space-x-2 mb-3"
      >
        <FcGoogle className="text-lg" />
        <span>{authMode === "signin" ? "Sign In" : "Sign Up"} with Google</span>
      </button>

      <button
        type="button"
        className="w-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 font-medium py-2.5 px-4 rounded-md transition-colors duration-200 flex items-center justify-center space-x-2"
      >
        <FaApple className="text-lg" />
        <span>{authMode === "signin" ? "Sign In" : "Sign Up"} with Apple</span>
      </button>
    </div>
  );
}

// Main Authentication Component
export default function AuthenticationPage({
  mode = "signup",
}: {
  mode?: AuthMode;
}) {
  const pathname = usePathname();
  const [activeUserType, setActiveUserType] = useState<UserType>("regular");

  // Determine auth mode from pathname if not provided
  const authMode: AuthMode =
    mode || (pathname?.includes("signin") ? "signin" : "signup");

  return (
    <div className="flex-1 md:max-w-md">
      <div className="bg-white shadow-lg rounded-lg p-6 py-8">
        {/* Sign In / Sign Up Tab Navigation */}
        {authMode === "signin" && (
          <nav className="mb-6">
            <div className="flex border-b border-gray-200">
              <Link
                href="/signin"
                className="flex-1 py-3 px-1 text-center text-sm font-medium text-blue-600 border-b-2 border-blue-600"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="flex-1 py-3 px-1 text-center text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        )}

        {/* User Type Tab Navigation (only show for signup) */}
        {authMode === "signup" && (
          <nav className="mb-6">
            <div className="flex border-b border-gray-200">
              <button
                type="button"
                onClick={() => setActiveUserType("regular")}
                className={`flex-1 py-3 px-1 text-center text-sm font-medium border-b-2 transition-colors ${
                  activeUserType === "regular"
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Regular User
              </button>
              <button
                type="button"
                onClick={() => setActiveUserType("marketplace")}
                className={`flex-1 py-3 px-1 text-center text-sm font-medium border-b-2 transition-colors ${
                  activeUserType === "marketplace"
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Marketplace User
              </button>
            </div>
          </nav>
        )}

        {/* Auth Form */}
        <AuthForm userType={activeUserType} authMode={authMode} />

        {/* Social Auth Buttons */}
        <SocialAuthButtons authMode={authMode} />
      </div>
    </div>
  );
}
