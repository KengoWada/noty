import firebase from "@/firebaseConfig";

const uploadImage = async (file, filename) => {
  const storageRef = firebase.storage().ref(filename);

  try {
    const res = await storageRef.put(file);
    const url = await res.ref.getDownloadURL();
    return url;
  } catch (err) {
    console.log("Storage Error: ", err);
  }
};

export default { uploadImage };
