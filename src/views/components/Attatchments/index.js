import React, { useRef } from 'react';

const Attatchments = ({ attatchments, fetchAttatchments }) => {
  const files = useRef();

  const appendAttachments = () => {
    fetchAttatchments(files.current.files);
  };

  return (
    <div className="attachments">
      <table className="attatchment_box">
        <tbody>
          <tr>
            <td className="font_thin">파일첨부</td>
            <td>
              <label className="font_thin" htmlFor="attatchments">
                내 PC
              </label>
              <input
                ref={files}
                type="file"
                id="attatchments"
                name="attatchments"
                multiple
                onChange={() => {
                  appendAttachments();
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      {attatchments && (
        <table className="file_list">
          <thead>
            <tr>
              <td className="font_thin">파일명</td>
              <td className="font_thin">파일크기</td>
            </tr>
          </thead>
          <tbody>
            {Array.from(Array(attatchments.length)).map((_, index) => (
              <tr key={index}>
                <td className="font_thin">{attatchments[index].name}</td>
                <td className="font_thin">{attatchments[index].size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Attatchments;
