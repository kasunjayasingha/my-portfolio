"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "portfolio_likes_v1";

export function useLikes() {
  const [likes, setLikes] = useState<Record<string, boolean>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setLikes(JSON.parse(raw));
    } catch {}
    setReady(true);
  }, []);

  const toggleLike = useCallback((id: string) => {
    setLikes((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  }, []);

  const isLiked = useCallback((id: string) => !!likes[id], [likes]);

  return { ready, likes, isLiked, toggleLike };
}


