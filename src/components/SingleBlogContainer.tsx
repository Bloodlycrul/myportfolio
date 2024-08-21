import Image from "next/image";
import React from "react";

const SingleBlogContainer = ({
  bgUrl,
  title,
  description,
  tags,
  authorName,
}: {
  bgUrl: string;
  title: string;
  description: string;
  tags: string[];
  authorName: string;
}) => {
  return (
    <div className="bg-white p-4 border rounded-lg shadow-lg flex flex-col">
      <div className="w-full h-[200px] mb-4">
        <Image
          src={bgUrl}
          alt={title}
          width={400}
          height={200}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <div className="text-sm text-gray-500 mb-2">
          <span>
            {authorName} - {new Date().toLocaleDateString()}
          </span>
        </div>
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex gap-2 flex-wrap mt-auto">
          {tags &&
            tags.map((item, i) => (
              <div
                key={i}
                className="border px-4 py-1 rounded-full text-sm text-gray-600"
              >
                {item}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SingleBlogContainer;
