"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface FlickeringGridProps extends React.HTMLAttributes<HTMLDivElement> {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  width?: number;
  height?: number;
  className?: string;
  maxOpacity?: number;
}

export const FlickeringGrid: React.FC<FlickeringGridProps> = ({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = "rgb(37, 23, 110)",
  width,
  height,
  className = "",
  maxOpacity = 0.3,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  // Pure deterministic color parser (Hydration Safe)
  const memoizedColor = useMemo(() => {
    if (!color) return "rgba(37, 23, 110,";
    const match = color.match(/\d+/g);
    if (match && match.length >= 3) {
      return `rgba(${match[0]}, ${match[1]}, ${match[2]},`;
    }
    return "rgba(37, 23, 110,";
  }, [color]);

  const updateCanvasSize = useCallback(() => {
    const newWidth = width || containerRef.current?.clientWidth || 0;
    const newHeight = height || containerRef.current?.clientHeight || 0;
    setCanvasSize({ width: newWidth, height: newHeight });
  }, [width, height]);

  useEffect(() => {
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);
    return () => window.removeEventListener("resize", updateCanvasSize);
  }, [updateCanvasSize]);

  const gridParams = useMemo(() => {
    const cols = Math.floor((canvasSize.width + gridGap) / (squareSize + gridGap));
    const rows = Math.floor((canvasSize.height + gridGap) / (squareSize + gridGap));
    const squares = new Float32Array(cols * rows);
    for (let i = 0; i < squares.length; i++) {
      squares[i] = Math.random() * maxOpacity;
    }
    return { cols, rows, squares };
  }, [canvasSize, squareSize, gridGap, maxOpacity]);

  const setupCanvas = useCallback(
    (canvas: HTMLCanvasElement, w: number, h: number) => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
    },
    []
  );

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);

    const { cols, rows, squares } = gridParams;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const idx = i * rows + j;
        if (Math.random() < flickerChance) {
          squares[idx] = Math.random() * maxOpacity;
        }

        const opacity = squares[idx];
        if (opacity > 0) {
          ctx.fillStyle = `${memoizedColor} ${opacity})`;
          const x = i * (squareSize + gridGap);
          const y = j * (squareSize + gridGap);
          ctx.fillRect(x, y, squareSize, squareSize);
        }
      }
    }
  }, [canvasSize, gridParams, flickerChance, maxOpacity, memoizedColor, squareSize, gridGap]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView || canvasSize.width === 0 || canvasSize.height === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    setupCanvas(canvas, canvasSize.width, canvasSize.height);

    let animationFrameId: number;
    const render = () => {
      animate();
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, canvasSize, setupCanvas, animate]);

  return (
    <div
      ref={containerRef}
      className={`h-full w-full ${className}`}
      suppressHydrationWarning={true}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none"
      />
    </div>
  );
};
