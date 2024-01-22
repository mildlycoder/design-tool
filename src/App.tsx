import React, {useEffect, useState} from "react";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import { fabric } from 'fabric';
import "./App.css";

export default function App() {

  const [text, setText] = useState('')
  const { editor, onReady } = useFabricJSEditor();
  useEffect(()=> {
    if (editor) {
      const editorKeys = Object.keys(editor);
      console.log(editorKeys);
    }
  },[])
  const onAddCircle = () => {
    if (editor) editor.addCircle();
  };

  const onAddRectangle = () => {
    if (editor) editor.addRectangle();
  };

  const onAddText = () => {
    if (editor) editor.addText('Hello');
  };

  const onAddImage = () => {
    if (editor) {
      fabric.Image.fromURL('https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg', function (oImg) {
        oImg.set({
          scaleX: 0.2, // Set a scale factor to adjust width
          scaleY: 0.2,
        })
        editor?.canvas.add(oImg);
      });
    }
  };
  const deleteElement = () => {
    if(editor) editor.deleteSelected()
  }

  useEffect(() => {
    editor?.updateText(text)
  },[text])  
  return (
    <div className="App">
      <h1>FabricJS React Sample</h1>
      <button onClick={onAddCircle}>Add circle</button>
      <button onClick={onAddText}>Add Text</button>
      <button onClick={onAddRectangle}>Add Rectangle</button>
      <button onClick={onAddImage}>Add Image</button>
      <button onClick={deleteElement}>delete</button>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
      <FabricJSCanvas className="sample-canvas" onReady={onReady} />
    </div>
  );
}
