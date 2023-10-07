export function fetchPexelsImageUrl(searchQuery) {
    const apiKey = 'sHlEMO77bq1Ir6j0GC1tpmwbBPbTt9TXbJzdfLYzPkdeQLWjvTRWT5hM';

    const headers = {
        Authorization: apiKey,
    };

    const apiUrl = `https://api.pexels.com/v1/search?query=${searchQuery}`;

    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(apiUrl, {
                headers,
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            const photos = data.photos || [];

            if (photos.length > 0) {
                const firstPhoto = photos[0];
                const imageUrl = firstPhoto.src.original;
                resolve(imageUrl); // Resolve with the image URL
            } else {
                reject(new Error('No images found for the query.'));
            }
        } catch (error) {
            reject(error);
        }
    });
}
