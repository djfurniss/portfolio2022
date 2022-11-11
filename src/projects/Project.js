import React from "react";
import "./project.css";

export default function Project({ name, stack, description, repo, link}) {
  return (
    <div id="Project">
      <h2>{name}</h2>
      {stack && <p id="stack">{stack}</p>}
      <p id="description">{description}</p>
      <div id="link-container">
        {repo && <a href={repo} target="_blank" rel="noreferrer">View on GitHub</a>}
        {link && <a href={link} target="_blank" rel="noreferrer">Visit Site</a>}
      </div>
    </div>
  );
};
