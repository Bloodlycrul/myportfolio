"use client";
import React from "react";

const Form = (formData: FormData) => {
  const email = formData.get("email");
  const name = formData.get("name");
  const query = formData.get("query");
  const query_Description = formData.get("query_description");

  if (!name && !query && !query_Description && !query_Description) {
    return false;
  }

  return <div>
    
  </div>;
};

export default Form;
