import Image from "next/image";
import lightMode from "@/public/moon-regular.svg";
function LightMode() {
  return (
    <div className="flex">
      <Image
        src={lightMode}
        alt="light-mode"
        className="mx-4"
        width={20}
        height={20}
      />
      <p>Light Mode</p>
    </div>
  );
}

export default LightMode;
