const courses = [
    {
        id: "fLroW6",
        category: "Islamic Studies", // Change category
        
        course_name: "Islamic Art and Architecture",
        description: "Explore the rich heritage of Islamic art and architecture across different cultures and time periods.",
        rating_count: 1844,
        rating_star: 4.3,
        students: 7330,
        creator: "Islamic Art Historian",
        updated_date: "5/2022",
        lang: "English",
        actual_price: 84.99,
        discounted_price: 9.99,
        what_you_will_learn: [
            "Discover Islamic Art Styles",
            "Explore Islamic Architecture",
            "Understand Calligraphy and Manuscripts"
        ],
        content: [
            "Introduction to Islamic Art",
            "Islamic Calligraphy",
            "Islamic Manuscripts",
            "Islamic Architecture",
            "Islamic Art Across Cultures",
            "Islamic Art Conservation"
        ]
    },
    {
        id: "fTroW6",
        category: "Islamic Sstudies", // Change category        
        course_name: "Islamic Art and Architecture",
        description: "Explore the rich heritage of Islamic art and architecture across different cultures and time periods.",
        rating_count: 1844,
        rating_star: 4.3,
        students: 7330,
        creator: "Islamic Art Historian",
        updated_date: "5/2022",
        lang: "English",
        actual_price: 84.99,
        discounted_price: 9.99,
        what_you_will_learn: [
            "Discover Islamic Art Styles",
            "Explore Islamic Architecture",
            "Understand Calligraphy and Manuscripts"
        ],
        content: [
            "Introduction to Islamic Art",
            "Islamic Calligraphy",
            "Islamic Manuscripts",
            "Islamic Architecture",
            "Islamic Art Across Cultures",
            "Islamic Art Conservation"
        ]
    },
    {
        id: "fLRroW6",
        category: "Islamic Studies", // Change category        
        course_name: "Islamic Art and Architecture",
        description: "Explore the rich heritage of Islamic art and architecture across different cultures and time periods.",
        rating_count: 1844,
        rating_star: 4.3,
        students: 7330,
        creator: "Islamic Art Historian",
        updated_date: "5/2022",
        lang: "English",
        actual_price: 84.99,
        discounted_price: 9.99,
        what_you_will_learn: [
            "Discover Islamic Art Styles",
            "Explore Islamic Architecture",
            "Understand Calligraphy and Manuscripts"
        ],
        content: [
            "Introduction to Islamic Art",
            "Islamic Calligraphy",
            "Islamic Manuscripts",
            "Islamic Architecture",
            "Islamic Art Across Cultures",
            "Islamic Art Conservation"
        ]
    },
  // Add more courses here
];

// Use the function to update the 'image' field for each course
(async () => {
  for (const course of courses) {
    course.image = await getImageUrlForCourse(course.course_name);
  }
})();

export default courses;

export const PYTHON = "Islamic Studies"; // Change category names as needed
export const WEB_DEVELOPMENT = "Islamic History";
export const DATA_SCIENCE = "Quranic Studies";
export const AWS = "Islamic Law";
export const DESIGN = "Islamic Art";
export const MARKETING = "Islamic Finance";