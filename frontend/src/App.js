import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Please upload a file");
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post("http://localhost:5000/upload", formData);
      setResult(res.data);
    } catch (error) {
      alert("Upload Fail, Please try again");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container">
      <h1>🧠 AI Meeting Summarizer</h1>
      <p className="subtext">
        Upload your meeting audio and get instant transcripts, summaries, and
        action items.
      </p>
      <div className="card">
        <input
          type="file"
          accept="audio/*"
          onChange={(e) => setFile(e.target.files[0])}
          className="upload-box"
        />
        <button
          onClick={handleUpload}
          disabled={loading}
          className="upload-btn"
        >
          {loading ? "Analyzing..." : "Upload & Analyze"}
        </button>
        {loading && <div className="loader"></div>}
        {result && (
          <div className="results">
            <div className="section">
              <h2>
                <span role="img" aria-label="transcript" className="emoji">
                  📄
                </span>{" "}
                Transcript:
              </h2>
              <div className="result-box">{result.transcript}</div>
            </div>
            <div className="section">
              <h2>
                <span role="img" aria-label="summary" className="emoji">
                  🧠
                </span>{" "}
                AI Summary:
              </h2>
              <div className="result-box">{result.analysis}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
