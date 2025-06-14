import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateCourseMutation } from "@/features/api/courseApi";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function AddCourse() {
  const [courseTitle, setCourseTitle] = useState("");
  const [category, setCategory] = useState("");
  
  const [createCourse, {data, isLoading ,error, isSuccess}] = useCreateCourseMutation();

  const navigate = useNavigate();
    const getSelectedCategory = (value) => {
    setCategory(value);
  }
  


  const createCourseHandler = async () => {
  
    await createCourse({
      courseTitle,
      category,
    });   
  }

  useEffect(()=>{
    if(isSuccess){
      toast.success(data?.message || "Course created successfully!");
      navigate("/admin/course");
    }
    if(error){
      console.error("Error creating course:", error);
    }
  },[isSuccess, error])

  return (
    <div className="flex-1 mx-10">
      <div className="mb-4">
        <h1 className="text-xl font-bold">
          Lets add course, and some basic course details for your new course
        </h1>
        <p className="text-sm">
          You can add course details like title, description, and other
          information.
        </p>
      </div>
      <div className="space-y-4">
        <div>
          <Label>Title</Label>
          <Input
            className="mt-2"
            type="text"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            placeholder="Your Course Name"
          />
        </div>
        <div>
          <Label className="mb-2">Category</Label>
          <Select onValueChange={getSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
             <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                <SelectItem value="Next JS">Next JS</SelectItem>
                <SelectItem value="Data Science">Data Science</SelectItem>
                <SelectItem value="Frontend Development">
                  Frontend Development
                </SelectItem>
                <SelectItem value="Fullstack Development">
                  Fullstack Development
                </SelectItem>
                <SelectItem value="MERN Stack Development">
                  MERN Stack Development
                </SelectItem>
                <SelectItem value="Javascript">Javascript</SelectItem>
                <SelectItem value="Python">Python</SelectItem>
                <SelectItem value="Docker">Docker</SelectItem>
                <SelectItem value="MongoDB">MongoDB</SelectItem>
                <SelectItem value="HTML">HTML</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={()=> navigate("/admin/course")}>Back</Button>
          <Button disabled={isLoading} className="bg-blue-500 text-white hover:bg-blue-600" onClick={createCourseHandler}>
            {
            isLoading ? (<>
            <Loader2 className="animate-spin mr-2 h-4 w-4" />
            Please wait
            </>) : "Create"
}</Button>
        </div>
      </div>
    </div>
  );
}

export default AddCourse;
