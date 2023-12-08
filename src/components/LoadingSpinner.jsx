import React from "react";

export default function LoadingSpinner() {
  return (
    <div class="d-flex justify-content-center loading-spinner">
      <div
        class="spinner-border"
        role="status"
        style={{ width: "100px", height: "100px" }}
      >
        {/* <span class="sr-only">Loading...</span> */}
      </div>
    </div>
  );
}
