import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Movie() {
  const [data, setData] = useState<MovieType | null>(null);
  const { query } = useRouter();
}
