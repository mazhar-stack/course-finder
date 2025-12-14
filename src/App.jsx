import { useState } from "react";
import courses from "./data/courses";
import CourseList from "./components/CourseList";
import SearchBar from "./components/SearchBar";
import Quote from "./components/Quote";

function App() {
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(search.toLowerCase()) ||
    course.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Course Finder</h1>
      <Quote />
      <SearchBar search={search} setSearch={setSearch} />
      <CourseList courses={filteredCourses} />
    </div>
  );
}

export default App;

