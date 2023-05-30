import React, { useState } from "react";
import { Children } from "./types";

type Props = {
  onSelect: (value: Children) => void;
};

const Component = (props: Props) => {
  const { onSelect } = props;
  const [selected, setSelected] = useState<string>("");
  const [text, setText] = useState<string>("");

  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.value);
  };

  const handleChange = (inputText: string) => {
    setText(inputText);
  };

  const handleKeyDown = (e: { target: any; key: string }) => {
    if (e.key === "Enter" && selected) {
      const obj = { option: selected, name: text };
      onSelect(obj);
      e.target.value = "";
    }
  };
  return (
    <div>
      <input
        placeholder="Enter File or Folder Name..."
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <input type="radio" value="File" name="file_manager" id="file" onChange={radioHandler} />
      <label htmlFor="file">File</label>
      <input type="radio" value="Folder" name="file_manager" id="folder" onChange={radioHandler} />
      <label htmlFor="folder">Folder</label>
    </div>
  );
};

export default Component;
