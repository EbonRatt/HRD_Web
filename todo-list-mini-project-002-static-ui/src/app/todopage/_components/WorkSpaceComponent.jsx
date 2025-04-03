import { Dot, Ellipsis } from "lucide-react";
import React from "react";

const WorkSpaceComponent = ({ data }) => {
  return (
    <div className="flex justify-between px-10 items-center">
      <div className="flex justify-center items-center">
        <Dot size={50} color={data.color} />
        <span className="font-semibold">{data?.workspaceName}</span>
      </div>
      <Ellipsis />
    </div>
  );
};

export default WorkSpaceComponent;
