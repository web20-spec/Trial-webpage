import React, { useEffect } from 'react'

function Meta({title, description, canonical, robots, keywords}) {

    useEffect(() => {

        document.title = title

        let descTag = document.querySelector("meta[name='description']");
        if (!descTag && description) {
    descTag = document.createElement("meta");
    descTag.name = "description";
    document.head.appendChild(descTag);
    }
    if (descTag && description) descTag.content = description;

    let keywordsTag = document.querySelector("meta[name='keywords']");
    if (!keywordsTag && keywords) {
    keywordsTag = document.createElement("meta");
    keywordsTag.name = "keywords";
    document.head.appendChild(keywordsTag);
    }
    if (keywordsTag && keywords) keywordsTag.content = keywords;

    if (canonical) {
    let linkTag = document.querySelector("link[rel='canonical']");
    if (!linkTag) {
        linkTag = document.createElement("link");
        linkTag.rel = "canonical";
        document.head.appendChild(linkTag);
    }
    
    linkTag.href = canonical;
    }

    if (robots) {
    let robotsTag = document.querySelector("meta[name='robots']");
    if (!robotsTag) {
        robotsTag = document.createElement("meta");
        robotsTag.name = "robots";
        document.head.appendChild(robotsTag);
    }
    robotsTag.content = robots;
    }

    }, [title, description])

return null
}

export default Meta