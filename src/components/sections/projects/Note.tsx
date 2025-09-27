import { useState } from "react";

const Note = () => {
  const [toggle, settoggle] = useState<boolean>(false);

  return (
    <div className="flex bg-gray-900 border-l-4 border-green-500 m-2 md:w-3/4 items-center">
      <input type="checkbox" id="toggle" className="peer hidden" />
      <p
        className={`${
          !toggle ? "line-clamp-1" : "peer-checked:line-clamp-none"
        } text-white text-sm my-2 ml-2`}>
        Note: The backend for this project was originally deployed using
        Railway’s free tier. Since the trial expired, the server is no longer
        active. However, the frontend remains fully functional and the complete
        source code (both frontend and backend) is available in the repository.{" "}
        <span
          className={`${
            toggle
              ? "text-nowrap text-sm text-gray-500 hover:underline cursor-pointer"
              : ""
          }`}
          onClick={() => settoggle(false)}>
          Read less
        </span>
      </p>
      {!toggle && (
        <span
          className="text-nowrap text-sm mr-3 text-gray-500 hover:underline cursor-pointer"
          onClick={() => settoggle(true)}>
          Read more
        </span>
      )}
    </div>
  );
};

export default Note;
