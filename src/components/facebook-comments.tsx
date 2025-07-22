"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    FB?: {
      XFBML: {
        parse: () => void;
      };
    };
  }
}

export function FacebookComments({ postUrl }: { postUrl: string }) {
  useEffect(() => {
    // Khởi tạo lại plugin của Facebook mỗi khi URL thay đổi
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, [postUrl]);

  return (
    <div 
      className="fb-comments" 
      data-href={postUrl} 
      data-width="100%" 
      data-numposts="5"
    ></div>
  );
}