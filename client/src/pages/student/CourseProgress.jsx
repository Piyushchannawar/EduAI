import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { CheckCircle2, CirclePlay } from "lucide-react";
import React from "react";

function CourseProgress() {
  const isCompleted = true;
  return (
    <div className="max-w-7xl mx-auto p-4 mt-20">
      {/* display course name */}
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Course Title</h1>
        <Button>Complted</Button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* video scetion */}
        <div className="flex-1 md:w-3/5 h-fit rounded-lg shadow-lg p-4">
          <div>
            {/* Display current Watching lecture Title */}
            {/* <video /> */}
          </div>
          <div className="mt-2 ">
            <h3 className="font-medium text-lg">Lecture 1: Introduction</h3>
          </div>
        </div>
        {/* lecture sidebar */}
        <div className="flex flex-col w-full md:w-2/5 border-t md:border-t-0 md:border-l border-gray-200 md:pl-4 pt-4 md:pt-0">
          <h2 className="font-semibold text-xl mb-4">Course Lecture</h2>
          <div className="flex-1 overflow-y-auto">
            {[1, 2, 3, 4].map((lecture, idx) => (
              <Card
                key={idx}
                className="mb-3 hover:cursor-pointer transition transform"
              >
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center">
                    {
                      isCompleted ? (<CheckCircle2 size={24} className="text-green-500 mr-2" />):
                      (<CirclePlay 
                      size={24} className="text-gray-500 mr-2"
                      />)
                    }
                    <div>
                      <CardTitle className="text-lg font-medium">Introcudection</CardTitle>
                    </div>
                  </div>
                  <Badge variant={'outline'} className="bg-green-200 text-green-600">Completed</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseProgress;
