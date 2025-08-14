import axios from "axios";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const postData = async (url, formData) => {
  try {
    const response = await fetch(apiUrl + url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (!response.ok) {
      return { error: true, message: data.message || "Request failed" };
    }

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchData = async (url) => {
  try {
    const { data } = await axios.get(apiUrl + url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    console.error(error);
    return { error: true, message: error.message };
  }
};
