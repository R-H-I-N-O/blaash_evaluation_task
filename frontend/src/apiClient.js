const API_BASE_URL = process.env.REACT_APP_API_KEY || "";
console.log("base url",API_BASE_URL);

// src/apiClient.js

const fetchYouTubePlaylists = async () => {
    try {
      const response = await fetch("http://localhost:5000/playlists");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data.items.map((item) => ({
        title: item.snippet.title,
        videos: item.contentDetails.itemCount,
        thumbnail: item.snippet.thumbnails.medium.url,
      }));
    } catch (error) {
      console.error("Error fetching YouTube playlists:", error);
      throw error; // Propagate the error for handling in the calling function
    }
  };
  
  

const sendOtp = async (formData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/otp/send`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        const responseBody = await response.json();
        if (!response.ok) {
            throw new Error(responseBody.message);
        }
        return responseBody;
    } catch (error) {
        console.error("Error in sign in", error);
        throw error;
    }
}

const signIn = async (formData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/api/otp/verify`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        const responseBody = await response.json();
        if (!response.ok) {
            throw new Error(responseBody.message);
        }
        return responseBody;
    } catch (error) {
        console.error("Error in sign in", error);
        throw error;
    }
}

export {
    sendOtp, signIn, fetchYouTubePlaylists
}