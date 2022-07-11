import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getStorage, ref, getDownloadURL, listAll } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-storage.js";
// import storage from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  storageBucket: 'gs://goinggorman-2a758.appspot.com'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

// const pathReference = ref(storage, 'pictures/colors.html');

const listRef = ref(storage, 'pictures/');

// Find all the prefixes and items.
listAll(listRef)
  .then((res) => {
    // res.prefixes.forEach((folderRef) => {
    //   // All the prefixes under listRef.
    //   // You may call listAll() recursively on them.
    // });
    res.items.forEach((itemRef) => {
      // All the items under listRef.
      getDownloadURL(ref(storage, itemRef))
        .then((url) => {
            // `url` is the download URL for 'images/stars.jpg'
            // Or inserted into an <img> element
            // console.log(url)
            const image = document.createElement("img");
            image.setAttribute("src",url);
            // para.appendChild(node);

            const element = document.getElementById("gallery");
            element.appendChild(image);

            // const img = document.getElementById('myimg');
            // img.setAttribute('src', url);
        })
        .catch((error) => {
            // Handle any errors
        });
    });
  }).catch((error) => {
    // Uh-oh, an error occurred!
  });


getDownloadURL(ref(storage, 'pictures/colors.html'))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    // const xhr = new XMLHttpRequest();
    // xhr.responseType = 'blob';
    // xhr.onload = (event) => {
    //   const blob = xhr.response;
    // };
    // xhr.open('GET', url);
    // xhr.send();

    // Or inserted into an <img> element
    const img = document.getElementById('myimg');
    img.setAttribute('src', url);
  })
  .catch((error) => {
    // Handle any errors
  });

// console.log("finished");