import { StyleConfig } from "@chakra-ui/theme-tools";
import { FC, SVGProps } from "react";

type Props = StyleConfig & SVGProps<SVGSVGElement>;

export const Logo: FC<Props> = () => {
  return (
    <svg
      width="187"
      height="39"
      viewBox="0 0 187 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M95.9779 1.64648L104.435 29.3453H104.749L113.207 1.64648H123.437L110.677 39.4647H98.5077L85.7478 1.64648H95.9779Z"
        fill="black"
      />
      <path
        d="M137.365 40.0002C134.398 40.0002 131.837 39.4154 129.683 38.2459C127.541 37.0641 125.891 35.3837 124.734 33.2047C123.589 31.0134 123.017 28.4097 123.017 25.3936C123.017 22.4637 123.595 19.9031 124.752 17.7118C125.91 15.5082 127.541 13.7971 129.646 12.5783C131.751 11.3472 134.232 10.7317 137.088 10.7317C139.107 10.7317 140.953 11.0456 142.627 11.6735C144.302 12.3013 145.748 13.2308 146.967 14.4618C148.186 15.6929 149.134 17.2132 149.811 19.0229C150.488 20.8203 150.826 22.8823 150.826 25.209V27.4618H126.174V22.2175H142.424C142.412 21.2573 142.184 20.4017 141.741 19.6507C141.298 18.8998 140.689 18.315 139.913 17.8965C139.15 17.4656 138.269 17.2502 137.272 17.2502C136.263 17.2502 135.358 17.4779 134.558 17.9334C133.758 18.3766 133.124 18.986 132.656 19.7615C132.188 20.5248 131.942 21.3927 131.917 22.3652V27.7019C131.917 28.8591 132.145 29.8747 132.6 30.7488C133.056 31.6105 133.702 32.2814 134.539 32.7615C135.376 33.2417 136.374 33.4817 137.531 33.4817C138.331 33.4817 139.057 33.3709 139.71 33.1493C140.362 32.9277 140.922 32.6015 141.39 32.1706C141.858 31.7398 142.209 31.2104 142.443 30.5826L150.734 30.8226C150.389 32.6815 149.632 34.3004 148.463 35.6792C147.305 37.0456 145.785 38.1105 143.902 38.8738C142.018 39.6247 139.839 40.0002 137.365 40.0002Z"
        fill="black"
      />
      <path
        d="M164.468 1.64648V39.4647H155.438V1.64648H164.468Z"
        fill="black"
      />
      <path
        d="M186.225 11.101V17.7488H168.332V11.101H186.225ZM172.081 4.30558H181.11V30.5456C181.11 31.0996 181.197 31.5489 181.369 31.8936C181.554 32.226 181.818 32.4661 182.163 32.6138C182.508 32.7492 182.92 32.8169 183.4 32.8169C183.745 32.8169 184.108 32.7862 184.49 32.7246C184.884 32.6507 185.179 32.5892 185.376 32.54L186.742 39.0584C186.312 39.1815 185.702 39.3354 184.914 39.5201C184.139 39.7047 183.209 39.8217 182.126 39.8709C180.009 39.9694 178.193 39.7232 176.679 39.1323C175.177 38.5291 174.026 37.5935 173.225 36.3255C172.438 35.0575 172.056 33.4632 172.081 31.5428V4.30558Z"
        fill="black"
      />
      <rect
        x="34"
        y="20.8142"
        width="38"
        height="9"
        transform="rotate(-15 34 20.8142)"
        fill="black"
      />
    </svg>
  );
};
