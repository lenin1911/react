import Card from "./Card";

function Course() {
  const courses = [
    {
      id: 1,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      name: "React JS",
      instructor: "Lenin",
      duration: "5 Weeks",
      rating:"4/5",
      fee:"$100"
    },
    {
      id: 2,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      name: "Python",
      instructor: "Mugilan",
      duration: "8 Weeks",
      rating:"4.5/5",
      fee:"$90"
    },
    {
      id: 3,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      name: "Java",
      instructor: "Nirajan",
      duration: "10 Weeks",
      rating:"4.3/5", 
      fee:"$85"
    },
    {
      id: 4,
      logo: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
      name: "Data Structures",
      instructor:"Mani",
      duration: "7 Weeks",
      rating: "4.3/5",
      fee: "$90"
    },
    {
      id: 5,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      name: "MongoDB",
      instructor:"Prakash",
      duration: "4 Weeks",
      rating:"4/5",
      fee: "$80"
    },
    {
      id: 6,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      name: "Node JS",
      instructor:"Naveen",
      duration: "6 Weeks",
      rating: "4.2/5",
      fee: "$75"
    },
    {
      id: 7,
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      name: "Express JS",
      instructor:"Santhosh",
      duration: "5 Weeks",
      rating: "4.3/5",
      fee: "$50"
    },
    {
      id: 8,
      logo: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
      name: "Full Stack Development",
      instructor:"Nikash",
      duration: "20 Weeks",
      rating: "4.8/5",
      fee: "$150"
    }
  ];

  return (
    <div className="container">
      {courses.map((course) => (
        <Card
          key={course.id}
          name={course.name}
          duration={course.duration}
          logo={course.logo}
          rating={course.rating}
          fee={course.fee}
          instructor={course.instructor}
        />
      ))}
    </div>
  );
}

export default Course;