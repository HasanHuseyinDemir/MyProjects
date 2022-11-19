let Render=(component,to)=>{
    HTMLParser(component.data(),to);
    component.nodeList.forEach((node)=>{
        convertToTextNode(node)
    })
}