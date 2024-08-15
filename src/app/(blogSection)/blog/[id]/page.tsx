import Particles from "@/components/magicui/particles";
import React from "react";

const SingleBlog = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  console.log(id);
  return (
    <div>
      <Particles>
        <div>Hello World</div>
      </Particles>
    </div>
  );
};

export default SingleBlog;
