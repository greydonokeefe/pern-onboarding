import { useEffect, useState } from "react";
import "./App.css";

interface DemoItem {
  pern_name: string;
  pern_role: string;
  pern_year: string;
}

function App() {
  const [data, setData] = useState<DemoItem[]>([]);

  useEffect(() => {
    // Function to fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getData");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* ----------- COMMENT OUT THIS CODE ----------- */}
      {/* <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="font-semibold text-5xl text-green-800">
          Comment Out This Code!
        </div>
      </div> */}
      {/* --------------------------------------------- */}

      {/* ------------ UNCOMMENT THIS CODE ------------ */}
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="font-semibold text-5xl text-green-800 pb-4">
          Garden School Foundation
        </div>
        <div>
          {data.map((item, i) => (
            <div key={i}>
              {item.pern_name} — {item.pern_role} - {item.pern_year}
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          Nice Job! Now that you're seeing this, kill both terminals and cd back
          to the root project directory, commit, push and create a PR!
        </div>
      </div>
      {/* --------------------------------------------- */}
    </>
  );
}

export default App;
