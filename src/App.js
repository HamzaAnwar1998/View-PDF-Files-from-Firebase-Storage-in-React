import { useState, useEffect } from "react";
import { Button } from "./components/Button";
import { Modal } from "./components/Modal";
import {getDownloadURL, ref} from 'firebase/storage'
import storage from './config/firebase'

function App() {

  const [modal, setModal]=useState(false);
  const [resume, setResume]=useState(null);

  useEffect(()=>{
    getDownloadURL(ref(storage, 'Resume.pdf')).then((url)=>{
      setResume(url);
    })
  },[])

  return (
    <div className="container">
      <br></br>

      <Button setModal={setModal}/>

      {modal===true&&(
        <Modal setModal={setModal} resume={resume}/>
      )}

    </div>
  );
}

export default App;
