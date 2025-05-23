"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global Error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
          <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-8 text-center">
            <h1 className="text-3xl font-bold text-red-600 mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-600 mb-6">
              We encountered an unexpected error. Don&apos;t worry, you can try
              again.
            </p>

            <div className="flex flex-col space-y-4">
              <Button
                onClick={() => reset()}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              >
                Try Again
              </Button>

              <Button
                onClick={() => (window.location.href = "/")}
                variant="outline"
                className="w-full border-gray-300 hover:bg-gray-100"
              >
                Return to Home
              </Button>
            </div>

            {error.digest && (
              <div className="mt-6 text-xs text-gray-500">
                <p>Error ID: {error.digest}</p>
              </div>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
