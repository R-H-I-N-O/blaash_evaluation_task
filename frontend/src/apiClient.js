const API_BASE_URL = process.env.REACT_APP_API_KEY || "";
console.log("base url",API_BASE_URL);

const fetchPlaylists = async (accessToken) => {
    try {
      const url = new URL(`${API_BASE_URL}/api/playlists`);
      url.searchParams.append('accessToken', accessToken);
  
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error fetching playlists: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching playlists:', error);
      throw error;
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
    sendOtp, signIn, fetchPlaylists
}