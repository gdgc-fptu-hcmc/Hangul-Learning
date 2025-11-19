// src/contexts/GameDataContext.tsx
import React, { createContext, useContext, useMemo, useState } from "react";
import { getMiniGameContent } from "@/data";

type GameData = ReturnType<typeof getMiniGameContent> | null;

type GameDataContextValue = {
  gameData: GameData;
  setGameData: (gd: GameData) => void;
  clearGameData: () => void;

  earnedScores: number;
  addEarnedScoresByOne: () => void;
  resetEarnedScore: () => void;
};

const GameDataContext = createContext<GameDataContextValue | undefined>(
  undefined
);

export const GameDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // In-memory only (no localStorage)
  const [gameData, setGameDataState] = useState<GameData>(null);
  const [earnedScores, setEarnedScores] = useState<number>(0);

  // ACTIONS
  const setGameData = (gd: GameData) => setGameDataState(gd);
  const clearGameData = () => setGameDataState(null);

  const addEarnedScoresByOne = () => setEarnedScores((prev) => prev + 1);
  const resetEarnedScore = () => setEarnedScores(0);

  // CONTEXT VALUE
  const value = useMemo(
    () => ({
      gameData,
      setGameData,
      clearGameData,

      earnedScores,
      addEarnedScoresByOne,
      resetEarnedScore,
    }),
    [gameData, earnedScores]
  );

  return (
    <GameDataContext.Provider value={value}>
      {children}
    </GameDataContext.Provider>
  );
};

// HOOK
export const useGameData = () => {
  const ctx = useContext(GameDataContext);
  if (!ctx) throw new Error("useGameData must be used inside GameDataProvider");
  return ctx;
};
