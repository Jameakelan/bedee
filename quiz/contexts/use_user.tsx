import React from "react";
import UserModel from "../models/UserModel";

const UserContext = React.createContext({
  user: {} as UserModel,
  setUser: (user: UserModel) => {},
  setName: (name: string) => {},
  setScore: (score: number) => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<UserModel>({
    imageUri:
      "https://images.unsplash.com/photo-1615751072497-5f5169febe17?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    score: 0,
  });

  function setName(name: string) {
    setUser({ ...user, username: name });
  }

  function setScore(score: number) {
    setUser({ ...user, score });
  }

  return (
    <UserContext.Provider value={{ user, setUser, setName, setScore }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};
