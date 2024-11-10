// src/components/ui/card.js
import React from "react";

export const Card = ({ children }) => (
  <div className="border rounded shadow p-4">{children}</div>
);

export const CardContent = ({ children }) => (
  <div className="p-4">{children}</div>
);

export const CardHeader = ({ children }) => (
  <div className="border-b p-4">{children}</div>
);

export const CardTitle = ({ children }) => (
  <h2 className="text-lg font-bold">{children}</h2>
);
