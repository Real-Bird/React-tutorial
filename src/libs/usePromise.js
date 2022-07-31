import { useEffect, useState } from "react";

export default function usePromise(fetchUrl, deps) {
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      // await new Promise((resolve) => setTimeout(resolve, 10000));
      await fetch(fetchUrl)
        .then((res) => res.json())
        .then((json) => setResolved(json))
        .catch((e) => setError(e));
      setLoading(false);
    };
    process();
  }, deps);
  return [loading, resolved, error];
}
