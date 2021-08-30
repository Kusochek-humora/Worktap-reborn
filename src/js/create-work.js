// progressStep.forEach(
//     (e) => {
//         progressCounter = progressCounter + 20;


//         if (e.classList.contains('_active-step')) {
//             progressBarActive.style.width = progressCounter - 20 + "%";
//             progressComplete = true;

//         }
//     }

// );
// if (progressComplete === true) {
//     // 8px solid rgba($green, 0.25)


//     progressStepActive.style.borderColor = "rgba(29, 191, 115, 0.25)"
// }

// let control = document.getElementById("file-1");
// control.addEventListener("change", function (event) {
//     // Когда происходит изменение элементовletравления, значит появились новые файлы
//     var i = 0,
//         files = control.files,
//         len = files.length;
//     let counter = 0;


//     for (; i < len; i++) {
//         counter = 1 - (counter + 1);
//         files[i].name;
//         files[i].type;
//         files[i].size;
//         //  console.log(String(files[i].name));
//     }
//     //addClass('gallery-create-inner__upload-name-file')

//     let ListUploads = document.querySelector('.gallery-create-inner__upload-list');

//     let itemUploads = document.createElement("li");
//     let spanUploads = document.createElement("span");
//     let spanFinish = document.createElement("span");
//     spanUploads.innerHTML = files[counter].name;
//     itemUploads.appendChild(spanUploads);
//     itemUploads.appendChild(spanFinish);
//     ListUploads.appendChild(itemUploads);
//     spanFinish.classList.add('gallery-create-inner__upload-done');
//     spanUploads.classList.add('gallery-create-inner__upload-name-file');
//     itemUploads.classList.add('gallery-create-inner__upload-item');
// }, false);