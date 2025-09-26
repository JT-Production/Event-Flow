import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const signup = async (fullname, email, password) => {
  try {
    const userCridential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCridential.user;

    await updateProfile(user, {
      displayName: fullname,
    });

    await setDoc(doc(db, "users", user.uid), {
      fullName: fullname,
      email: email,
      password: password,
      profilePicture: "",
      createedAt: new Date(),
      uid: user.uid,
      savedEvent: [],
      myEvents: [],
      mySchedule: [],
    });
    // Force refresh the user to get updated profile
    await user.reload();

    return { success: true, user };
  } catch (error) {
    console.log("Something went wrong, Sign up error", error);
  }
  // return createUserWithEmailAndPassword(auth, email, password);
};

export const login = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();

    const userCredentials = await signInWithPopup(auth, provider);
    const user = userCredentials.user;

    // Check if user already exists in Firestore
    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);

    // If user doesn't exist, create user document
    if (!userDoc.exists()) {
      const userData = {
        fullName: user.displayName,
        email: user.email,
        profilePicture: "",
        createedAt: new Date(),
        uid: user.uid,
        savedEvent: [],
        myEvents: [],
        mySchedule: [],
        provider: "google",
      };

      await setDoc(userDocRef, userData);
      console.log("New Google user data saved to Firestore");
    } else {
      console.log("Existing Google user signed in");
    }

    return {
      success: true,
      user,
      isNewUser: !userDoc.exists(),
      message: "Successfully signed in with Google!",
    };
  } catch (error) {
    console.error("Google sign-in error:", error);
  }

  // return signInWithPopup(auth, provider);
};

export const forgetPassword = async () => {
  return sendPasswordResetEmail(auth, email);
};

export const signOut = async () => {
  return auth.signOut();
};
