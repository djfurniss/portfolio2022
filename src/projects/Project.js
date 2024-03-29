import React, { useEffect } from "react";
import "./project.css";

export default function Project({ proj: { name, stack, description, repo, link }}) {
  useEffect(manageDescriptions, [])
  document.body.onresize = ()=> {
    // reset all description text boxes to default size
    document.querySelectorAll("#description").forEach(elem => {
      if (elem.totalHeight > 150 && elem.expanded){
        elem.expanded = false;
        elem.style.overflow = "hidden"
        elem.style.marginBottom = "5px"

        elem.parentElement.style.height = `360px`;
        elem.parentElement.children[3].innerText = "see more"
      }
    })
  }

  function manageDescriptions(){
    document.querySelectorAll("#description").forEach(elem=>{
      elem.expanded = false; // kind of like state but for this specific element and not each #description
      if (elem.clientHeight > 150){
        elem.totalHeight = elem.clientHeight; // keep track of the total height of the paragraph
        elem.style.overflow = "hidden"
        elem.style.marginBottom = "5px"
        // create a p tag for these long description paragraphs
        const viewOpt = document.createElement("p");
        viewOpt.innerText = "see more";
        viewOpt.setAttribute("class", "view-opt"); // for styling
        viewOpt.onmouseover = (e) => {
          e.target.style.cursor = "default"
        };
        viewOpt.onclick = (e)=>{
          elem.expanded = !elem.expanded
          // what is left to be rendered is the total height subtracted by the height that's currently showing after applying hidden overflow
          const leftoverHeight = elem.totalHeight - elem.clientHeight
          // add that left over height to the height of the whole project div which is always set at 350
          // I use 360 to account for the new p tag element underneath the paragraph
          e.target.parentElement.style.height = `${360 + leftoverHeight}px`
          e.target.innerText = elem.expanded ? "see less" : "see more"
        };

        elem.parentElement.insertBefore(viewOpt, elem.parentElement.children[3])
      }
    })
  };

  return (
    <div id="Project" >
      <h2>{name}</h2>
      <p id="stack">{stack ? stack : null}</p>
      <p id="description">{description}</p>
      <div id="link-container">
        {repo && <a href={repo} target="_blank" rel="noreferrer">View on GitHub</a>}
        {link && <a href={link} target="_blank" rel="noreferrer">Visit Site</a>}
      </div>
    </div>
  );
};
