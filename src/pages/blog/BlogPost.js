import { Link } from 'react-router-dom';
import React from 'react';
import { useEffect } from 'react';
const BlogPost = () => {
  useEffect(() => {
    var isAdvancedUpload = (function () {
      var div = document.createElement('div');
      return (
        ('draggable' in div || ('ondragstart' in div && 'ondrop' in div)) &&
        'FormData' in window &&
        'FileReader' in window
      );
    })();

    let draggableFileArea = document.querySelector('.drag-file-area');
    let browseFileText = document.querySelector('.browse-files');
    let uploadIcon = document.querySelector('.upload-icon');
    let dragDropText = document.querySelector('.dynamic-message');
    let fileInput = document.querySelector('.default-file-input');
    let cannotUploadMessage = document.querySelector('.cannot-upload-message');
    let cancelAlertButton = document.querySelector('.cancel-alert-button');
    let uploadedFile = document.querySelector('.file-block');
    let fileName = document.querySelector('.file-name');
    let fileSize = document.querySelector('.file-size');
    let progressBar = document.querySelector('.progress-bar');
    let removeFileButton = document.querySelector('.remove-file-icon');
    let uploadButton = document.querySelector('.upload-button');
    let fileFlag = 0;

    fileInput.addEventListener('click', () => {
      fileInput.value = '';
      console.log(fileInput.value);
    });

    fileInput.addEventListener('change', (e) => {
      console.log(' > ' + fileInput.value);
      uploadIcon.innerHTML = 'check_circle';
      dragDropText.innerHTML = 'File Dropped Successfully!';
      document.querySelector(
        '.label'
      ).innerHTML = `drag & drop or <span class="browse-files"> <input type="file" class="default-file-input" style=""/> <span class="browse-files-text" style="top: 0;"> browse file</span></span>`;
      uploadButton.innerHTML = `Upload`;
      fileName.innerHTML = fileInput.files[0].name;
      fileSize.innerHTML = (fileInput.files[0].size / 1024).toFixed(1) + ' KB';
      uploadedFile.style.cssText = 'display: flex;';
      progressBar.style.width = 0;
      fileFlag = 0;
    });

    uploadButton.addEventListener('click', () => {
      let isFileUploaded = fileInput.value;
      if (isFileUploaded != '') {
        if (fileFlag == 0) {
          fileFlag = 1;
          var width = 0;
          var id = setInterval(frame, 50);
          function frame() {
            if (width >= 390) {
              clearInterval(id);
              uploadButton.innerHTML = `<span style="color: green;" class="material-icons-outlined upload-button-icon"> check_circle </span> <span style="color: green;"> Uploaded </span> `;
            } else {
              width += 5;
              progressBar.style.width = width + 'px';
            }
          }
        }
      } else {
        cannotUploadMessage.style.cssText = 'display: flex; animation: fadeIn linear 1.5s;';
      }
    });

    cancelAlertButton.addEventListener('click', () => {
      cannotUploadMessage.style.cssText = 'display: none;';
    });

    if (isAdvancedUpload) {
      ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach(
        (evt) =>
          draggableFileArea.addEventListener(evt, (e) => {
            e.preventDefault();
            e.stopPropagation();
          })
      );

      ['dragover', 'dragenter'].forEach((evt) => {
        draggableFileArea.addEventListener(evt, (e) => {
          e.preventDefault();
          e.stopPropagation();
          uploadIcon.innerHTML = 'file_download';
          dragDropText.innerHTML = 'Drop your file here!';
        });
      });

      draggableFileArea.addEventListener('drop', (e) => {
        uploadIcon.innerHTML = 'check_circle';
        dragDropText.innerHTML = 'File Dropped Successfully!';
        document.querySelector(
          '.label'
        ).innerHTML = `drag & drop or <span class="browse-files"> <input type="file" class="default-file-input" style=""/> <span class="browse-files-text" style="top: -23px; left: -20px;"> browse file</span> </span>`;
        uploadButton.innerHTML = `Upload`;

        let files = e.dataTransfer.files;
        fileInput.files = files;
        console.log(files[0].name + ' ' + files[0].size);
        console.log(document.querySelector('.default-file-input').value);
        fileName.innerHTML = files[0].name;
        fileSize.innerHTML = (files[0].size / 1024).toFixed(1) + ' KB';
        uploadedFile.style.cssText = 'display: flex;';
        progressBar.style.width = 0;
        fileFlag = 0;
      });
    }

    removeFileButton.addEventListener('click', () => {
      uploadedFile.style.cssText = 'display: none;';
      fileInput.value = '';
      uploadIcon.innerHTML = 'file_upload';
      dragDropText.innerHTML = 'Drag & drop any file here';
      document.querySelector(
        '.label'
      ).innerHTML = `or <span class="browse-files"> <input type="file" class="default-file-input"/> <span class="browse-files-text">browse file</span> <span>from device</span> </span>`;
      uploadButton.innerHTML = `Upload`;
    });
  }, []);
  return (
    <section id="form">
      <form action>
        <div className="upload-files-container">
          <div style={{ width: '100%' }}>
            <div className="row">
              <div className="col-sm-5">
                <div className="blog-form">
                  <h2>Blog Import Content</h2>
                  <input type="text" placeholder="Title" />
                  <select>
                    <option value="volvo">Grammar</option>
                    <option value="saab">Vocabulary</option>
                  </select>
                  <textarea
                    placeholder="Describe content here..."
                    rows={12}
                    cols={46}
                    defaultValue={''}
                  />
                </div>
              </div>
              <div className="col-sm-2">
                <div className="center">
                  <h2 className="or">&amp;</h2>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="up-file">
                  <h2>Image Of Blog</h2>
                  <div className="drag-file-area">
                    <span className="material-icons-outlined upload-icon"> file_upload </span>
                    <h3 className="dynamic-message"> Drag &amp; drop any file here </h3>
                    <label className="label">
                      {' '}
                      or{' '}
                      <span className="browse-files">
                        {' '}
                        <input type="file" className="default-file-input" />{' '}
                        <span className="browse-files-text">browse file</span>{' '}
                        <span>from device</span>{' '}
                      </span>{' '}
                    </label>
                  </div>
                  <span className="cannot-upload-message">
                    {' '}
                    <span className="material-icons-outlined">error</span> Please select a file
                    first
                    <span className="material-icons-outlined cancel-alert-button">cancel</span>{' '}
                  </span>
                  <div className="file-block">
                    <div className="file-info">
                      {' '}
                      <span className="material-icons remove-file-icon">delete</span>{' '}
                      <span className="file-name"></span> | <span className="file-size"> </span>{' '}
                    </div>
                    <span className="material-icons remove-file-icon">delete</span>
                    <div className="progress-bar"> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="center">
            <button type="button" className="upload-button">
              {' '}
              Upload{' '}
            </button>
          </div>
        </div>
      </form>
      {/*/sign up form*/}
    </section>
  );
};
export default BlogPost;
