import { useState } from "react";
import axios from "axios";

interface Review {
  id: number;
  title: string;
  content: string;
  update_at: string; // Assuming update_at is a string, change it accordingly
}

function RestAPI() {
  const [text, setText] = useState<Review[]>([]);

  const handlePost = async () => {
    try {
      const response = await axios.post<Review>(
        "http://127.0.0.1:8000/review/",
        {
          title: "제목",
          content: "내용",
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGet = async () => {
    try {
      const response = await axios.get<Review[]>(
        "http://127.0.0.1:8000/review/"
      );
      setText(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/review/${id}`);
      setText(text.filter((review) => review.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>REST API 연습</h1>
      <div className="btn-primary">
        <button onClick={handlePost}>POST</button>
        <button onClick={handleGet}>GET</button>
      </div>
      {text.map((review) => (
        <div key={review.id}>
          <div className="list">
            <span>
              {review.id}번, {review.title}, {review.content},{" "}
              {review.update_at}
            </span>
            <button
              className="btn-delete"
              onClick={() => handleDelete(review.id)}
            >
              DELETE
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default RestAPI;
