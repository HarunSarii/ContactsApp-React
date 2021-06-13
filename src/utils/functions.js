import firebase from "./firebase";
import { useState, useEffect } from "react";
import { successToastify } from "./customToastify";

export const addInfo = (info) => {
  const contactRef = firebase.database().ref("contact");
  contactRef.push(info);
  successToastify("Added Succesfully");
};

export const useFetch = () => {
  const [contactList, setContactList] = useState();
  const [isLoading, setİsLoading] = useState(false);

  useEffect(() => {
    setİsLoading(true);
    const contactRef = firebase.database().ref("contact");
    contactRef.on("value", (snapshot) => {
      const contacts = snapshot.val();
      const contactArray = [];
      for (let id in contacts) {
        contactArray.push({ id, ...contacts[id] });
      }
      setContactList(contactArray);
      setİsLoading(false);
    });
  }, []);
  return { contactList, isLoading };
};

export const deleteHandler = (id) => {
  const contactRef = firebase.database().ref("contact").child(id);
  contactRef.remove();
  successToastify("Deleted Successfully");
};

export const updateHandler = (info) => {
  const contactRef = firebase.database().ref("contact").child(info.id);
  contactRef.update(info);
  successToastify("Updated Successfully");
};
