import { useState } from "react";

/*
  디폴트값은 false, 로딩 생기면 true
 */
export default function useLoading(initial: boolean = false) {
  const [isLoading, setIsLoading] = useState(initial);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return { isLoading, startLoading, stopLoading };
}

