import React from "react";
import { Typography } from "react-vant";

interface Props {
  title: string;
}
export default function Heading(props: Props) {
  return (
    <div>
      <Typography.Title level={5}>{props.title}</Typography.Title>
    </div>
  );
}
