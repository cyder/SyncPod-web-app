import * as React from 'react';

interface EditingState {
  isEditing: boolean;
  setIsEditing(isEditing: boolean): void;
}

const initialEditingState: EditingState = {
  isEditing: false,
  setIsEditing: () => {},
};

export const editingContet = React.createContext<EditingState>(
  initialEditingState,
);

export default ({ children }: { children: React.ReactNode }) => {
  const [isEditing, setIsEditing] = React.useState(false);

  return (
    <editingContet.Provider value={{ isEditing, setIsEditing }}>
      {children}
    </editingContet.Provider>
  );
};
