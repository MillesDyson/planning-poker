import React from "react"

const HelloWorld: React.FC<HelloWorldProps> = ({greeting, children}) => {
  return (
    <React.Fragment>
      {greeting}
    </React.Fragment>
  );
}

type HelloWorldProps = {
  greeting: string,
  message: string,
  children: React.ReactNode
};

export default HelloWorld
