"use client";

import { useCompletion } from "ai/react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function PRManager() {
  const {
    completion,
    input,
    handleInputChange,
    handleSubmit
  } = useCompletion();

  return (
    <div className="space-y-8 bg-gradient-to-r from-yellow-500 via-red-500 to-purple-500 p-5 rounded-md text-white">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">
          Your Dream Destination
        </h2>
        <p className="text-white">
          Enter the location you want to visit.
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <form onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label
                className="text-white"
                htmlFor="location"
              >
                Location
              </Label>
              <Input
                className="bg-white text-black"
                id="location"
                placeholder="Enter the location"
                value={input}
                onChange={handleInputChange}
              />
            </div>
          </form>
        </div>
        {completion ? <div>{completion}</div> : null}
      </div>
    </div>
  );
}
