import { course_images } from "./images";

 //  category names 
// Updated category names
export const PYTHON = "Multi Programming Language Studies";
export const WEB_DEVELOPMENT = "Multi Programming Language History";
export const DATA_SCIENCE = "Multi Programming Language Data Science";
export const AWS = "Multi Programming Language AWS";
export const DESIGN = "Multi Programming Language Design";
export const MARKETING = "Multi Programming Language Marketing";

const courses = [
    {
        id: "xMHCZl",
        category: "Multi Programming Language Studies", // Updated category
        image: course_images.python_5,
        course_name: "Multi Programming Language Studies: The Comprehensive Multi Programming Language Course",
        description: "Learn A-Z everything about Multi Programming Language Studies, from the basics, to advanced topics in Quran, Hadith, and more!",
        rating_count: 3059,
        rating_star: 4.4,
        students: 18430,
        creator: "Multi Programming Language Scholar Institute",
        updated_date: "9/2015",
        lang: "English",
        actual_price: 84.99,
        discounted_price: 9.99,
        what_you_will_learn: [
            "Study Multi Programming Language Theology",
            "Become Proficient in Quranic Recitation",
            "Understand Hadith Interpretation"
        ],
        content: [
            "Introduction to Multi Programming Language Studies",
            "The Quran and Its Sciences",
            "Hadith and Its Importance",
            "Multi Programming Language Jurisprudence",
            "Multi Programming Language History",
            "Multi Programming Language Ethics",
            "Contemporary Issues in Islam"
        ]
    },
    {
        id: "dtfo9e",
        category: "Multi Programming Language Finance and Banking", // Updated category
        image: course_images.python_4,
        course_name: "Multi Programming Language Finance and Banking",
        description: "Learn about Multi Programming Language Finance principles and banking practices in accordance with Shariah law.",
        rating_count: 3059,
        rating_star: 4.3,
        students: 184053,
        creator: "Multi Programming Language Finance Expert",
        updated_date: "9/2019",
        lang: "English",
        actual_price: 84.99,
        discounted_price: 9.99,
        what_you_will_learn: [
            "Understand the Principles of Multi Programming Language Finance",
            "Explore Shariah-Compliant Investment",
            "Learn Multi Programming Language Banking Practices",
            "Evaluate Multi Programming Language Insurance (Takaful)"
        ],
        content: [
            "Introduction to Multi Programming Language Finance",
            "Multi Programming Language Banking Products",
            "Multi Programming Language Investment Principles",
            "Multi Programming Language Insurance (Takaful)",
            "Multi Programming Language Financial Markets",
            "Multi Programming Language Finance Case Studies"
        ]
    },
    {
        id: "fLroW6",
        category: "Multi Programming Language Art and Architecture", // Updated category
        image: course_images.python_3,
        course_name: "Multi Programming Language Art and Architecture",
        description: "Explore the rich heritage of Multi Programming Language art and architecture across different cultures and time periods.",
        rating_count: 1844,
        rating_star: 4.3,
        students: 7330,
        creator: "Multi Programming Language Art Historian",
        updated_date: "5/2022",
        lang: "English",
        actual_price: 84.99,
        discounted_price: 9.99,
        what_you_will_learn: [
            "Discover Multi Programming Language Art Styles",
            "Explore Multi Programming Language Architecture",
            "Understand Calligraphy and Manuscripts"
        ],
        content: [
            "Introduction to Multi Programming Language Art",
            "Multi Programming Language Calligraphy",
            "Multi Programming Language Manuscripts",
            "Multi Programming Language Architecture",
            "Multi Programming Language Art Across Cultures",
            "Multi Programming Language Art Conservation"
        ]
    },
    // Add more courses here with updated categories as needed
];



  
 //images 
async function fetchPexelsImageUrl(searchQuery) {
    const apiKey = 'sHlEMO77bq1Ir6j0GC1tpmwbBPbTt9TXbJzdfLYzPkdeQLWjvTRWT5hM';
  
    const headers = {
      'Authorization': apiKey,
    };
  
    const url = `https://api.pexels.com/v1/search?query=${searchQuery}`;
  
    try {
      const response = await fetch(url, { headers });
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
  
      const data = await response.json();
      const photos = data.photos || [];
  
      if (photos.length > 0) {
        const firstPhoto = photos[0];
        const imageUrl = firstPhoto.src.original;
  
        return imageUrl; // Return the fetched image URL
      } else {
        console.log('No images found for the query.');
        return null;
      }
    } catch (error) {
      console.error(`Error fetching image: ${error.message}`);
      return null;
    }
  }
  async function updateCourseImages() {
    for (let i = 0; i < courses.length; i++) {
      const course = courses[i];
      const searchQuery = course.course_name;
  
      const imageUrl = await fetchPexelsImageUrl(searchQuery);
  
      if (imageUrl) {
        course.image = imageUrl;
        console.log(`Updated image for course: ${course.course_name}`);
      }
    }
  }
  updateCourseImages();  


export default courses;

