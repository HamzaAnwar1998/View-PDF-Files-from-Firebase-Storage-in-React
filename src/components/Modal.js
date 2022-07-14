import React from 'react'
import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export const Modal = ({setModal, resume}) => {

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className='backshadow'>

        <div className='custom-modal'>

            <div className='delete-icon'
            onClick={()=>setModal(false)}>
              x
            </div>

            {resume !== null&&(
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
                <Viewer fileUrl={resume} plugins={[defaultLayoutPluginInstance]}/>;
              </Worker>
            )}


        </div>

    </div>
  )
}
