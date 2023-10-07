import { course_images } from "./images";

 //  category names 
// Updated category names
export const PYTHON = "Social Media Marketing";
export const WEB_DEVELOPMENT = "Social Media Marketing History";
export const DATA_SCIENCE = "Social Media Marketing Studies";
export const AWS = "Social Media Marketing Law";
export const DESIGN = "Social Media Marketing Art";
export const MARKETING = "Social Media Marketing Finance";

const courses = [
    {
        id: "xMHCZl",
        category: "Social Media Marketing", // Change category
        image: course_images.python_5,
        course_name: "Social Media Marketing: The Comprehensive Course",
        description: "Learn A-Z everything about Social Media Marketing, from the basics to advanced topics in digital marketing and social media strategies!",
        rating_count: 3059,
        rating_star: 4.4,
        students: 18430,
        creator: "Social Media Marketing Institute",
        updated_date: "9/2015",
        lang: "English",
        actual_price: 84.99,
        discounted_price: 9.99,
        what_you_will_learn: [
            "Study Social Media Marketing Theories",
            "Become Proficient in Social Media Advertising",
            "Understand Social Media Analytics"
        ],
        content: [
            "Introduction to Social Media Marketing",
            "Digital Marketing Strategies",
            "Social Media Advertising",
            "Social Media Analytics",
            "Social Media History",
            "Social Media Ethics",
            "Contemporary Issues in Social Media Marketing"
        ]
    },
    {
        id: "dtfo9e",
        category: "Social Media Marketing", // Change category
        image: course_images.python_4,
        course_name: "Social Media Marketing Finance and Banking",
        description: "Learn about financial principles and banking practices in the context of Social Media Marketing.",
        rating_count: 3059,
        rating_star: 4.3,
        students: 184053,
        creator: "Social Media Marketing Finance Expert",
        updated_date: "9/2019",
        lang: "English",
        actual_price: 84.99,
        discounted_price: 9.99,
        what_you_will_learn: [
            "Understand Financial Principles in Social Media Marketing",
            "Explore Social Media Marketing Investment",
            "Learn Social Media Banking Practices",
            "Evaluate Social Media Marketing Insurance"
        ],
        content: [
            "Introduction to Financial Principles in Social Media Marketing",
            "Social Media Banking Products",
            "Social Media Marketing Investment Principles",
            "Social Media Marketing Insurance",
            "Social Media Financial Markets",
            "Social Media Marketing Finance Case Studies"
        ]
    },
    {
        id: "fLroW6",
        category: "Social Media Marketing", // Change category
        image: course_images.python_3,
        course_name: "Social Media Marketing Art and Design",
        description: "Explore the art and design aspects of Social Media Marketing across different platforms and creative strategies.",
        rating_count: 1844,
        rating_star: 4.3,
        students: 7330,
        creator: "Social Media Marketing Art Historian",
        updated_date: "5/2022",
        lang: "English",
        actual_price: 84.99,
        discounted_price: 9.99,
        what_you_will_learn: [
            "Discover Social Media Art Styles",
            "Explore Social Media Design",
            "Understand Calligraphy and Creativity in Social Media"
        ],
        content: [
            "Introduction to Art in Social Media Marketing",
            "Social Media Calligraphy",
            "Social Media Art and Design",
            "Social Media Art Across Platforms",
            "Social Media Art Conservation"
        ]
    },
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

