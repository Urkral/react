import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Acceuil" currentPage="home">
      Et ici on retrrouve notre children
    </Layout>
  );
}
