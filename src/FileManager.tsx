import _ from "lodash";
import { useState } from "react";
import Component from "./Component";
import "./FileManager.css";
import { Children } from "./types";

type Props = {
  level: number;
  name: string;
  option: string;
};

const FileManager = (props: Props) => {
  const { level, name, option } = props;
  const [children, setChildren] = useState<Children[]>([]);
  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div
      className={`filemanager level-${level} ${
        level % 2 === 0 ? "black" : "white"
      }`}
    >
      {level === 0 ? (
        <Component
          onSelect={(value: Children) => setChildren([...children, value])}
        />
      ) : option === "File" ? (
        <div className="title">{name}</div>
      ) : (
        <>
          <div className="title" onClick={handleShow}>
            {name}
          </div>
          <Component
            onSelect={(value: Children) => setChildren([...children, value])}
          />
        </>
      )}
      <div>
        {_.map(children, (child) => (
          <FileManager
            level={level + 1}
            name={child.name}
            option={child.option}
          />
        ))}
      </div>
    </div>
  );
};

export default FileManager;
