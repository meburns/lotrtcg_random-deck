import { useEffect, useState } from "react";
import App from "./App.js";

export default function AppLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(false);
    
  },[]);

  if (loading) { return <>...</>};
  return (
    <App />
  );
}
