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
  
  // Loop through courses and update the image property
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