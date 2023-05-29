import { Head } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";

export interface AppProps {
  title: string;
  description: string;
  children?: ComponentChildren;
}

export function App(props: AppProps) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="og:title" content={props.title} />
        <meta name="og:description" content={props.description} />
        <link rel="stylesheet" href="/style.css" />
        <meta name="theme-color" content="#262526" />
      </Head>
      <div class="app-container">
        {props.children}
      </div>
    </>
  );
}
