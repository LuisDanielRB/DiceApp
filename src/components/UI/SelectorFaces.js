import React from "react";

const FACE_MAP = [4, 6, 8, 10, 12, 20];

const ACTIVE_CLASS = "bg-blue-500 text-white";
const INACTIVE_CLASS = "bg-transparent text-blue-700";
const NORMAL_CLASS =
  "hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded";

const SelectorFaces = (props) => {
  return (
    <div className={`flex justify-evenly`}>
      {FACE_MAP.map((v, idx) => {
        return (
          <button
            key={idx}
            onClick={() => props.setFaces(v)}
            className={`${
              props.faces === v ? ACTIVE_CLASS : INACTIVE_CLASS
            } ${NORMAL_CLASS}`}
          >
            {v}
          </button>
        );
      })}
    </div>

    // <form>
    //   {FACE_MAP.map((v, idx) => {
    //     return (
    //       <div>
    //         <input type="radio" key={idx} name={v} value={v}/>
    //         <label htmlFor={idx} onClick={() => props.setFaces(v)}>
    //           {v}
    //         </label>
    //       </div>
    //     );
    //   })}
    // </form>

    // <form>
    //   <input type="radio" key={Math.random()} name={FACE_MAP[0]} value={FACE_MAP[0]}/>
    //   <label on onClick={() => props.setFaces(FACE_MAP[0])}>
    //     {FACE_MAP[0]}
    //   </label>
    //   <input type="radio" key={Math.random()} name={FACE_MAP[1]} value={FACE_MAP[1]}/>
    //   <label onClick={() => props.setFaces(FACE_MAP[1])}>
    //     {FACE_MAP[1]}
    //   </label>
    // </form>
  );
};

export default SelectorFaces;
