import React from "react";
import { Toast } from "react-bootstrap";

export const ErrorFallback = () => {
  return (
    <Toast>
      <Toast.Header closeButton={false}>
        <strong className="me-auto">Error Message</strong>
      </Toast.Header>
      <Toast.Body>Something went wrong!</Toast.Body>
    </Toast>
  );
};