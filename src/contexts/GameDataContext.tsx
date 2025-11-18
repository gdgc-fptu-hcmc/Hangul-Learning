// src/contexts/GameDataContext.tsx
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
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

const STORAGE_KEY = "mini_game_saved_data_v1";

const GameDataContext = createContext<GameDataContextValue | undefined>(
  undefined
);

export const GameDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // -------- LOAD LOCAL STORAGE --------
  const [gameData, setGameDataState] = useState<GameData>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      return parsed?.gameData ?? null;
    } catch {
      return null;
    }
  });

  const [earnedScores, setEarnedScores] = useState<number>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return 0;
      const parsed = JSON.parse(raw);
      return parsed?.earnedScores ?? 0; 
    } catch {
      return 0;
    }
  });

  // -------- SAVE TO LOCAL STORAGE --------
  useEffect(() => {
    const payload = {
      gameData,
      earnedScores,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  }, [gameData, earnedScores]);

  // -------- ACTIONS --------
  const setGameData = (gd: GameData) => setGameDataState(gd);
  const clearGameData = () => setGameDataState(null);

  const addEarnedScoresByOne = () => setEarnedScores((prev) => prev + 1);

  const resetEarnedScore = () => setEarnedScores(0);

  // -------- CONTEXT VALUE --------
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

// -------- HOOK --------
export const useGameData = () => {
  const ctx = useContext(GameDataContext);
  if (!ctx) throw new Error("useGameData must be used inside GameDataProvider");
  return ctx;
};
