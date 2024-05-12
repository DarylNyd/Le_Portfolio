import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if the loader has played
    const loaderPlayed = localStorage.getItem('loaderPlayed');

    // If the loader has played, prevent going back to the loader page
    if (loaderPlayed === 'true') {
      router.replace('/home');
    }
  }, [router]);
  return <div>Home Page</div>;
};

export default Index;
