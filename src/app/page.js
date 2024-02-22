import Image from "next/image";
import styles from "./page.module.css";
import { Center } from "./components/Center";
import { Blink } from "./components/Blink";
import { Marquee } from "./components/Marquee";
import { Eighty8x31 } from "./components/Eighty8x31";

export default function Home() {
  return (
    <main>
      <Center>
        <Blink>gjgfsjfdlkfldksjflksad</Blink>
      </Center>
      <Marquee>test</Marquee>
      <Eighty8x31>Truth</Eighty8x31>
      <marquee>test</marquee>
      <Eighty8x31 leftImageSrc="/tiger.bmp">Best Viewed in</Eighty8x31>
    </main>
  );
}
