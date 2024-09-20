'use client';

import { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';
import styles from './Editor.module.css';

const EditorPage: React.FC = () => {
  const [text, setText] = useState<string>('Este é um texto de exemplo para o documento A4.');
  const documentRef = useRef<HTMLDivElement>(null);

  const handleDocumentChange = (e: React.FormEvent<HTMLDivElement>) => {
    setText(e.currentTarget.textContent || '');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleDownload = () => {
    if (documentRef.current) {
      const element = documentRef.current;
      const opt = {
        margin:       0.5,
        filename:     'documento-visual-law.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
      };
      html2pdf().set(opt).from(element).save();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.editor}>
        <div
          className={styles.document}
          contentEditable
          suppressContentEditableWarning
          onInput={handleDocumentChange}
          ref={documentRef}
          dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br />') }}
        >
        </div>
      </div>
      <div className={styles.panel}>
        <textarea
          className={styles.textarea}
          value={text}
          onChange={handleInputChange}
        />
        <button className={styles.downloadButton} onClick={handleDownload}>
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default EditorPage;
