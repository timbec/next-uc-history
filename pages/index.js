import Layout from "@/components/Layout";
import Link from "next/link";

// places data
import { getAllPlacesPosts } from "../lib/api";
import axios from "axios";

import Showcase from "@/components/Showcase";

export default function HomePage() {
  return (
    <Layout>
      <Showcase />
    </Layout>
  );
}
